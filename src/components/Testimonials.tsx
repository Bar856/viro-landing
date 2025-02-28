"use client";
import React from "react";
import { testimonials } from "@/data/testimonials";
import { motion, Variants } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SectionTitle from "./SectionTitle";

export const childVariants = {
  offscreen: {
    opacity: 0,
    x: -20,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1,
    },
  },
};

const Testimonials = () => {
  return (
    <div className="max-w-lg w-full mx-auto lg:max-w-full">
      <SectionTitle>
        <h2 className="text-5xl text-primary font-bold text-center mb-8">
          לקוחות מספרים
        </h2>
      </SectionTitle>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        autoplay={{ delay: 25000, disableOnInteraction: false }}
        navigation={false}
        pagination={{ clickable: true }}
        loop={true}>
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className=" text-center p-6 m-2 border border-gray-300 rounded-lg min-h-[300px] max-h-[600px] bg-gray-100 shadow-md">
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-secondary">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-black">{testimonial.city}</p>
              </div>
              <p className="text-black">&quot;{testimonial.message}&quot;</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
