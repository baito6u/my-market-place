import * as requester from "./requester";

const BASE_URL = "http://localhost:3030/jsonstore/comments";

const getAllComments = async (productId) => {
    const query = new URLSearchParams({
        where: `productId="${productId}"`
    })
  const result = await requester.get(`${BASE_URL}?${query}`);

//   TODDO: temp solution before migration to collections service
  return Object.values(result).filter(comment => comment.productId === productId);

};

const create = async (productId, username, comment) => {
  const newComment = await requester.post(BASE_URL, {
    productId,
    username,
    comment,
  });

  return newComment;
};

const commentAPI = {
  getAllComments,
  create,
};

export default commentAPI;
