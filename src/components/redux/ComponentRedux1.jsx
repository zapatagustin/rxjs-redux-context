import React from "react";
import { useDispatch } from "react-redux";
import { createUser, modifyUser, resetUser } from "../../redux/states/user";

export function ComponentRedux1() {
  const dispatcher = useDispatch();
  const handleClick = () => {
    dispatcher(createUser({ name: "ella", email: "ella@gmail.com" }));
  };

  const handleClickModify = () => {
    dispatcher(modifyUser({ name: "mono", email: "mono@gmail.com" }));
  };

  const handleClickReset = () => {
    dispatcher(resetUser());
  };

  return (
    <div>
      <button onClick={handleClick}>send redux information, createUser</button>
      <button onClick={handleClickModify}>
        send redux information, modifyUser
      </button>
      <button onClick={handleClickReset}>
        send redux information, resetUser
      </button>
    </div>
  );
}
