const { X, Send } = require("react-bootstrap-icons");
import { useEffect, useRef, useState } from "react";
import styles from "./chat_box.module.scss";
import Chat from "./chat/chat";

const ChatBox = () => {
  const [chatData, setChatData] = useState([
    {
      id: "chat1",
      senderId: null,
      sendedEmail: "xxx@gmail.com",
      message: "Hello this is new message from user",
    },
    {
      id: "chat2",
      senderId: "393r097378w47w",
      sendedEmail: "admin@gmail.com",
      message: "Hello this is new message from user",
    },
    {
      id: "chat3",
      senderId: null,
      sendedEmail: "xxx@gmail.com",
      message: "Hello this is new message from user",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatData]);

  const sendChat = () => {
    setChatData((prev) => [
      ...prev,
      {
        id: Math.random(),
        senderId: "393r097378w47w",
        sendedEmail: "admin@gmail.com",
        message: newMessage.trim(),
      },
    ]);
    setNewMessage("");
  };

  const scrollRef = useRef(null);

  return (
    <>
      <div className={`${styles.chatter} `}>
        {chatData.map((chat) => (
          <Chat key={chat.id} isAdmin={!!chat.senderId} chat={chat} />
        ))}
        <div ref={scrollRef} />
      </div>
      <div className={styles.send_control}>
        <textarea
          placeholder="Type Your Message.."
          value={newMessage}
          onChange={(e) => {
            setNewMessage(e.target.value);
          }}
        />
        <div className={styles.send_btn} onClick={sendChat}>
          <Send />
        </div>
      </div>
    </>
  );
};

export default ChatBox;
