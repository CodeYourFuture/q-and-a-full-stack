/* eslint-disable linebreak-style */
import { create } from "axios";

const client = create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const get = client.get;
export const post = client.post;
export const put = client.put;
export const del = client.delete;
