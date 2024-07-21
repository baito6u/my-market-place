import * as requester from "./requester";

const BASE_URL = "http://localhost:3030/jsonstore/products";

const getAll = async () => {
  const result = await requester.get(BASE_URL);

  const products = Object.values(result);

  return products;
};

const getOne = (productId) => requester.get(`${BASE_URL}/${productId}`);

const create = async (productData) => {
  const result = await requester.post(BASE_URL, productData);

  return result;
};

const productsAPI = {
  getAll,
  getOne,
  create,
};

export default productsAPI;
