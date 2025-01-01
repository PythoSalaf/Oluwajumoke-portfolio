const TestimonialCard = ({ image, name, review, role }) => {
  return (
    <div className="relative  border border-black shadow-lg w-[95%] mx-auto sm:w-[300px] md:w-[98%] lg:w-[96%] h-[210px] md:h-[230px] lg:h-[250px] ">
      <div className="absolute w-full  h-full -auto ">
        <img src={image} alt={`${name}`} className=" h-full" />
      </div>

      <div
        className="relative w-full h-full bg-white "
        style={{
          clipPath: "polygon(53% 0, 100% 0%, 100% 100%, 54% 100%, 40% 50%)",
        }}
      >
        <div className=" w-full pl-44 sm:pl-38 md:pl-52 pt-6 flex items-start  flex-col">
          <p className="text-secondary  text-[11px] md:text-xs mb-5 font-semibold">
            {review}
          </p>

          <h3 className="font-bold text-gray-900 text-base">{name}</h3>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
