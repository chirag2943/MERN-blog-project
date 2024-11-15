import express from "express";
import { addProject, getProjects } from "../controller/project.controller.js";

const router = express.Router();

router.post("/addproject", addProject); //add verifytoken
router.get("/getprojects", getProjects);

export default router;
