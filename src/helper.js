import kinderData from './data/kindergartners_in_full_day_program.js';

export default class DistrictRepository {
  constructor(data) {
    this.stats = this.dataCleaner(data)
  }

dataCleaner = (data) => {
    let dataObj = data.reduce((dataObj, district) => {

      let location = district.Location.toUpperCase();
      let year = district.TimeFrame
      let stat = Math.round(district.Data * 1000)/1000;
      if(!stat) {
        stat = 0
      }
      let correctStats = {[year]: stat}

      if(!dataObj[location]) {
        dataObj[location] = {
          location,
          stats: {}
        }
      } 
      dataObj[location].stats = {...dataObj[location].stats, ...correctStats}
       
      return dataObj
    },{})
    return  dataObj
  }

findByName = (str) => {
  if (!str) {
    return
  }
  let cleanStr = str.toUpperCase()
    return this.stats[cleanStr]
  }

findAllMatches = (str = '') => {
  str = str.toUpperCase()
  return Object.values(this.stats).filter(district => {
    return district.location.includes(str)
  })
}


}


