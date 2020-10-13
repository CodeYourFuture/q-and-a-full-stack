import { create } from "axios";

const client = create({ baseURL: "/api" });

export const get = client.get;
export const post = client.post;
export const put = client.put;
export const del = client.delete;

