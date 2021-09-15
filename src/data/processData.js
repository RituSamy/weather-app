// process the data to return an array of objects representing each day. each object has a date, temps, and desc.
export default function processData(data) {
  var { list } = data;

  let filteredData = list.map((it) => {
    let {
      dt_txt,
      main: { temp },
      weather: [{ description }],
    } = it;
    return { dt_txt, temp, description };
  });

  let forecast = [];
  for (var i = 0; i < filteredData.length; i++) {
    if (i % 8 === 0) {
      let arr = filteredData.slice(i, i + 7);
      let dayObject = {
        date: arr[0].dt_txt.slice(0, 10),
        weather: arr,
        description: arr[0].description,
        temp_min: formatTemp(getMinMax(arr)[0]),
        temp_max: formatTemp(getMinMax(arr)[1]),
      };
      forecast.push(dayObject);
    }
  }
  console.log("forecast:", forecast);
  // array of objects, each containing a max and min temp,
  // and a day, which is an array of objects, each containing a date, temp and description.
  return forecast;
}

const formatTemp = (temp) =>
  Math.round((((temp - 273) * (9 / 5) + 32) * 10) / 10) + "˚";

function getMinMax(arr) {
  let minTemp = Number.MAX_SAFE_INTEGER;
  let maxTemp = Number.MIN_SAFE_INTEGER;
  for (var i = 0; i < arr.length; i++) {
    let { temp } = arr[i];
    if (temp < minTemp) {
      minTemp = temp;
    }
    if (temp > maxTemp) {
      maxTemp = temp;
    }
  }
  return [minTemp, maxTemp];
}
