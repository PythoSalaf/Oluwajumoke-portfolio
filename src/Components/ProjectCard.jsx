const ProjectCard = ({ title, description, image, role, link }) => {
  return (
    <div className="bg-[#E9E4DD] w-[90%]  rounded-xl border border-secondary mx-auto md:w-full py-3">
      <div className="w-[90%] mx-auto">
        <div className="flex items-center gap-x-2">
          <h2 className="text-lg md:text-xl font-bold">Project:</h2>
          <h4 className="text-lg md:text-xl font-semibold">{title}</h4>
        </div>
        <div className="flex items-center gap-x-2 mt-1">
          <h2 className="text-lg md:text-xl font-bold">Role:</h2>
          <h4 className="text-lg md:text-xl font-semibold">{role}</h4>
        </div>
        <p className="my-5 text-sm md:text-base ">{description}</p>
        <div className="w-full mb-4">
          <img src={image} alt="" className="w-[98%] mx-auto " />
        </div>
        <div className="w-full py-2 flex items-center justify-center">
          <button className="w-[55%] md:w-[45%] bg-secondary hover:bg-transparent hover:shadow-custom hover:text-secondary py-1 rounded-lg text-white lg:w-[40%] flex items-center justify-center font-semibold">
            <a href={`${link}`} target="_blank" rel="noopener noreferrer">
              View
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
