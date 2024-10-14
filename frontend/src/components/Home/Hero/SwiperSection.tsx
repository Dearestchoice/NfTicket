import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

const images = [1, 2, 3, 4, 5];

export const DesktopSwiper = () => {
  return (
    <div>
      <Swiper
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 500,
          modifier: 1,
          slideShadows: false,
        }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        spaceBetween={-680}
        modules={[EffectCoverflow]}
        className="swiper-container"
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
      >
        {images.map((num) => (
          <SwiperSlide key={num}>
            <img
              src={`/images/image_${num}.webp`}
              alt=""
              className="swiper-img"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export const MobileSwiper = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {images.map((num) => (
          <SwiperSlide key={num}>
            <img
              src={`/images/image_${num}.webp`}
              alt=""
              className="rounded-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
