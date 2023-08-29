import styles from "./chat.module.scss";

const Chat = (props) => {
  const { isAdmin, chat } = props;

  return (
    <div className={`${styles.chat} ${isAdmin && styles.isAdmin}`}>
      <pre className={styles.message}>
        {chat.message}
        <small>10-10-23 10:20</small>
      </pre>
    </div>
  );
};

export default Chat;
