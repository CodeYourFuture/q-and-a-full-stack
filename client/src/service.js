/* eslint-disable linebreak-style */
import { get,post,put,del } from "./api";

export const getMessage = async () => {
	const response = await get("/");
	return response.data.message;
};
export const getQuestions = async () => {
	const response = await get("/test");
	return response.data;
};
