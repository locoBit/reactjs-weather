import { getHourFromUnixDate, formatUnixDate } from './../services/dateService';
import formatWeatherData from './../services/formatWeatherData';

const formatForecastData = data => {
  const allowedHours = [ 6, 12, 18 ];
  const { list } = data;

  const formattedInfo = list.filter(date => {
    const hour = getHourFromUnixDate(date.dt);

    return allowedHours.includes(hour);
  }).map(date => {
    const info = {
      weekDay: formatUnixDate(date.dt),
      hour: getHourFromUnixDate(date.dt),
      data: formatWeatherData(date)
    };

    return info;
  });

  return formattedInfo;
};

export default formatForecastData;
