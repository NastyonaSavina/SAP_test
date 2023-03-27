
import axios from 'axios';

export const FetchUsers= (page) => {
    
  const response = axios.get(
    `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
  );
  
  return response;
}