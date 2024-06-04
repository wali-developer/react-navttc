import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { getUserDetails } from "./api/getUsers";

export async function userDetailsLoader({ params }) {
  const user = await getUserDetails(params.userId);
  return { user };
}

const UserDetails = () => {
  const { user } = useLoaderData();
  console.log(user);
  return <div>UserDetails</div>;
};

export default UserDetails;
