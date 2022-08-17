const API_KEY = import.meta.env.VITE_API_KEY;

const calCelsius = (temp: number) => {
  let cell = Math.floor(temp - 273.15);
  return cell;
};

const weekday = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];

export const fetchToday = async (latitude: number, longitude: number) => { 
  try {
    const apiCall = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    );

    const response = await apiCall.json();
    const { dt, weather } = response;
    const date = new Date(dt * 1000);

    let today = {
      day: weekday[date.getDay()],
      icon: weather[0].icon,
      main: response.weather[0].main,
      allData: response,
      temp: calCelsius(response.main.temp), 
    };

    return today;
  } 
  catch (error) {
    console.log(error);
  }
};

export const fetchData = async (latitude: number, longitude: number) => {
  try {
    const apiCall = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    );

    const response = await apiCall.json();
    const { list } = response;
    let allDaysData = [];

    for (let i = 0; i < list.length; i += 8) {
      let obj = {
        dayName: weekday[new Date(list[i + 4].dt_txt).getDay()],
        temp: calCelsius(list[i].main.temp),
        icon: list[i].weather[0].icon,
      };
      allDaysData.push(obj);
    }

    return allDaysData;
  } 
  catch (error) {
    console.log(error);
  }
}; 