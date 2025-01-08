const TestimonialCard = ({ name, review, role }) => {
  return (
    <div className="w-[90%] mx-auto md:w-[80%] lg:w-[350px] rounded-bl-[50px] rounded-tr-[50px] h-44 md:h-52 bg-transparent border-2 border-secondary ">
      <div className="w-[90%] mx-auto py-4">
        <h3 className=" text-sm lg:text-base">{review}</h3>
        <div className="w-full flex flex-col items-end justify-end  mt-4">
          <div className="">
            <h4 className="text-lg md:text-2xl font-semibold ">{name}</h4>
            <p className="text-sm md:text-base">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
