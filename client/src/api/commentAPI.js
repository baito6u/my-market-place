import * as requester from "./requester";

const BASE_URL = "http://localhost:3030/jsonstore/comments";

const create = async (gameId, username, text) => {
  const newComment = await requester.post(BASE_URL, {
    gameId,
    username,
    text,
  });

  return newComment;
};

const commentAPI = {
  create,
};

export default commentAPI;
