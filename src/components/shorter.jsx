import styles from "../assets/styles/Shorter.module.css";

export default function Shorter() {
  function handleClick(e) {
    e.preventDefault();
  }

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        handleClick(e);
      }}
    >
      <input
        type="text"
        name=""
        id=""
        placeholder="Shorten a link here..."
        className={styles.input}
      />
      <button className={styles.button}>Shorten It!</button>
    </form>
  );
}
