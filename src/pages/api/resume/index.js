// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectMongoDB } from "@/libs/mongoConnect";
import Chat from "@/models/ChatModel";
import Resume from "@/models/Resume";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  // const session = await getSession({req})

//   console.log(req.body);

if(req.method === 'GET'){
  try{

    const resumes = await Resume.find()
    res.status(200).send(resumes)

  }catch(err){
    res.status(500).send({err:err})
  }
}

  if (req.method === "POST") {
    try {
      await connectMongoDB();
      const newResume = await Resume.create(JSON.parse(req.body));

      // const sentMessage = await Chat.create(req.body);
      res.status(201).send(newResume);
    } catch (err) {
      console.log(err);
      res.status(500).send({ err: err });
    }
  }
}
