const { X, Send } = require("react-bootstrap-icons");
import { useEffect, useRef, useState } from "react";
import styles from "./chat_box.module.scss";
import Chat from "./chat/chat";
import { useSession } from "next-auth/react";
import { fetchData } from "next-auth/client/_utils";

const ChatBox = (props) => {
  const { currentChatEmail, chats, isUser, fetchChats } = props;

  const session = useSession();
  const [chatData, setChatData] = useState(
    chats
      ? chats.filter(
          (chat) =>
            chat.senderEmail === currentChatEmail ||
            chat.recieverEmail === currentChatEmail
        )
      : []
  );

  // console.log(currentChatEmail);

  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    if (chats) {
      setChatData(
        chats.filter(
          (chat) =>
            chat.senderEmail === currentChatEmail ||
            chat.recieverEmail === currentChatEmail
        )
      );
    }
  }, [chats]);

  useEffect(() => {
    // let interval;
    // if (isUser) {
    const fetchData = async () => {
      const res = await fetch("api/chat/getChatList");
      const data = await res.json();
      setChatData(
        data.filter(
          (c) =>
            c.senderEmail === currentChatEmail ||
            c.recieverEmail === currentChatEmail
        )
      );
    };
    // fetchData();

    if (isUser) {
      fetchData();
    } else {
      fetchChats();
    }
    // }

    const interval = setInterval(() => {
      if (isUser) {
        fetchData();
      } else {
        fetchChats();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isUser]);

  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatData]);

  const sendChat = async () => {
    let newChat;
    if (session.data) {
      newChat = {
        senderEmail: session.data?.user?.email,
        senderId: session.data?.user?.id,
        message: newMessage,
        recieverEmail: currentChatEmail,
        isRead: false,
      };
    } else {
      newChat = {
        senderEmail: sessionStorage.getItem("currentUserEmail"),
        senderId: null,
        message: newMessage,
        recieverEmail: null,
        isRead: false,
      };
    }

    console.log(newChat);

    const tempId = Math.random();

    setChatData((prev) => [
      ...prev,
      {
        tempId,
        ...newChat,
        status: "pending",
        createdAt: new Date()
      },
    ]);

    const res = await fetch("api/chat/sendChat", {
      method: "POST",
      body: JSON.stringify(newChat),
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    setChatData((prev) => {
      const prevChats = [...prev];

      const index = prevChats.findIndex((c) => c.tempId === tempId);

      prevChats[index] = {
        ...prevChats[index],
        status: res.status === 200 ? "success" : "failed",
      };

      return prevChats;
    });

    setNewMessage("");
  };

  const scrollRef = useRef(null);

  const getIsCurrentUser = (email) => {
    if (session?.data) {
      return email === session?.data?.user?.email;
    }
    return email === sessionStorage.getItem("currentUserEmail");
  };

  return (
    <>
      <div className={`${styles.chatter} `}>
        {chatData.map((chat) => (
          <Chat
            key={chat.id}
            isCurrentUser={getIsCurrentUser(chat.senderEmail)}
            chat={chat}
          />
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
        <div
          className={styles.send_btn}
          onClick={() => {
            if (newMessage) {
              sendChat();
            }
          }}
        >
          <Send />
        </div>
      </div>
    </>
  );
};

export default ChatBox;
