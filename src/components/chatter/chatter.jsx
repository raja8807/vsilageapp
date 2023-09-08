import { ChatDots, ChatLeftDots, X } from "react-bootstrap-icons";
import styles from "./chatter.module.scss";
import { useEffect, useState } from "react";
import ChatterDrawer from "./chatter_drawer/chatter-drawer";
import { useSession } from "next-auth/react";
const Chatter = () => {
  const [showChatBox, setShowChatBox] = useState(false);

  const [hasNotifiaction, setHasNotifiaction] = useState(false);

  const [showPopup, setShowPopup] = useState(false);

  const session = useSession();

  useEffect(() => {
    setTimeout(() => {
      setShowPopup(true);
    }, 5000);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const currentEmail =
        (session?.data?.user && "admin") ||
        sessionStorage.getItem("currentUserEmail");

      if (currentEmail) {
        if (!hasNotifiaction) {
          const res = fetch(
            "api/chat/getChatNotification?email=" + currentEmail
          )
            .then((res) => {
              return res.json();
            })
            .then((count) => {
              setHasNotifiaction(count);

              if (count) {
                if (!("Notification" in window)) {
                  console.log("Browser does not support desktop notification");
                } else {
                  Notification.requestPermission();
                  new Notification("You May Have New Message");
                }
              }
            });
        }
      }
      // }
    };
    let interval = setInterval(() => {
      if (!hasNotifiaction) {
        fetchData();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [hasNotifiaction, session?.data?.user]);

  return (
    <>
      <ChatterDrawer
        show={showChatBox}
        setShow={setShowChatBox}
        setHasNotifiaction={setHasNotifiaction}
      />
      <div
        className={styles.openChatButton}
        onClick={() => {
          setShowPopup(false);
          setShowChatBox(true);
        }}
      >
        <div className={styles.wrap}>
          {showPopup && (
            <div className={styles.pop}>
              Chat Whit Us
              <X />
            </div>
          )}
          {hasNotifiaction && <div className={styles.bubble}></div>}
          <ChatDots />
        </div>
      </div>
    </>
  );
};

export default Chatter;
