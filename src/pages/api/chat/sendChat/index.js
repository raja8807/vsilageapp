// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectMongoDB } from "@/libs/mongoConnect";
import Chat from "@/models/ChatModel";


export default async function handler(req, res) {
  try {
    await connectMongoDB();
    const sentMessage = await Chat.create(req.body);
    res.status(200).send(sentMessage);
  } catch (err) {
    console.log(err);
    res.status(500).send({ err: err });
  }

}
