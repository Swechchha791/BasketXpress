import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import img1 from "../../assets/Slider/img1.webp";
import img2 from "../../assets/Slider/img2.webp";
import img3 from "../../assets/Slider/img3.webp";
import img4 from "../../assets/Slider/img4.webp";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [img1, img2, img3, img4];

const ImageSlider = () => {
  return (
    <div className="w-full max-w-full mx-auto mt-6 rounded-lg overflow-hidden shadow-xl">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full h-[300px] sm:h-[400px]"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
