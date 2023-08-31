import { useEffect, useState } from "react";
import ChatBox from "../chat_box/chat_box";
import ChatList from "../chat_list/chat_list";
import styles from "./chatter-drawer.module.scss";
import { ArrowLeft, ArrowLeftCircle } from "react-bootstrap-icons";
import LoginBox from "../login_box/login_box";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

const { Offcanvas } = require("react-bootstrap");

const ChatterDrawer = (props) => {
  const { show, setShow } = props;
  const handleClose = () => setShow(false);

  const session = useSession();

  const isAuthenticated = !!session?.data
  const [currentUserEmail, setCurrentUserEmail] = useState(null);

  const [chats,setChats] = useState([])


  useEffect(() => {
    setCurrentUserEmail(sessionStorage.getItem("currentUserEmail"));
  }, []);

  const [currentChatEmail, setCurrentChatEmail] = useState(null);

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton className={styles.header}>
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
            <ArrowLeftCircle
              onClick={async () => {
                await signOut();
              }}
            />
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
      </Offcanvas.Header>
      <Offcanvas.Body style={{ padding: 0 }}>
        {!isAuthenticated && !currentUserEmail && (
          <LoginBox
            setCurrentUserEmail={setCurrentUserEmail}
          />
        )}

        {!isAuthenticated && currentUserEmail && (
          <ChatBox currentChatEmail={currentUserEmail} isUser={true}/>
        )}

        {isAuthenticated && !currentChatEmail && (
          <ChatList setCurrentChatEmail={setCurrentChatEmail} setChats={setChats} 
          adminEmail={session?.data?.user?.email}
          />
        )}

        {isAuthenticated && currentChatEmail && (
          <ChatBox currentChatEmail={currentChatEmail} chats={chats}/>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ChatterDrawer;
