import express from "express";
import cors from "cors";
import ProductRoutes from "./routes/routes.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", ProductRoutes);
app.listen(3001, () => {
  console.log("servidor funcionando");
});
