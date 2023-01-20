import styles from "./Form.module.css";

const Form = () => {
  return (
    <div className={styles.form}>
      <input type="text" />
      <button>
        <span>Criar</span>{" "}
        <img src="./plus-icon.svg" alt="Ícone de adicionar" />{" "}
      </button>
    </div>
  );
};

export default Form;
