import React from "react";
import { NavLink } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <NavLink to={`/posts/${post?.id}`}>
      <div className="p-7 border rounded-lg bg-gray-100">
        <h1 className="text-xl font-bold text-blue-600">{post?.title}</h1>
        <p className="tex-base mt-3">{post?.body}</p>
      </div>
    </NavLink>
  );
};

export default Post;
