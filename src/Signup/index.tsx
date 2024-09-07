import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { FormEvent } from "react";

export default function Signup() {
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    navigate("/dashboard");
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h3 className={styles.header}>CADASTRE-SE</h3>

        <input type="text" placeholder="Insira seu nome completo" className={styles.input} />
        <input type="email" placeholder="Insira seu e-mail" className={styles.input} />
        <input type="password" placeholder="Insira a senha" className={styles.input} />
        <input type="password" placeholder="Insira a senha novamente" className={styles.input} />

        <button className={styles.btnCadastrar}>Cadastrar</button>
      </form>
    </div>
  );
}
