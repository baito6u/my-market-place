import * as requester from "./requester";

const BASE_URL = "http://localhost:3030/jsonstore/products";

export const GetAll = () => requester.get(BASE_URL);
