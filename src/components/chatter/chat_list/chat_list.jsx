import { useEffect, useState } from "react";
import ChatRow from "./chat_row/chat_row";

const ChatList = (props) => {
  const { setCurrentChatEmail, setChats, adminEmail } = props;

  const [chatListData, setChatListData] = useState([]);
  useEffect(() => {
    const fetchChats = async () => {
      const res = await fetch("api/chat/getChatList");
      const data = await res.json();
      setChats(data);
      const allchats = data;
      // .filter((c) => !c.senderId);

      console.log(allchats);

      const unique = [...new Set(allchats.map((chat) => chat.senderEmail))];

      const x = unique.map((u) =>
        allchats.filter((c) => c.senderEmail === u || c.recieverEmail === u)
      );
      const chatList = x.map((c, i) => ({
        senderEmail: c[0].senderEmail,
        lastMessage: c[c.length - 1].message,
      }));
      setChatListData(chatList.filter((c) => c.senderEmail !== adminEmail));
    };
    fetchChats();
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
