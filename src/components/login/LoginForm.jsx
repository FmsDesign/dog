import React from "react";
import Button from "../forms/Button";
import Input from "../forms/Input";
import useForm from "../../Hooks/useForm";
import { UserContext } from "../../UserContext";
import Error from "../Helpe/Error";
import styles from "./LoginForm.module.css";
import stylesBtn from "../forms/Button.module.css";

import { Link } from "react-router-dom";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className={`animationLeft`}>
      <h1 className="title">Login</h1>
      <form className={styles.forms} onSubmit={handleSubmit}>
        <Input label="Usuário" name="username" type="text" {...username} />
        <Input label="Senha" name="password" type="password" {...password} />
        {loading ? (
          <Button disabled>carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">
        Perdeu a Senha?
      </Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}> Cadastre-se </h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={stylesBtn.button} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
