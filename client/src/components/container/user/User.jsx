import React from 'react';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logUser, regUser, getLogin, logOut } from "../../../features";
import { TodoContainer } from "../../container/todo/Todo";

export const User = ({ children }) => {
  const userLog = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
    name: "",
    surname: "",
  });

  const dispatch = useDispatch();

  const submitLogin = () => {
    dispatch(logUser(user));
  };

  const submitSigIn = () => {
    dispatch(regUser(user));
  };

  const closeSession = () => {
    setUser("");
    dispatch(logOut());
    navigate('/login');
  };

  useEffect(() => {
    dispatch(getLogin());
  }, [dispatch]);

  const props = { user, setUser, submitLogin, submitSigIn };

  return (
    <div>
      {userLog.loading && <div className="loadingApp">Jutsu-Loading...</div>}
      {!userLog.loading && userLog.user.length ? (
        <TodoContainer user={userLog} closeSession={closeSession} />
      ) : (
        children && React.isValidElement(children) 
          ? React.cloneElement(children, { props }) 
          : children
      )}
    </div>
  );
};