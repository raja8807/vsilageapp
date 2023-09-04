import { Schema, model, models } from "mongoose";

const imageSchema = new Schema(
  {
    src: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Image = models.Image || model("Image", imageSchema);

export default Image;
