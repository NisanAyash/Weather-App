import moment from 'moment';

const date = {
  isFulldate: (date) => moment(date).format('LLL'),
  isDay: (date) => moment(date).format('dddd'),
};

export default date;
