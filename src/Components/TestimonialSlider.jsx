import Slider from "react-slick";
import TestimonialCard from "./TestimonialCard";
import { ReviewData } from "./DummyData";

const TestSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 0,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          arrows: false,
          dots: true,
          draggable: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full relative mx-auto  mt-4">
      <Slider {...settings}>
        {ReviewData.map((review) => (
          <div key={review.id}>
            <TestimonialCard {...review} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestSlider;
