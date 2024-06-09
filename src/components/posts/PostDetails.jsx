import React from "react";
import { getPostComments, getPostDetails } from "./api/posts";
import { useLoaderData } from "react-router-dom";

export const postDetailsLoader = async ({ params }) => {
  const post = await getPostDetails(params?.postId);
  const comments = await getPostComments(params?.postId);
  return {
    post,
    comments,
  };
};

export const PostDetails = () => {
  const { post, comments } = useLoaderData();
  return (
    <div className="max-w-[400px] mx-auto py-20">
      <h1 className="text-3xl font-bold text-gray-700 text-center">
        Post Details
      </h1>
      <div className="mt-12">
        <h3 className="text-xl font-bold text-blue-700 text-center">
          {post?.title}
        </h3>
        <p className="text-base text-gray-700 mt-3 text-center">{post?.body}</p>
      </div>
    </div>
  );
};
