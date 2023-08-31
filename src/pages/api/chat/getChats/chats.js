// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectMongoDB } from "@/libs/mongoConnect";
import Chat from "@/models/ChatModel";

export default async function handler(req, res) {
  if (req.method === "POST") {
    
    // try {
    //   await connectMongoDB();
    //   Chat.find().then((data) => {
    //     res.status(200).send(data);
    //   });
    // } catch (err) {
    //   console.log(err);
    //   res.status(500).send({ err: err });
    // }
  }
}
