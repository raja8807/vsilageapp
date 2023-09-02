// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectMongoDB } from "@/libs/mongoConnect";
import Chat from "@/models/ChatModel";

export default async function handler(req, res) {
  if (req.method === "GET") {
    // console.log(req.query.email);
    // try {
    try {
      await connectMongoDB();
      const data = await Chat.find({
        $or: [
          {
            senderEmail: req.query.email,
          },
          {
            recieverEmail: req.query.email,
          },
        ],
      });
      if (
        data &&
        data.some(
          (c) => c.recieverEmail === req.query.email && c.isRead === false
        )
      ) {
        await Chat.updateMany(
          {
            recieverEmail: req.query.email,
          },
          {
            $set: { isRead: true },
          }
        );
      }
      res.status(200).send(data);
    } catch (err) {
      console.log(err);
      res.status(500).send({ err: err });
    }
  }
}
