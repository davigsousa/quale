import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

api.interceptors.request.use(async (config) => {
  const token = process.env.GATSBY_READ_KEY;

  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }

  return config;
});

const apiKey = process.env.GATSBY_API_KEY;

export const keyString = `api_key=${apiKey}&language=pt-BR`;
export default api;
