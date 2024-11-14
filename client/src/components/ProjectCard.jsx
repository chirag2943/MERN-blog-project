import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="group relative w-[360px] border border-teal-700 hover:border-2 h-[310px] overflow-hidden rounded-lg  transition-all">
      <Link>
        <img
          to={project.image}
          alt="project-cover"
          className="h-[200px] w-full object-cover group-hover:h-[185px] transition-all duration-300 z-20"
        />
      </Link>
      <div className="p-3 flex flex-col gap-2  ">
        <p className="text-lg font-semibold line-clamp-2 ">{project.title}</p>
        <span className=" italic text-sm "> {project.desc}</span>
        <Link
          to={`/project/${project.slug}`}
          className="z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border
           border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2"
        >
          Read about project
        </Link>
      </div>
    </div>
  );
}
