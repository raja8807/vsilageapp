import "@/styles/globals.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Layout from "@/components/ui/custom_container/layout/laout";
import Chatter from "@/components/chatter/chatter";
import { SessionProvider } from "next-auth/react";

import { Raleway } from "next/font/google";

const roboto = Raleway({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

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
      {/* <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style> */}
      <SessionProvider session={session}>
        
            Sorry, Your Trial Hosting Has Been Expired. <br/>

<p>Visit <a href='https://vercel.com/pricing'>https://vercel.com/pricing</a> for more details</p>

      </SessionProvider>
    </>
  );
}
