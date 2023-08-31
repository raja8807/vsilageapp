import { Schema, model, models } from "mongoose";

const chatSchema = new Schema({
  senderEmail: {
    type: String,
    required: true,
  },
  recieverEmail: {
    type: String,
    // required: true,
  },
  senderId: {
    type: String,
  },
  message: {
    type: String,
    required: true,
  },
  isRead:{
    type:Boolean,
  }
},
{
    timestamps : true
});

const Chat = models.Chat || model("Chat", chatSchema);

export default Chat;
