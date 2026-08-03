import { PROJECTS } from "@/lib/projects";
import PortfolioClient from "./portfolioClient";

export default function ProjectsPage() {
  return <PortfolioClient projects={PROJECTS} />;
}