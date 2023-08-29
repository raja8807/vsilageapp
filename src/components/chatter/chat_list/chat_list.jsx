import ChatRow from "./chat_row/chat_row";

const ChatList = (props) => {

    const {setCurrentChatEmail} = props

  const chatListData = [
    {
      senderEmail: "abcd@gmail.com",
      lastMessage: "hello",
    },
    {
      senderEmail: "24134das@gmail.com",
      lastMessage: "hello",
    },
    {
      senderEmail: "aefpiqepfbcd@gmail.com",
      lastMessage: "hello",
    },
    {
      senderEmail: "efqkef@gmail.com",
      lastMessage: "hello",
    },
    {
      senderEmail: "oefqefq;@gmail.com",
      lastMessage: "hello",
    },
    {
      senderEmail: "ifeqoieio@gmail.com",
      lastMessage: "hello",
    },
  ];



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
