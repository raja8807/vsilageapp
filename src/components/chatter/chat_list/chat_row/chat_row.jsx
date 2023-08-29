import styles from "./chat_row.module.scss";

const ChatRow = (props) => {
  const { senderEmail, lastMessage, setCurrentChatEmail } = props;

  return (
    <div
      className={styles.chat_row}
      onClick={() => {
        setCurrentChatEmail(senderEmail);
      }}
    >
      <p>{senderEmail}</p>
      <small>{lastMessage}</small>
    </div>
  );
};

export default ChatRow;
