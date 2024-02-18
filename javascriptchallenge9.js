function printForecast(arr) {
  let forecastString = "";
  for (let i = 0; i < arr.length; i++) {
    const tempString = `... ${arr[i]}ºC in ${i + 1} day`;
    forecastString += tempString;
    if (i !== arr.length - 1) {
      forecastString += " ... ";
    }
  }
  console.log(forecastString);
}
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
printForecast(data1);
printForecast(data2);
