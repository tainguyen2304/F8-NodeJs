import express from "express";
import SiteController from "../app/controllers/SiteController.js";

const siteRouter = express.Router();

siteRouter.get("/search", SiteController.search);
siteRouter.get("/", SiteController.index);

export default siteRouter;
