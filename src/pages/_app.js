import "@/styles/globals.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Layout from "@/components/ui/custom_container/layout/laout";
import Chatter from "@/components/chatter/chatter";
import { SessionProvider } from "next-auth/react";

export default function App({ session, Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      // easing: "ease-out-cubic",
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
          <Chatter />
        </Layout>
      </SessionProvider>
    </>
  );
}
