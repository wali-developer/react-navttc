import React from "react";
import { getPosts } from "./api/posts";
import { useLoaderData } from "react-router-dom";
import Post from "./Post";

export const postsLoader = async () => {
  const posts = await getPosts();
  return posts;
};

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div className="grid grid-cols-4 gap-6 my-12 px-12">
      {posts?.slice(0, 20)?.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default Posts;
