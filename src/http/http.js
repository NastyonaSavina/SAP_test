
import axios from 'axios';

export const publicApi = axios.create({
  baseURL: 'https://63ecdc07be929df00cb3afd0.mockapi.io',
});

