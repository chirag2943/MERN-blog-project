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
    <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7 ">
      <div className=" text-center ">
        <h1 className="text-3xl font-semibold cursor-default m-2">Projects</h1>
        <p>This are the projects which I have completed so far..</p>
      </div>

      {/* add project links and discription */}
      <div className="flex flex-col justify-center w-auto">
        {projects && projects.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-5 ">
            {projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
