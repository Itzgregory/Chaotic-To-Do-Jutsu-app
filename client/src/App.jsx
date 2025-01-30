import React from 'react';
import './index.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { TodoContainer } from "./components/container/todo/Todo";
import { Login, Signup } from "./components/view";
import { HelmetToDoApp } from "./utils/helmet/helmet.jsx";
import Layout from './components/layout/Layout.jsx';
import ProtectedRoute from './components/router/ProtectedRoute';
import { User } from './components/container/user/User';

function App() {
  return (
    <BrowserRouter>
      <HelmetToDoApp />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/login" replace />} />
          <Route path="login" element={<User><Login /></User>} />
          <Route path="register" element={<User><Signup /></User>} />
          <Route element={<ProtectedRoute />}>
            <Route path="dashboard" element={<User><TodoContainer /></User>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;