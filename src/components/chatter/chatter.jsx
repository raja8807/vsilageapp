import { ChatDots, Send, X } from "react-bootstrap-icons";
import Chat from "./chat_box/chat/chat";
import styles from "./chatter.module.scss";
import { useEffect, useRef, useState } from "react";
import ChatBox from "./chat_box/chat_box";
import ChatterDrawer from "./chatter_drawer/chatter-drawer";
const Chatter = () => {
  const [showChatBox, setShowChatBox] = useState(false);

  const chatTable = [
    {
      id: "123",
      message: "message fj9ae",
      senderEmail: "1234@gmail.com",
      recieverEmail: null,
      senderId: null,
      isRead: false,
    },
    {
      id: "123x",
      message: "admin message",
      senderEmail: "admin@gmail.com",
      recieverEmail: '1234@gmail.com',
      senderId: "1234h3oiqh34u",
      isRead: false,
    },
  ];

  return (
    <>
      <ChatterDrawer show={showChatBox} setShow={setShowChatBox} />
      <div
        className={styles.openChatButton}
        onClick={() => {
          setShowChatBox(true);
        }}
      >
        <ChatDots />
      </div>
    </>
  );
};

export default Chatter;
