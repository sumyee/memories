import axios from 'axios';
import Qs from 'qs';

const request = axios.create({
  timeout: 1000 * 60,
});

request.interceptors.request.use((config) => {
  console.log(config);
  return Object.assign({}, config, {
    // headers: {
    //   'Content-Type': 'application/x-www-form-urlencoded',
    // },
    // data: Qs.stringify(config.data),
  });
});

request.interceptors.response.use((response) => {
  console.log(response);
  return Promise.resolve(response.data)
}, (err) => {
  return Promise.reject(err)
});

export default request;
