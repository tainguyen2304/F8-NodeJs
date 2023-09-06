import mongoose from "mongoose";
import MongooseDelete from "mongoose-delete";

const Schema = mongoose.Schema;
const Course = new Schema(
  {
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    videoId: { type: String, maxLength: 255 },
    level: { type: String, maxLength: 255 },
    slug: { type: String, unique: true },
  },
  {
    timestamps: true,
  }
);

// Add plugin
Course.plugin(MongooseDelete, { deletedAt: true, overrideMethods: "all" });

export default mongoose.model("Course", Course);
