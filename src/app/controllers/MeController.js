import { mutipleMongooseToObject } from "../../util/mongoose.js";
import Course from "../models/Course.js";

class MeController {
  // [POST] courses/store
  storedCourses(req, res, next) {
    Course.find({})
      .then((courses) =>
        res.render("me/stored-courses", {
          courses: mutipleMongooseToObject(courses),
        })
      )
      .catch(next);
  }

  // [GET] courses/trash
  trashCourses(req, res, next) {
    Course.findDeleted({})
      .then((courses) => {
        console.log(courses);
        return res.render("me/trash-courses", {
          courses: mutipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }
}

export default new MeController();
