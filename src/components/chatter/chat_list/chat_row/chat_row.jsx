import styles from "./chat_row.module.scss";

const ChatRow = (props) => {
  const {
    senderEmail,
    lastMessage,
    setCurrentChatEmail,
    unreadMessageCount,
    lastMessageTime,
  } = props;


  const time = new Date(lastMessageTime);

  return (
    <div
      className={styles.chat_row}
      onClick={() => {
        setCurrentChatEmail(senderEmail);
      }}
    >
      <div className={styles.msg}>
        <p>{senderEmail}</p>
        <small>{lastMessage}</small>
      </div>
      <div className={styles.right}>
        {unreadMessageCount > 0 && (
          <span>{unreadMessageCount > 9 ? "9+" : unreadMessageCount}</span>
        )}
        <p className={styles.time}>
          {`${time.getDate()}.${time.getMonth()}.${time
            .getFullYear()
            .toString()
            .slice("2")}`}{" "}
          -{`${time.getHours()}:${time.getMinutes()}`}
        </p>
      </div>
    </div>
  );
};

export default ChatRow;
