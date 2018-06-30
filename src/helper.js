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
    let correctStats = {[year]: stat}

      if(!stat) {
        stat = 0
      }

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
    const obj = {}
    const matches = Object.values(this.stats).filter(district => {
      return district.location.includes(str.toUpperCase())
    })
    matches.forEach(match => {
      const key = match.location;
      obj[key] = match
    })
    return obj
  }

  findAverage = (str) => {
    let districtData = this.findByName(str)
    let stats = Object.values(districtData.stats)
    let average = stats.reduce((average, stat) => {

    return average + stat
    })
    return Math.round((average / stats.length)*1000)/1000
  }

  compareDistrictAverages = (district1, district2) => {
    let upperCaseDOne = district1.toUpperCase()
    let upperCaseDTwo = district2.toUpperCase()
    let dOne = this.findAverage(district1.toUpperCase());
    let dTwo = this.findAverage(district2.toUpperCase());

    return {
      [upperCaseDOne]: dOne,
      [upperCaseDTwo]: dTwo,
      "compared": Math.round((dOne / dTwo)*1000)/1000 
    }
  }
}