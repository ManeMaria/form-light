import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-light.herokuapp.com',
});

export default api;
