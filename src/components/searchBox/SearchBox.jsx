import styles from "./SearchBox.module.css";

const SearchBox = ({ searchTerm, setSearchTerm }) => {
  return (
    <div>
      <label className={styles.searchContainer}>
        <span className={styles.searchSpan}>Find contacts by name</span>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={setSearchTerm}
        />
      </label>
    </div>
  );
};

export default SearchBox;