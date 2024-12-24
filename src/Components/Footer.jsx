import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const icons = [
    {
      id: 1,
      name: <FaInstagram className="size-5 md:size-7" />,
    },
    {
      id: 2,
      name: <FaXTwitter className="size-5 md:size-7" />,
    },
    {
      id: 3,
      name: <CiFacebook className="size-6 md:size-7" />,
    },
  ];
  return (
    <div className="bg-transaprent w-full py-3">
      <div className="layout">
        <hr className="w-full my-4 border border-[#dadada]" />
        <div className="w-full flex items-center flex-col md:flex-row gap-y-4 md:gap-y-0 justify-between">
          <p className="">&copy; 2024, All Right Reserved </p>
          <div className="flex items-center gap-x-8 md:gap-x-6 justify-between">
            {icons.map((item) => (
              <div className="" key={item.id}>
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
