import { Check, Clock, ExclamationCircle } from "react-bootstrap-icons";
import styles from "./chat.module.scss";

const Chat = (props) => {
  const { isCurrentUser, chat } = props;

  const createdAt = new Date(chat.createdAt);

  const getIcon = () => {
    if (chat.status === "success") {
      return <Check style={{ color: "skyblue", fontSize: "14px" }} />;
    }
    if (chat.status === "pending") {
      return <Clock />;
    }

    if (chat.status === "failed") {
      return <ExclamationCircle style={{ color: "red" }} />;
    }
    return <Check style={{ color: "skyblue", fontSize: "14px" }} />;
  };

  return (
    <div className={`${styles.chat} ${isCurrentUser && styles.isAdmin}`}>
      <pre className={styles.message}>
        {chat.message}
        <small>
          {`${createdAt.getDate()}.${createdAt.getMonth()}.${createdAt
            .getFullYear()
            .toString()
            .slice("2")}`}{" "}
          -{`${createdAt.getHours()}:${createdAt.getMinutes()}`}
          {/* 10-10-23 10:20  */}
          {isCurrentUser && getIcon()}
        </small>
      </pre>
    </div>
  );
};

export default Chat;
