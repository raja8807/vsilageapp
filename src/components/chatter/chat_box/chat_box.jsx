const { X, Send } = require("react-bootstrap-icons");
import { useEffect, useRef, useState } from "react";
import styles from "./chat_box.module.scss";
import Chat from "./chat/chat";
import { useSession } from "next-auth/react";

const ChatBox = (props) => {
  const {
    currentChatEmail,
    chats,
    isUser,
    fetchChats,
    setChatListData,
    setHasNotifiaction,
    chatListData,
  } = props;

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

  const updateAdminChatsAsRead = async () => {
    setChatListData((prev) => {
      const list = [...prev];
      const index = prev.findIndex((cr) => cr.senderEmail === currentChatEmail);
      list[index].unreadMessageCount = 0;
      return list;
    });
    await fetch("api/chat/updateChat?email=" + currentChatEmail);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "api/chat/getUserChats?email=" + currentChatEmail
      );
      const data = await res.json();
      setChatData(data);
    };
    if (isUser) {
      fetchData();
      setHasNotifiaction(false);
    } else {
      updateAdminChatsAsRead();
      fetchChats();
    }
    const interval = setInterval(() => {
      if (isUser) {
        fetchData();
      } else {
        updateAdminChatsAsRead();
        fetchChats();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isUser]);

  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behavior: "instant" });

    if (!isUser) {
      setHasNotifiaction(chatListData?.some((c) => c.unreadMessageCount > 0));
    }

    return () => {
      if (!isUser) {
        setHasNotifiaction(chatListData?.some((c) => c.unreadMessageCount > 0));
      }
    };
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
    const tempId = Math.random();

    setChatData((prev) => [
      ...prev,
      {
        tempId,
        ...newChat,
        status: "pending",
        createdAt: new Date(),
      },
    ]);

    const res = await fetch("api/chat/sendChat", {
      method: "POST",
      body: JSON.stringify(newChat),
      headers: {
        "Content-Type": "application/json",
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
        {!session.data && (
          <Chat
            chat={{
              message:
                "Hello there! Need help? Reach out to us right here, and we'll get back to you as soon as we can!",
            }}
          />
        )}
        {chatData.map((chat) => (
          <Chat
            key={chat._id || chat.tempId}
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
