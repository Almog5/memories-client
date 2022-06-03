
import axios from 'axios';

const URL = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(URL);

export const createPost = (post) => axios.post(URL, post);

export const updatePost = (currentId, post) => axios.patch(`${URL}/${currentId}`, post);

export const deletePost = (currentId) => axios.delete(`${URL}/${currentId}`);

export const likePost = (currentId) => axios.patch(`${URL}/${currentId}/likePost`);