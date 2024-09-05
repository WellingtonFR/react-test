import styles from "./styles.module.scss";

export default function Login() {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <img src="/login.png" alt="login image" width={100} height={100} />
        <h2 className={styles.header}>LOGIN</h2>
        <input type="text" placeholder="Insira seu e-mail" className={styles.input} />
        <input type="password" placeholder="Insira sua senha" className={styles.input} />
        <button className={styles.btnLogin}>ENTRAR</button>
      </form>
    </div>
  );
}
