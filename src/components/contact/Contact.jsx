import { MdPhoneIphone } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import styles from "./Contact.module.css";

const Contact = ({ id, username, number, onDelete }) => {
  return (
    <div className={styles.contactStyle}>
      <li key={id}>
        <div className={styles.textContainer}>
          <BiSolidContact className={styles.svg} />
          <p className={styles.textStyle}>Name: {username}</p>
        </div>
        <div className={styles.textContainer}>
          <MdPhoneIphone className={styles.svg} />
          <p className={styles.textStyle}>Number: {number}</p>
        </div>
      </li>
      <button className={styles.deleteButton} onClick={() => onDelete(id)}>
        Delete
      </button>     
    </div>
  );
};

export default Contact;