import axios from 'axios';

const request = axios.create({
  timeout: 1000 * 60,
});

request.interceptors.request.use((config) => {
  console.log(config);
  return Object.assign({}, config, {
    headers: {},
  });
});

request.interceptors.response.use((response) => {
  console.log(response);
  return Promise.resolve(response.data)
}, (err) => {
  return Promise.reject(err)
});

export default request;
