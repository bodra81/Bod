import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const promos = [
  { title: "أفضل السكربتات", desc: "أسعار تنافسية وعروض مميزة", bgColor: "from-blue-500 to-indigo-600" },
  { title: "مابات احترافية", desc: "جودة عالية وتصميمات مميزة", bgColor: "from-green-500 to-teal-600" },
];

const PromoSlider = () => (
  <Swiper spaceBetween={50} slidesPerView={1} autoplay={{ delay: 3000 }} loop>
    {promos.map((promo, index) => (
      <SwiperSlide key={index}>
        <div className={`p-8 text-white bg-gradient-to-r ${promo.bgColor} rounded-lg`}>
          <h2 className="text-2xl font-bold">{promo.title}</h2>
          <p>{promo.desc}</p>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default PromoSlider;