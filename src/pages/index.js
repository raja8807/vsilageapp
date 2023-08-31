import Chatter from "@/components/chatter/chatter";
import HomeScreen from "@/components/pages/home/home";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const Home = () => {

  const session = useSession()

  // console.log(session);

  return <HomeScreen />;
};

export default Home;
