import axios from 'axios';

const http = async (url, data) =>
  await axios({
    method: 'GET',
    url,
    data,
  });

export default http;
