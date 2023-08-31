import { connectMongoDB } from "@/libs/mongoConnect";
import User from "@/models/UserModel";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  //   session: {
  //     strategy: "jwt",
  //   },
  providers: [
    CredentialsProvider({
      name: "credentials",
      type: "credentials",
      credentials: {
        // userName : {label : 'User Name', placeholder:'User Name'},
        // password : {label : 'Password', placeholder:'Password'}
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;
        const connection = await connectMongoDB();

        console.log(req);

        if (connection) {
          const user = await User.findOne({ email });
          if (user.email === email && user.password === password) {
            return {
              email: user.email,
              id: user._id,
            };
          }
        }

        return null;

        // if (
        //   email === "sathish8226+sage@gmail.com" &&
        //   password === "Enter@321"
        // ) {
        //   return {
        //     email,
        //     id: "3q4905w7407",
        //   };
        // } else {
        //   // If you return null then an error will be displayed advising the user to check their details.
        //   return null;
        // }

        //   try {
        //     if (connection) {
        //       const user = await User.findOne({ user_name: userName });
        //       if (user) {
        //         if (user.password === password) {
        //           return user;
        //         } else {
        //           throw new Error(JSON.stringify({ password: "Wrong Password" }));
        //         }
        //       } else {
        //         throw new Error(JSON.stringify({ userName: "User Not Found" }));
        //       }
        //     } else {
        //       throw new Error(
        //         JSON.stringify({ userName: "Something went wrong" })
        //       );
        //     }
        //   } catch (err) {
        //     //   console.log(Object.keys(err));
        //     throw new Error(err.message);
        //   }
      },
    }),
  ],
//   secret: process.env.NEXTAUTH_SECRET,
  secret: 'aepijfaie39rui3rqi',
  pages: {
    signIn: "/auth/signin/",
    signOut: "/",
    // error:'/auth/signin'
  },
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.uid;
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
  //   callbacks: {
  //     async redirect({ url, baseUrl }) {
  //       // Allows relative callback URLs
  //       if (url.startsWith("/")) return `${baseUrl}${url}`;
  //       // Allows callback URLs on the same origin
  //       else if (new URL(url).origin === baseUrl) return url;
  //       return baseUrl;
  //     },
  //   },

  //     async session({ session, token, user }) {
  //       // Send properties to the client, like an access_token and user id from a provider.
  //       session.accessToken = token.accessToken;
  //       session.user.id = token.id;

  //       return session;
  //     },

  //     async jwt({ token, account, profile }) {
  //       // Persist the OAuth access_token and or the user id to the token right after signin
  //       if (account) {
  //         token.accessToken = account.access_token;
  //         token.id = profile.id;
  //       }
  //       return token;
  //     },
  //   },
});
