'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import { projects } from '@/entities/project';
import { ProjectCard } from './ProjectCard';

export const ProjectsCompact = () => {
  return (
    <section id="projects" className="relative overflow-hidden pt-[12vw] pb-10">
      <span className={`absolute top-0 left-1/2 -translate-x-1/2 transition-colors duration-300
        text-gray-100/75 dark:text-gray-100/5 text-[20vw]/[.75] font-bold uppercase select-none`}>Projects</span>

      <Swiper
        modules={[Pagination, Autoplay]}
        loop
        spaceBetween={20}
        pagination={{ clickable: true }}
        slidesPerView={3}
        speed={700}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: { spaceBetween: 60, },
        }}
        className="w-[260vw] -translate-x-[80vw] md:w-[200vw] md:-translate-x-[50vw] lg:w-[150vw] lg:-translate-x-[25vw]"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <ProjectCard {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};