import terms from '../terms/terms.json';


export function getAllDataClimate(dataCity) {

    const allDataClimate = [];

    for (const i in dataCity) {
        const { manha, tarde, noite } = dataCity[i];
  
        const propertyOfClimateIsNotNull = validationIfPropertyOfDataCityExist(manha, tarde, noite);
  
        if (propertyOfClimateIsNotNull) {
          allDataClimate.push(manha, tarde, noite);
        } else {
          allDataClimate.push(dataCity[i]);
        }
    }

    return allDataClimate;
}

export function allDataOfStation({ CHUVA, DT_MEDICAO }) {
  const dataNotInUndefined = validationIfPropertyOfStationExist(CHUVA, DT_MEDICAO);

  if(dataNotInUndefined != undefined) {
    const rain = percentageRain(CHUVA);
    const datePrevision = formatDate(DT_MEDICAO);
    const percentageRainOfDate = [];

    percentageRainOfDate.push({rain, datePrevision});

    return percentageRainOfDate;
  }
}

const percentageRain = (rain) => {

  if(!rain) {
    return terms.notWeatherPlusLightUmbrella;
  }

  if(rain == 0) {
    return terms.notRain
  }

  if(rain <= 2.5) {
    return terms.lightRain;
  }

  if(rain >= 2.6 && rain <= 7.6) {
    return terms.rainModerate;
  }

  if(rain >= 7.7 && rain <= 11.5) {
    return terms.rainStrong;
  }

  if(rain >= 11.6) {
    return terms.rainSuperStrong;
  }

}

const formatDate = (date) => {
  try {
    const regexDate =  /-/gi;
    if(date !== undefined && date) {
      const dateFormat = date.replace(regexDate, "/").split("/").reverse().join("/");

      return dateFormat;
    }
  } catch (e) {
    console.error(e)
  }
  
}

const validationIfPropertyOfStationExist = (rain, date) => {
  return date !== undefined && rain !== undefined;
}

const validationIfPropertyOfDataCityExist = (manha, tarde, noite) => {
    return manha !== undefined && tarde !== undefined && noite !== undefined;
}