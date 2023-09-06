import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import morgan from "morgan";
import { engine as handlebars } from "express-handlebars";
import route from "./routes/index.js";
import { connect } from "./config/db/index.js";
import methodOverride from "method-override";

connect();

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// HTTP logger
app.use(morgan("combined"));
app.use(
  express.urlencoded({
    extended: true, // allow to parse nested objects in the body of a request (e.g., for form data)
  })
);
app.use(express.json());
app.use(methodOverride("_method"));

app.use(express.static(path.join(__dirname, "public")));

// Template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// roues initial
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
