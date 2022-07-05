import { Swiper } from "swiper/react";
// import { Navigation, Pagination } from "swiper";

import "swiper/css/bundle";

const MealCardCarousel = (props) => {
  return (
    <Swiper
      // modules={[Navigation, Pagination]}
      // navigation
      breakpoints={{
        480: { slidesPerView: 1, spaceBetween: 0 },
        600: { slidesPerView: 2, spaceBetween: 0 },
        900: { slidesPerView: 3, spaceBetween: 0 },
        1024: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
      }}
      loop={true}
      // slidesPerView={1}
      // centeredSlides={true}
      //   rewind={true}
      pagination
    >
      {props.children}
    </Swiper>
  );
};

export default MealCardCarousel;
