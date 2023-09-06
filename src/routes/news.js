import express from "express";
import NewsController from "../app/controllers/NewController.js";

const newsRouter = express.Router();

newsRouter.get("/:slug", NewsController.show);
newsRouter.get("/", NewsController.index);

export default newsRouter;
