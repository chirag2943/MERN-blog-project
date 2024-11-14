import express from "express";
import { addProject, getProject } from "../controller/project.controller.js";

const router = express.Router();

router.post("/addproject", addProject); //add verifytoken
router.get("/getprojects", getProject);

export default router;
