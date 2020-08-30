import axios from 'axios';

const api = axios.create({
  baseURL: 'ttps://api.themoviedb.org/3/',
});

api.interceptors.request.use(async (config) => {
  const token = process.env.GATSBY_READ_KEY;

  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
