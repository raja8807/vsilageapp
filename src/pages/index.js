import Chatter from "@/components/chatter/chatter";
import HomeScreen from "@/components/pages/home/home";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const Home = () => {

  const session = useSession()

  // useEffect(()=>{
  //   if (!("Notification" in window)) {
  //     console.log("Browser does not support desktop notification");
  //   } else {
  //     Notification.requestPermission();
  //   }

  //   const showNotification = ()=> {
  //     var options = {
  //       body: 'Notification Body',
  //       icon: 'https://www.vkf-renzel.com/out/pictures/generated/product/1/356_356_75/r12044336-01/general-warning-sign-10836-1.jpg?    auto=compress&cs=tinysrgb&dpr=1&w=500',
  //       dir: 'ltr',
  //     };
  
  //     const notification = new Notification('Hello World', options);
  //   }
  
  //   showNotification()


  // })


  
  

  // console.log(session);

  return <HomeScreen />;
};

export default Home;
