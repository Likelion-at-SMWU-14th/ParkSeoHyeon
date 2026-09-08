import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const createPost = async (newPost) => {
  const { data } = await axios.post(`${BASE_URL}/posts`, newPost);
  return data;
};

export const fetchPosts = async () => {
  const { data } = await axios.get(`${BASE_URL}/posts`);
  return data;
};

export const updatePost = async ({ id, ...updateFields }) => {
  const { data } = await axios.put(`${BASE_URL}/posts/${id}`, updateFields);
  return data;
};

export const deletePost = async (id) => {
  await axios.delete(`${BASE_URL}/posts/${id}`);
  return id;
};
