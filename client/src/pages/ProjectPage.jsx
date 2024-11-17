import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ProjectPage() {
  const { projectSlug } = useParams();
  const [project, setProject] = useState([]);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`/api/project/getprojects?slug=${projectSlug}`);
        const data = await res.json();
        if (res.ok) {
          //this is for showing individual projects
          setProject(data.filter((project) => project.slug === projectSlug)[0]);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProject();
  }, [projectSlug]);

  return (
    <main className="p-3 flex flex-col max-w-6xl mx-auto min-h-screen ">
      <h1 className="text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl">
        {project && project.title}
      </h1>
      <img
        src={project && project.image}
        alt={project && project.image}
        className="mt-10 p-3 max-h-[600px] w-full object-cover"
      />
      <div className="mr-10">
        <Link to="https://github.com/chirag2943/amazon-clone" target="_blank">
          <Button
            gradientDuoTone="purpleToBlue"
            className="float-right w-72"
            outline
          >
            <div className="flex items-center gap-2">
              <svg
                className="w-8 h-8 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                  clipRule="evenodd"
                />
              </svg>
              <span>open github repo</span>
            </div>
          </Button>
        </Link>
      </div>
      <div className="p-3 max-w-4xl mx-auto w-full post-content">
        {project && project.desc}
      </div>
    </main>
  );
}
