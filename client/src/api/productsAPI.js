import * as requester from "./requester";

const BASE_URL = "http://localhost:3030/jsonstore/products";

export const GetAll = async () => {
    const result = await requester.get(BASE_URL);

    const products = Object.values(result);

    return products;
}
