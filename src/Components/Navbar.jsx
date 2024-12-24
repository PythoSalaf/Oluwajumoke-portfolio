import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { Logo } from "../assets";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full relative bg-primary h-[60px] flex items-center">
      <div className="layout flex items-center justify-between">
        <div className="">
          <a href="#home">
            <img src={Logo} alt="logo" className="size-12  md:size-16" />
          </a>
        </div>
        <div className="hidden gap-x-6 md:flex items-center text-xl">
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#services">Services</a>
          <a href="#project">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="hidden md:block">
          <a href="#contact">
            <button className="border rounded-lg px-4 py-[6px] text-xl">
              Send a message
            </button>
          </a>
        </div>
        <div
          className="blcok md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <MdClose className="size-7" />
          ) : (
            <MdMenu className="size-7" />
          )}
        </div>
        {isOpen && (
          <div className="absolute right-0 top-[58px] w-[75%] h-80 bg-secondary"></div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
