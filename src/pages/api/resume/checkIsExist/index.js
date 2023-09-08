// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectMongoDB } from "@/libs/mongoConnect";
import Resume from "@/models/Resume";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await connectMongoDB();
      const x = await Resume.findOne({
        $or: [
          {
            email: req.body.email,
          },
          {
            phone: req.body.phone,
          },
        ],
      });
      res.status(201).send(!!x);
    } catch (err) {
      console.log(err);
      res.status(500).send({ err: err });
    }
  }
}
