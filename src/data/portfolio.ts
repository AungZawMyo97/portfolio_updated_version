import projectData from "../../public/data/projects.json";
import experienceData from "../../public/data/experiences.json";
import educationData from "../../public/data/education.json";
import toolData from "../../public/data/tools.json";
import type {
  EducationContent,
  Experience,
  Project,
  Tool,
} from "../types/portfolio";

// One content source for the generated HTML and the interactive React page.
export const projects: Project[] = projectData;
export const experiences: Experience[] = experienceData;
export const education: EducationContent = educationData;
export const tools: Tool[] = toolData;
