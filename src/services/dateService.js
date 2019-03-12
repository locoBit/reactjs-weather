import moment from 'moment';
import 'moment/locale/es';

const getHourFromUnixDate = unixDate => {
  return moment.unix(unixDate).hour();
};

const formatUnixDate = unixDate => {
  return moment.unix(unixDate).format('ddd');
};

export {
  getHourFromUnixDate,
  formatUnixDate,
};
