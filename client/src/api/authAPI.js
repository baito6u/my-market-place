import * as requester from "./requester";


const BASE_URL = `${import.meta.env.VITE_API_URL}/users` //"http://localhost:3030/users";

export const login = async (email, password) => {
  const result = await requester.post(`${BASE_URL}/login`, {
    email,
    password,
  });

  return result;
};

export const register = (username, email, password) => {
  const result = requester.post(`${BASE_URL}/register`, {
    username,
    email,
    password,
  });

  return result;
};

export const logout = () => requester.get(`${BASE_URL}/logout`);
