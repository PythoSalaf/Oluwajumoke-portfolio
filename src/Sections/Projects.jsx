import { ProjectCard } from "../Components";
import { ProjectDatas } from "../Components/DummyData";

const Projects = () => {
  return (
    <div className="w-full mt-20">
      <div className="layout">
        <h2 className="text-center font-semibold text-3xl md:text-3xl lg:text-4xl">
          Projects
        </h2>
        <div className="my-7 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {ProjectDatas.map((item) => (
            <ProjectCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
