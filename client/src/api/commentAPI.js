import * as requester from "./requester";

const BASE_URL = "http://localhost:3030/jsonstore/comments";

const create = async (productId, username, comment) => {
  const newComment = await requester.post(BASE_URL, {
    productId,
    username,
    comment,
  });

  return newComment;
};

const commentAPI = {
  create,
};

export default commentAPI;
