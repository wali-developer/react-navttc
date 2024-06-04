import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { getUsers } from "./api/getUsers";

export async function usersLoader() {
  const users = await getUsers();
  return { users };
}

const Users = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
      <NavLink to={`/users/${5}`}>Go to user</NavLink>
    </div>
  );
};

export default Users;
