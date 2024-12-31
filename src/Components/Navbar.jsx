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
          <a href="#testimonial">Testimonial</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="hidden md:block">
          <a href="#contact">
            <button className="border rounded-lg hover:bg-secondary hover:text-white px-4 py-[6px] text-xl">
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
          <div className="absolute right-0 top-[58px] w-[75%] h-80 bg-secondary">
            <ul className="text-white pl-6 pt-4">
              <li className="mb-6">
                <a
                  href="#home"
                  className="text-lg"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Home
                </a>
              </li>
              <li className="mb-6">
                <a href="#about" onClick={() => setIsOpen(!isOpen)}>
                  About Me
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="#services"
                  className="text-lg"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Services
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="#project"
                  className="text-lg"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Projects
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="#testimonial"
                  className="text-lg"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Testimonial
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-lg"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
