import courseRouter from "./courses.js";
import meRouter from "./me.js";
import newsRouter from "./news.js";
import siteRouter from "./site.js";

export default function route(app) {
  app.use("/news", newsRouter);
  app.use("/me", meRouter);
  app.use("/courses", courseRouter);
  app.use("/", siteRouter);
}
