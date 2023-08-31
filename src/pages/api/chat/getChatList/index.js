// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectMongoDB } from "@/libs/mongoConnect";
import Chat from "@/models/ChatModel";
import { getSession } from "next-auth/react";


export default async function handler(req, res) {

    const session = await getSession({req})

  try {
    await connectMongoDB();
    const chats =await Chat.find()
    
    // const sentMessage = await Chat.create(req.body);
    res.status(200).send(chats);
  } catch (err) {
    console.log(err);
    res.status(500).send({ err: err });
  }

}
