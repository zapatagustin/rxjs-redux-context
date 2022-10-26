import React from "react";
import { useSelector } from "react-redux";

export const ComponentRedux2 = () => {
  const userState = useSelector((store) => store.user);
  return <div>The user state is: {JSON.stringify(userState)}</div>;
};
