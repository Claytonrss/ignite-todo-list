import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="./logo.png" alt="logo Todo-List" />
    </header>
  );
};

export default Header;
