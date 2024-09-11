import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";

import Home from "./components/Home";
import Login from "./components/login/Login";
import { UserStorage } from "./UserContext";
import User from "./components/User/User";
import ProtectedRoutes from "./components/Helpe/ProtectedRoutes";
import Foto from "./Photo/Foto";
import UserProfile from "./components/User/UserProfile";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
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
              <Route path="foto/:id" element={<Foto />} />
              <Route path="perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
