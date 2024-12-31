import { Hero } from "../assets";

const Home = () => {
  return (
    <div className="w-full py-7" id="home">
      <div className="layout flex items-center justify-between flex-col md:flex-row gap-8 md:gap-0">
        <div className="w-full ">
          <img src={Hero} alt="" className="w-[80%] md:w-[70%] mx-auto" />
        </div>
        <div className="w-full mx-auto ">
          <h2 className="text-2xl md:text-4xl leading-[3rem] md:leading-[4rem]">
            Hi, My name is Olajumoke Oyeniyi. <br /> I am a UI/UX Designer.
          </h2>
          <div className="flex items-center justify-center md:justify-start w-full mt-10 gap-x-7">
            <button className="bg-black hover:bg-primary  hover:shadow-custom hover:text-secondary rounded-2xl text-white py-2 w-[80%] md:w-[50%] lg:w-[25%] text-base  md:text-lg capitalize">
              view resume
            </button>
            <button className="bg-black rounded-2xl hover:bg-transparent  hover:shadow-custom hover:text-secondary text-white py-2 w-[90%] md:w-[60%] lg:w-[30%] text-base  md:text-lg capitalize">
              reach out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
