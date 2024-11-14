import Project from "../models/project.model.js";
import { errorHandler } from "../utils/error.js";

export const addProject = async (req, res, next) => {
  try {
    const { title, desc, image, projectLink } = req.body;

    if (!title || !desc || !image || !projectLink) {
      return next(errorHandler(400, "All fields are required"));
    }

    // trying slug
    const slug = req.body.title
      .split(" ")
      .join("-")
      .toLowerCase()
      .replace(/[^a-zA-Z0-9-]/g, "");

    const newProject = new Project({
      title,
      desc,
      image,
      projectLink,
      slug,
    });
    await newProject.save();
    res.status(200).json(newProject);
  } catch (error) {
    next(error);
  }
};

export const getProject = async (req, res, next) => {
  try {
    const project = await Project.find();
    if (!project) {
      return next(errorHandler(404, "project not found"));
    }
    res.status(200).json(project);
  } catch (error) {
    next(error);
  }
};
