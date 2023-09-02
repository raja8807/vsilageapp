import { useEffect, useState } from "react";
import ChatRow from "./chat_row/chat_row";

const ChatList = (props) => {
  const { setCurrentChatEmail, fetchChats, chatListData } = props;

  // const [chatListData, setChatListData] = useState([]);
  useEffect(() => {
    fetchChats();
    const interval = setInterval(() => {
      fetchChats();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {chatListData.map((data, i) => (
        <ChatRow
          key={i}
          senderEmail={data.senderEmail}
          lastMessage={data.lastMessage}
          setCurrentChatEmail={setCurrentChatEmail}
          unreadMessageCount={data?.unreadMessageCount}
          lastMessageTime={data?.lastMessageTime}
        />
      ))}
    </>
  );
};

export default ChatList;
