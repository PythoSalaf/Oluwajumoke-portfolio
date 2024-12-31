const Services = () => {
  const Data = [
    {
      id: 1,
      title: "Responsive Web Design",
      des: "Designing responsive websites that deliver a smooth experience across all devices.",
    },
    {
      id: 2,
      title: "User Interface (UI) Design",
      des: "Designing visually appealing and user-friendly interfaces that elevate the overall user experience.",
    },
    {
      id: 3,
      title: "Prototyping & Wireframing",
      des: "Creating interactive prototypes and wireframes to visualize, test, and refine design concepts.",
    },
    {
      id: 4,
      title: "User Experience (UX) Design",
      des: "Boosting user satisfaction by enhancing the project's usability, accessibility, and overall enjoyment in interactions.",
    },
  ];
  return (
    <div className="w-full" id="services">
      <div className="layout ">
        <h2 className="text-center font-semibold text-3xl md:text-3xl lg:text-4xl">
          Services
        </h2>
        <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-4">
          {Data.map((item) => (
            <div
              className="bg-secondary  w-[96%] mx-auto md:w-full py-4 text-white hover:scale-110 transition-transform duration-200 ease-in"
              key={item.id}
            >
              <div className="w-[92%] mx-auto">
                <h2 className="text-xl md:text-2xl">{item.title}</h2>
                <p className="pt-4 text-base">{item.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
