import {
  Check,
  CheckAll,
  Clock,
  ExclamationCircle,
} from "react-bootstrap-icons";
import styles from "./chat.module.scss";

const Chat = (props) => {
  const { isCurrentUser, chat } = props;

  const createdAt = new Date(chat.createdAt);

  const getIcon = () => {
    if (chat.status === "success") {
      return chat.isRead ? (
        <CheckAll style={{ color: "skyblue", fontSize: "14px" }} />
      ) : (
        <Check style={{ color: "skyblue", fontSize: "14px" }} />
      );
    }

    if (chat.status === "pending") {
      return <Clock />;
    }

    if (chat.status === "failed") {
      return <ExclamationCircle style={{ color: "red" }} />;
    }

    return chat.isRead ? (
      <CheckAll style={{ color: "skyblue", fontSize: "14px" }} />
    ) : (
      <Check style={{ color: "skyblue", fontSize: "14px" }} />
    );
  };

  return (
    <div className={`${styles.chat} ${isCurrentUser && styles.isAdmin}`}>
      <pre className={styles.message}>
        {chat.message}
        {chat.createdAt && (
          <small>
            {`${createdAt.getDate()}.${createdAt.getMonth()}.${createdAt
              .getFullYear()
              .toString()
              .slice("2")}`}{" "}
            -{`${createdAt.getHours()}:${createdAt.getMinutes()}`}
            {isCurrentUser && getIcon()}
          </small>
        )}
      </pre>
    </div>
  );
};

export default Chat;
