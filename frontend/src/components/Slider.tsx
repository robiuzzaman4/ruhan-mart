"use client";

import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import Container from "./Container";
import Button from "./Button";

const Slider = () => {
    const sliderData = [
        "/images/sliderImg1.jpg",
        "/images/sliderImg2.jpg",
        "/images/sliderImg3.jpg",
        "/images/sliderImg4.jpg",
    ];
    return (
        <section className="pt-24 pb-16">
            <Container>
                <Swiper navigation={true} modules={[Navigation]} className="flex items-center justify-center gap-8">
                    {
                        sliderData.map((sliderImg, index) => (
                            <SwiperSlide key={index}
                                className="relative">
                                {/* slider img */}
                                <Image
                                    src={sliderImg}
                                    alt="Slider Image"
                                    height={100}
                                    width={720}
                                    className="w-full h-full object-cover min-h-[400px] max-h-[500px]" />

                                {/* overlay and content */}
                                <div className="absolute inset-0 bg-neutral-900/60 grid md:grid-cols-2 place-items-center gap-4 p-10 sm:p-16 md:p-20">
                                    <div className="grid gap-4">
                                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-50">
                                            <span className="text-indigo-500">Fresh Product</span> and & Groceries everyday
                                        </h1>
                                        <Button className="bg-indigo-500 text-neutral-50 w-fit rounded-lg">
                                            See More
                                        </Button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Container>
        </section>
    );
};

export default Slider;