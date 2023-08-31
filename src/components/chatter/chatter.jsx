import { ChatDots } from "react-bootstrap-icons";
import styles from "./chatter.module.scss";
import { useEffect, useState } from "react";
import ChatterDrawer from "./chatter_drawer/chatter-drawer";
const Chatter = () => {
  const [showChatBox, setShowChatBox] = useState(false);

  // const chatTable = [
  //   {
  //     id: "123",
  //     message: "message fj9ae",
  //     senderEmail: "1234@gmail.com",
  //     recieverEmail: null,
  //     senderId: null,
  //     isRead: false,
  //   },
  //   {
  //     id: "123x",
  //     message: "admin message",
  //     senderEmail: "admin@gmail.com",
  //     recieverEmail: '1234@gmail.com',
  //     senderId: "1234h3oiqh34u",
  //     isRead: false,
  //   },
  // ];

  useEffect(() => {
    const fetchData = () => {
      fetch("api/chats").then((res) => {
        console.log(res);
      });
    };
    let interval = setInterval(() => {
      // fetchData();
    }, 5000);

    return ()=> clearInterval(interval)
  }, []);

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
