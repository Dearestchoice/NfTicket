import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

import imageNfts_1 from "../../../assets/image_1.png";
import imageNfts_2 from "../../../assets/image_2.png";
import imageNfts_3 from "../../../assets/image_3.png";
import imageNfts_4 from "../../../assets/image_4.png";
import imageNfts_5 from "../../../assets/image_5.png";

const imageNfts = [
  imageNfts_1,
  imageNfts_2,
  imageNfts_3,
  imageNfts_4,
  imageNfts_5,
];

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
        {imageNfts.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt="" className="swiper-img" />
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
        {imageNfts.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt="" className="rounded-2xl" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
