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
import UseRefExample from "./components/useRef";
import { ContextProvider } from "./contexts/CounterContext";

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
          path: "/users",
          element: <Users />,
          loader: usersLoader,
        },
        {
          path: "/users/:userId",
          element: <UserDetails />,
          loader: userDetailsLoader,
        },
        {
          path: "/useRef",
          element: <UseRefExample />,
        },
      ],
    },
    {
      path: "/todo",
      element: <TodoApp />,
    },
  ]);

  return (
    <ContextProvider>
      <RouterProvider router={router} />;
    </ContextProvider>
  );
};

export default App;
