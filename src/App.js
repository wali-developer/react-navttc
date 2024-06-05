import "./styles/style.css";

import React from "react";
import Login from "./components/forms/Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Counter from "./components/counterApp/Counter";
import Lists from "./components/list/Lists";
import TodoApp from "./components/todo/TodoApp";
import RootLayout from "./components/layout";
import ErrorPage from "./components/ErrorPage";
import Users, { usersLoader } from "./components/users/Users";
import UserDetails, { userDetailsLoader } from "./components/users/UserDetails";
import Posts, { postsLoader } from "./components/posts/Posts";
import { PostDetails, postDetailsLoader } from "./components/posts/PostDetails";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/counter",
          element: <Counter />,
        },
        {
          path: "/list",
          element: <Lists />,
        },
        {
          path: "/posts",
          element: <Posts />,
          loader: postsLoader,
        },
        {
          path: "/posts/:postId",
          element: <PostDetails />,
          loader: postDetailsLoader,
        },
      ],
    },
    {
      path: "/todo",
      element: <TodoApp />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
