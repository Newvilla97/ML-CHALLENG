import express from "express";
import { getItem, getItems } from "../controllers/BlogController.js";
const router = express.Router();
router.get("/:searchProduct", getItems);
router.get("/id/:id", getItem);

export default router;
