import express from "express";
import { authorisedOnly } from "../middleware/auth";
const router = express.Router();

router.get("/", authorisedOnly, (req, res) => {
  res.send({ message: "success" });
});

export default router;
