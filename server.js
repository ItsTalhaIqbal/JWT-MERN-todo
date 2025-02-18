import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import path from "path";
import 'dotenv/config'
import { connectDB } from "./DB/db.js";
import { student } from "./routes/Student.route.js";
import { Auth } from "./routes/Auth.route.js";

const swaggerDocument = JSON.parse(
  fs.readFileSync(path.resolve("./swagger-output.json"), "utf-8")
);

const app = express();


app.use(cors());
app.use(express.json());
app.use("/api", student);
app.use("/api", Auth);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.send("Healthy !!!");
});

try {
  connectDB();
  app.listen(3000, () => {
    console.log("App listening on port 3000!");
  });
} catch (error) {
  console.log("Error starting the server:", error);
}
