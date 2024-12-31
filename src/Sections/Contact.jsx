import { FiPhone } from "react-icons/fi";
import { ContactBg } from "../assets";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  const contactDetail = [
    {
      id: 1,
      title: "call me",
      icon: <FiPhone className=" size-[55%]" />,
      link: "tel:+2347041599541",
      displayText: "+2347041599541",
    },
    {
      id: 2,
      title: "email me",
      icon: <MdOutlineEmail className=" size-[55%]" />,
      link: "mailto:olajumokeoyeniyi1@gmail.com",
      displayText: "olajumokeoyeniyi1@gmail.com",
    },
    {
      id: 3,
      title: "LinkedIn",
      icon: <FaLinkedinIn className=" size-[55%]" />,
      link: "https://www.linkedin.com/in/olajumoke-oyeniyi-6a82742b6/",
      displayText: "Olajumoke Oyeniyi",
    },
  ];
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full mt-20" id="contact">
      <div className="layout">
        <h2 className="text-center font-semibold text-3xl md:text-3xl lg:text-4xl">
          Contact
        </h2>
        <p className="text-center text-xl md:text-2xl">
          Let’s bring your ideas to life! Reach out, and let’s design products{" "}
          <br />
          that make a difference. Your next big project starts here!
        </p>
      </div>
      <div className="w-full flex  mt-10 items-center flex-col md:flex-row gap-10 md:gap-0 justify-between">
        <div className="w-full ">
          <div className="w-[85%] md:w-[80%]  mx-auto">
            <form>
              <input
                type="text"
                placeholder="Name"
                className="w-full h-[40px] md:h-[45px] text-secondary text-base md:text-lg lg:text-xl  rounded-xl border border-[#dadada] bg-transparent px-4"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full h-[40px] my-6 md:h-[45px] text-secondary text-base md:text-lg lg:text-xl  rounded-xl border border-[#dadada] bg-transparent px-4"
              />
              <textarea
                placeholder="Messages"
                className="resize-none rounded-xl border border-[#dadada] px-4 pt-3 bg-transparent w-full h-28 md:h-36 "
              />
              <div className="mt-5 flex items-center w-full flex-col justify-center">
                <button
                  type="submit"
                  onClick={handleClick}
                  className="bg-secondary hover:bg-primary hover:shadow-custom hover:text-secondary  py-2 rounded-xl w-[40%] md:w-[35%] text-lg md:text-xl lg:w-[30%] text-white"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full flex items-end justify-end relative">
          <img
            src={ContactBg}
            alt=""
            className="w-[85%] md:w-[80%] lg:w-[70%] relative"
          />
          <div className="absolute inset-0 left-24 lg:left-72 top-28 sm:left-44 sm:top-52 lg:top-40 md:top-36">
            {contactDetail.map((item) => (
              <div
                className="flex items-center gap-x-3 mb-5 md:mb-8"
                key={item.id}
              >
                <div className="bg-white rounded-lg w-12 h-10 md:w-[60px] md:h-[50px] text-secondary flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="text-white w-full">
                  <span className="text-base capitalize">{item.title}</span>
                  <p className=" mt-[2px] font-semibold">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-white text-sm md:text-lg lg:text-xl"
                    >
                      {item.displayText}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
