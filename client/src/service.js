/* eslint-disable linebreak-style */
import { get, post, put, del } from "./api";

export const getMessage = async () => {
  const response = await get("/");
  return response.data.message;
};
export const getQuestions = async () => {
  const response = await get("/questions");
  return response.data;
};
export const getComments = async (data) => {
  const response = await get("/comments/" + data);
  return response.data;
};
export const postQuestion = async (data) => {
  const response = await post("/question", data);
  return response.data;
};
export const postComment = async (data) => {
  const response = await post("/comment", data);
  return response.data;
};
export const postUser = async (data) => {
  const response = await post("/newuser", data);
  return response.data;
};
export const incrementLikes = async (data) => {
  const response = await put(`questions/${data}/increment-likes`);
  return response.data;
};
export const incrementViews = async (data) => {
  const response = await put(`questions/${data}/increment-views`);
  return response.data;
};

export const deleteQuestion = async (data) => {
  const response = await del("/question", {
    data: data,
  });
  return response.data;
};

export const deleteComment = async (data) => {
  const response = await del("/comment", {
    data: data,
  });
  return response.data;
};

export const updateQuestion = async (data) => {
  const response = await put("/question", data);
  return response.data;
};

export const updateComment = async (data) => {
  const response = await put("/comment", data);
  return response.data;
};