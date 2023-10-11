// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectMongoDB } from "@/libs/mongoConnect";
import Chat from "@/models/ChatModel";

export default async function handler(req, res) {
  try {
    await connectMongoDB();
    await Chat.updateMany(
      {
        $and: [
          {
            $or: [
              { senderEmail: req.query.email },
              { recieverEmail: req.query.email },
            ],
          },
          {
            isRead: false,
          },
        ],
      },
      {
        $set: { isRead: true },
      }
    );
    res.status(200).send(true);
  } catch (err) {
    console.log(err);
    res.status(500).send({ err: err });
  }
}
