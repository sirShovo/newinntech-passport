import { Request, Response } from "express";
import axios, { AxiosResponse } from "axios";
import { PostEntry } from "../types";

export const getPosts = async (
  _req: Request,
  res: Response
): Promise<Response<{ message: string; data: [PostEntry] }>> => {
  const result: AxiosResponse = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const posts: [PostEntry] = result.data;
  return res.status(200).json({
    message: "get all posts",
    data: posts,
  });
};

export const getPost = async (
  req: Request,
  res: Response
): Promise<Response<{ message: string; data: PostEntry }>> => {
  const id: string = req.params.id;
  const result: AxiosResponse = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post: PostEntry = result.data;
  return res.status(200).json({
    message: `get post with id: ${id}`,
    data: post,
  });
};

export const updatePost = async (
  req: Request,
  res: Response
): Promise<Response<{ message: string; data: PostEntry }>> => {
  const id: string = req.params.id;
  const title: string = req.body.title ?? null;
  const body: string = req.body.body ?? null;
  const response: AxiosResponse = await axios.put(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      ...(title && { title }),
      ...(body && { body }),
    }
  );
  return res.status(200).json({
    message: "post updated successfully",
    data: response.data,
  });
};

export const deletePost = async (
  req: Request,
  res: Response
): Promise<Response<{ message: string; data: PostEntry }>> => {
  const id: string = req.params.id;
  const response: AxiosResponse = await axios.delete(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post = response.data;
  return res.status(200).json({
    message: "post deleted successfully",
    data: post,
  });
};

export const addPost = async (
  req: Request,
  res: Response
): Promise<Response<{ message: string; data: PostEntry }>> => {
  const title: string = req.body.title;
  const body: string = req.body.body;
  const response: AxiosResponse = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    {
      title,
      body,
    }
  );
  const post = response.data;
  return res.status(200).json({
    message: "post created successfully",
    data: post,
  });
};
