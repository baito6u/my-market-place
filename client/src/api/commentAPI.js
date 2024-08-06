import * as requester from "./requester";

const BASE_URL = `${import.meta.env.VITE_API_URL}/data/comments`//"http://localhost:3030/data/comments";

const getAllComments = async (productId) => {
    const query = new URLSearchParams({
        where: `productId="${productId}"`,
        load: `owner=_ownerId:users`,
    })
  const result = await requester.get(`${BASE_URL}?${query}`);

  return result;

};

const create = async (productId, comment) => {
  const newComment = await requester.post(BASE_URL, {
    productId,
    comment,
  });

  return newComment;
};

const commentAPI = {
  getAllComments,
  create,
};

export default commentAPI;
