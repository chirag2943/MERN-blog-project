import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProjectPage() {
  const { projectSlug } = useParams();
  const [project, setProject] = useState([]);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`/api/project/getprojects?slug=${projectSlug}`);
        const data = await res.json();
        if (res.ok) {
          setProject(data[0]);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProject();
  }, [projectSlug]);

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.desc}</p>
    </div>
  );
}
