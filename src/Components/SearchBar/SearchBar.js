import styles from "./SearchBar.module.css";
import SearchIcon from "../../Assets/SvgComponents/SearchIcon";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <form onSubmit={submitHandler} className={styles.searchBarContainer}>
      <input
        onChange={(event) => setInput(event.target.value)}
        className={styles.input}
        placeholder="E.g. Chicken, Pasta.."
        type="text"
        value={input}
      />
      <button className={styles.button}>
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchBar;
