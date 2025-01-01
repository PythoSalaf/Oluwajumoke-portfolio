import { TestimonialSlider } from "../Components";

const Testimonial = () => {
  return (
    <div className="w-full mt-20" id="testimonial">
      <div className="layout">
        <h2 className="text-center font-semibold text-3xl md:text-3xl lg:text-4xl">
          Testimonial
        </h2>
        <div className="w-full">
          <TestimonialSlider />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
