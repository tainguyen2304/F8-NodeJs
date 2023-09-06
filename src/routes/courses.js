import express from "express";
import CourseController from "../app/controllers/CourseController.js";

const courseRouter = express.Router();

courseRouter.get("/create", CourseController.create);
courseRouter.post("/store", CourseController.store);
courseRouter.get("/:id/edit", CourseController.edit);
courseRouter.put("/:id", CourseController.update);
courseRouter.patch("/:id/restore", CourseController.restore);
courseRouter.delete("/:id", CourseController.destroy);
courseRouter.delete("/:id/force", CourseController.forceDestroy);
courseRouter.get("/:slug", CourseController.show);

export default courseRouter;
