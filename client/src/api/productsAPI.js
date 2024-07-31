import * as requester from "./requester";

const BASE_URL = "http://localhost:3030/data/products";

const getAll = async () => {
  const result = await requester.get(BASE_URL);

  return result;
};

const getOne = (productId) => requester.get(`${BASE_URL}/${productId}`);

export const getLatest = async () => {
  const query = new URLSearchParams({
      //sortBy: `_createdOn desc`,
      offset: 5,
      pageSize: 3,
  });

  const result = await requester.get(`${BASE_URL}?${query}`);

  return result;
}

const create = async (productData) => {
  const result = await requester.post(BASE_URL, productData);

  return result;
};

const edit = async (productId, productData) => {
  const result = await requester.put(`${BASE_URL}/${productId}`, productData);

  return result;
};

const remove = async (productId) => requester.del(`${BASE_URL}/${productId}`);

const productsAPI = {
  getAll,
  getOne,
  getLatest,
  create,
  edit,
  remove,
};

export default productsAPI;
