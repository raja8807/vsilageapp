// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectMongoDB } from "@/libs/mongoConnect";
import Chat from "@/models/ChatModel";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const isAdmin = req.query.email === "admin";
    try {
      if (!isAdmin) {
        const userChats =
          (await Chat.find({
            $and: [
              {
                recieverEmail: req.query.email,
              },
              {
                isRead: false,
              },
            ],
          })) || [];

        res.status(200).send(userChats.length > 0);
      } else {
        const userChats =
          (await Chat.find({
            $and: [
              {
                recieverEmail: null,
              },
              {
                isRead: false,
              },
            ],
          })) || [];

        res.status(200).send(userChats.length > 0);
      }
    } catch (err) {
      console.log(err);
      res.status(500).send({ err: err });
    }
  }
}
