import React, { useState } from "react";
import UserHeaderNav from "./UserHeaderNav";
import styles from "./UserCabecalho.module.css";
import { useLocation } from "react-router-dom";

const UserCabecalho = () => {
  const [title, setTitle] = useState("");
  const location = useLocation();
  React.useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case "/conta/estatisticas":
        setTitle("Estatísticas");
        break;
      case "/conta/postar":
        setTitle("Adicione sua Foto");
        break;
      default:
        setTitle("Minha Conta");
    }
  }, [location]);
  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserCabecalho;
