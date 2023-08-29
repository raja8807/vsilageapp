import { useEffect, useState } from "react";
import ChatBox from "../chat_box/chat_box";
import ChatList from "../chat_list/chat_list";
import styles from "./chatter-drawer.module.scss";
import { ArrowLeft, ArrowLeftCircle } from "react-bootstrap-icons";
import LoginBox from "../login_box/login_box";

const { Offcanvas } = require("react-bootstrap");

const ChatterDrawer = (props) => {
  const { show, setShow } = props;
  const handleClose = () => setShow(false);

  const [session, setSession] = useState(null);
  const [currentUserEmail, setCurrentUserEmail] = useState(null);

  useEffect(() => {
    setCurrentUserEmail(sessionStorage.getItem("currentUserEmail"));
  }, []);


  const [currentChatEmail, setCurrentChatEmail] = useState(null);

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton className={styles.header}>
        {!session && !currentUserEmail && "Login"}
        {!session && currentUserEmail && (
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

        {session && !currentChatEmail && (
          <>
            <ArrowLeftCircle
              onClick={() => {
                setSession(null);
              }}
            />
            All Chats
          </>
        )}

        {session && currentChatEmail && (
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
        {!session && !currentUserEmail && (
          <LoginBox
            setCurrentUserEmail={setCurrentUserEmail}
            setSession={setSession}
          />
        )}

        {!session && currentUserEmail && (
          <ChatBox currentChatEmail={currentChatEmail} />
        )}

        {session && !currentChatEmail && (
          <ChatList setCurrentChatEmail={setCurrentChatEmail} />
        )}

        {session && currentChatEmail && (
          <ChatBox currentChatEmail={currentChatEmail} />
        )}

        {/* {session && !currentChatEmail ? (
          <ChatList setCurrentChatEmail={setCurrentChatEmail} />
        ) : (
          <ChatBox currentChatEmail={currentChatEmail} />
        )} */}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ChatterDrawer;
