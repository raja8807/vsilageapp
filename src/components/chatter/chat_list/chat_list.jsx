import { useEffect, useState } from "react";
import ChatRow from "./chat_row/chat_row";

const ChatList = (props) => {
  const { setCurrentChatEmail, setChats, adminEmail,fetchChats,chatListData,setChatListData } = props;

  // const [chatListData, setChatListData] = useState([]);
  useEffect(() => {
    const interval = setInterval(()=>{
      fetchChats();
    },5000)

    return ()=> clearInterval(interval)
  }, []);

  return (
    <>
      {chatListData.map((data, i) => (
        <ChatRow
          key={i}
          senderEmail={data.senderEmail}
          lastMessage={data.lastMessage}
          setCurrentChatEmail={setCurrentChatEmail}
        />
      ))}
    </>
  );
};

export default ChatList;
