import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { useParams } from "react-router-dom";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // fetch data from API
    const fetchProjects = async () => {
      const res = await fetch("/api/project/getprojects");
      const data = await res.json();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen max-w-6xl mx-auto flex justify-center items-center flex-col gap-6 p-3">
      <div className="">
        <h1 className="text-3xl font-semibold cursor-default ">Projects</h1>
        <p>This are the projects which I have completed so far..</p>
      </div>

      {/* add project links and discription */}
      <div className="flex gap-2 items-center justify-center flex-wrap m-6 ">
        {projects && projects.length > 0 && (
          <div className="">
            {projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
