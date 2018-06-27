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
  return Object.values(this.stats).filter(district => {
    return district.location.includes(str.toUpperCase())
  })
}

findAverage = (str) => {
  let districtData = this.findAllMatches(str)
  let average = districtData.reduce((average, district) => {
    let keys = Object.keys(district.stats)
      keys.forEach(year => {
       average += district.stats[year]
    })
    return Math.round(average/ keys.length *1000)/1000
  },0)
  return average
}

// findAverage = (str) => {
//   let average = this.findAllMatches(str).reduce((average, district) => {
//     Object.keys(district.stats).forEach(year => average += district.stats[year])
//     return Math.round(average/ Object.keys(district.stats).length *1000)/1000
//   },0)
//   return average
// }

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


