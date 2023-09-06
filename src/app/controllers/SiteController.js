import { mutipleMongooseToObject } from "../../util/mongoose.js";
import CourseModel from "../models/Course.js";

class SiteController {
  index(req, res) {
    CourseModel.find({})
      .then((courses) => {
        res.render("home", { courses: mutipleMongooseToObject(courses) });
      })
      .catch((err) => {
        res.status(400).json({ error: "ERROR!!!" });
      });
  }

  search(req, res) {
    res.render("search");
  }
}

export default new SiteController();
