import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/Home";
import Login from "./components/login/Login";
import { UserStorage } from "./UserContext";
import User from "./components/User/User";
import ProtectedRoutes from "./components/Helpe/ProtectedRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login/*" element={<Login />} />
          <Route
            path="conta/*"
            element={
              <ProtectedRoutes>
                <User />
              </ProtectedRoutes>
            }
          />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
};

export default App;
