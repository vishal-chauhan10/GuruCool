import {create} from 'apisauce';

const client = create({
  // baseURL: 'http://192.168.0.107:8000/',
  baseURL: 'http://192.168.29.125:8000/',

  timeout: 10000,
  headers: {
    'content-type': 'application/json',
  },
});

export default client;
