import { useEffect, useState } from "react";
import ChatBox from "../chat_box/chat_box";
import ChatList from "../chat_list/chat_list";
import styles from "./chatter-drawer.module.scss";
import { ArrowLeft, ArrowLeftCircle, X } from "react-bootstrap-icons";
import LoginBox from "../login_box/login_box";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

const { Offcanvas } = require("react-bootstrap");

const ChatterDrawer = (props) => {
  const { show, setShow, setHasNotifiaction } = props;
  const handleClose = () => setShow(false);

  const session = useSession();

  const isAuthenticated = !!session?.data;
  const [currentUserEmail, setCurrentUserEmail] = useState(null);

  const [chats, setChats] = useState([]);

  const [chatListData, setChatListData] = useState([]);

  const fetchChats = async () => {
    const res = await fetch("api/chat/getChatList");
    const data = await res.json();
    setChats(data);
    const allchats = data;

    const unique = [...new Set(allchats.map((chat) => chat.senderEmail))];

    const x = unique.map((u) =>
      allchats.filter((c) => c.senderEmail === u || c.recieverEmail === u)
    );
    const chatList = x.map((c, i) => {
      return {
        senderEmail: c[0].senderEmail,
        lastMessage: c[c.length - 1].message,
        lastMessageTime: c[c.length - 1].createdAt,
        unreadMessageCount: c.filter((c) => c.isRead === false).length,
      };
    });
    setChatListData(
      chatList
        .filter((c) => c.senderEmail !== session?.data?.user?.email)
        .sort((x, y) => {
          return new Date(x.lastMessageTime) < new Date(y.lastMessageTime)
            ? 1
            : -1;
        })
    );
  };

  useEffect(() => {
    setCurrentUserEmail(sessionStorage.getItem("currentUserEmail"));
  }, []);

  const [currentChatEmail, setCurrentChatEmail] = useState(null);

  return (
    show && (
      <div className={styles.chatter}>
        <div className={styles.header}>
          {!isAuthenticated && !currentUserEmail && "Login"}
          {!isAuthenticated && currentUserEmail && (
            <>
              <ArrowLeftCircle
                onClick={() => {
                  sessionStorage.removeItem("currentUserEmail");
                  setCurrentUserEmail(null);
                }}
              />
              Chat
            </>
          )}

          {isAuthenticated && !currentChatEmail && (
            <>
              <p
                onClick={async () => {
                  await signOut();
                }}
                style={{ cursor: "pointer" }}
              >
                Logout
              </p>
              All Chats
            </>
          )}

          {isAuthenticated && currentChatEmail && (
            <>
              <ArrowLeftCircle
                onClick={() => {
                  setCurrentChatEmail(null);
                }}
              />
              {currentChatEmail}
            </>
          )}

          <X
          className={styles.close}
            onClick={() => {
              setShow(false);
            }}
          />
        </div>
        {!isAuthenticated && !currentUserEmail && (
          <LoginBox setCurrentUserEmail={setCurrentUserEmail} />
        )}

        {!isAuthenticated && currentUserEmail && (
          <ChatBox
            currentChatEmail={currentUserEmail}
            isUser={true}
            setHasNotifiaction={setHasNotifiaction}
          />
        )}

        {isAuthenticated && !currentChatEmail && (
          <ChatList
            setCurrentChatEmail={setCurrentChatEmail}
            setChats={setChats}
            adminEmail={session?.data?.user?.email}
            fetchChats={fetchChats}
            chatListData={chatListData}
            setChatListData={setChatListData}
            setHasNotifiaction={setHasNotifiaction}
          />
        )}

        {isAuthenticated && currentChatEmail && (
          <ChatBox
            currentChatEmail={currentChatEmail}
            chats={chats}
            fetchChats={fetchChats}
            setChatListData={setChatListData}
            setHasNotifiaction={setHasNotifiaction}
            chatListData={chatListData}
          />
        )}
      </div>
    )
    // <Offcanvas show={show} onHide={handleClose} placement="end">
    //   <Offcanvas.Header closeButton className={styles.header}>
    // {!isAuthenticated && !currentUserEmail && "Login"}
    // {!isAuthenticated && currentUserEmail && (
    //   <>
    //     <ArrowLeftCircle
    //       onClick={() => {
    //         sessionStorage.removeItem("currentUserEmail");
    //         setCurrentUserEmail(null);
    //       }}
    //     />
    //     Chat
    //   </>
    // )}

    // {isAuthenticated && !currentChatEmail && (
    //   <>
    //     <p
    //       onClick={async () => {
    //         await signOut();
    //       }}
    //       style={{ cursor: "pointer" }}
    //     >
    //       Logout
    //     </p>
    //     All Chats
    //   </>
    // )}

    // {isAuthenticated && currentChatEmail && (
    //   <>
    //     <ArrowLeftCircle
    //       onClick={() => {
    //         setCurrentChatEmail(null);
    //       }}
    //     />
    //     {currentChatEmail}
    //   </>
    // )}
    //   </Offcanvas.Header>
    //   <Offcanvas.Body style={{ padding: 0 }}>
    //     {!isAuthenticated && !currentUserEmail && (
    //       <LoginBox setCurrentUserEmail={setCurrentUserEmail} />
    //     )}

    //     {!isAuthenticated && currentUserEmail && (
    //       <ChatBox currentChatEmail={currentUserEmail} isUser={true} setHasNotifiaction={setHasNotifiaction}/>
    //     )}

    //     {isAuthenticated && !currentChatEmail && (
    //       <ChatList
    //         setCurrentChatEmail={setCurrentChatEmail}
    //         setChats={setChats}
    //         adminEmail={session?.data?.user?.email}
    //         fetchChats={fetchChats}
    //         chatListData={chatListData}
    //         setChatListData={setChatListData}
    //         setHasNotifiaction={setHasNotifiaction}
    //       />
    //     )}

    //     {isAuthenticated && currentChatEmail && (
    //       <ChatBox
    //         currentChatEmail={currentChatEmail}
    //         chats={chats}
    //         fetchChats={fetchChats}
    //         setChatListData={setChatListData}
    //         setHasNotifiaction={setHasNotifiaction}
    //         chatListData={chatListData}
    //       />
    //     )}
    //   </Offcanvas.Body>
    // </Offcanvas>
  );
};

export default ChatterDrawer;
