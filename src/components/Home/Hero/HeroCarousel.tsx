'use client';
// Import Swiper styles
import 'swiper/css/pagination';
import 'swiper/css';

import Image from 'next/image';
import Link from 'next/link';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const slides = [
  {
    discount: '30%',
    title: 'Sit in Style',
    description: `Handcrafted excellence for modern living. Let's make your home looks beautiful.`,
    imageSrc: '/images/hero/hero-main.png',
    imageAlt: 'headphone',
    paddingY: 'py-10 sm:py-15 lg:py-24.5',
    link: '#',
  },
  {
    discount: '15%',
    title: 'Transform your living ro om',
    description: `It's not just a sofa. It's where memories are made, movie nights begin, and naps hit just right.`,
    imageSrc: '/images/hero/hero-01.png',
    imageAlt: 'headphone',
    paddingY: 'py-10 sm:py-15 lg:py-26',
    link: '#',
  },
];
const HeroCarousal = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className='hero-carousel'
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className='flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row'>
            <div className={`max-w-[394px] ${slide.paddingY} pl-4 sm:pl-7.5 lg:pl-12.5`}>
              <div className='flex items-center gap-4 mb-7.5 sm:mb-10'>
                <span className='block font-semibold text-heading-3 sm:text-heading-1 text-green'>
                  {slide.discount}
                </span>
                <span className='block text-dark text-sm sm:text-custom-1 sm:leading-[24px]'>
                  Sale
                  <br />
                  Off
                </span>
              </div>

              <h1 className='font-semibold text-dark text-xl sm:text-3xl mb-3'>
                <Link href={slide.link}>{slide.title}</Link>
              </h1>

              <p>{slide.description}</p>

              <Link
                href={slide.link}
                className='inline-flex font-medium text-white text-custom-sm rounded-md bg-dark py-3 px-9 ease-out duration-200 hover:bg-green mt-10'
              >
                Shop Now
              </Link>
            </div>

            <div>
              <Image src={slide.imageSrc} alt={slide.imageAlt} width={351} height={358} />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroCarousal;
