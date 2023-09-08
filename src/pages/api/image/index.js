// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectMongoDB } from "@/libs/mongoConnect";
import Image from "@/models/ImageModel";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await connectMongoDB();
     const images = await Image.find();
      res.status(200).send(images);
    } catch (err) {
      res.status(500).send({ err: err });
    }
  }

  if (req.method === "POST") {
    try {
      await connectMongoDB();
      const newResume = await Image.create(req.body);
      res.status(201).send(newResume);
    } catch (err) {
      console.log(err);
      res.status(500).send({ err: err });
    }
  }
  if (req.method === "DELETE") {
    try {
      await connectMongoDB();
      const newResume = await Image.findOneAndDelete({ src: req.query.src });
      res.status(202).send(newResume);
    } catch (err) {
      console.log(err);
      res.status(500).send({ err: err });
    }
  }
}
