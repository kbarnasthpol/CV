// components/projects/ProjectCarousel.jsx
"use client";
import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function ProjectCarousel({ children }) { 
    const carouselRef = useRef(null);
    const scroll = (direction) => {

    if (!carouselRef.current) return;

    const viewportWidth = carouselRef.current.clientWidth;

    carouselRef.current.scrollBy({

        left: viewportWidth * direction,

        behavior: "smooth",

    });

};
    return (
        <div className="relative ">
            <button className="absolute left-2 md:left-4 top-9/20 -translate-y-1/2 z-20 w-12
            cursor-pointer
    h-12 rounded-full backdrop-blur-md bg-transparent border border-diferencias
    shadow-xl hover:scale-110 active:scale-95 transition-all duration-300
    flex
items-center
justify-center" onClick={() => scroll(-1)}>
                <FiChevronLeft/>
            </button>
            <button className="absolute right-2 md:right-4 top-9/20 -translate-y-1/2 z-20 w-12
            cursor-pointer
    h-12 rounded-full backdrop-blur-md bg-transparent border border-diferencias 
    shadow-xl hover:scale-110 active:scale-95 transition-all duration-300
    flex
items-center
justify-center " onClick={() => scroll(+1)}>
                <FiChevronRight/>
            </button>

            <div className=" overflow-hidden w-full relative">
                <div ref={carouselRef} className="flex gap-8 overflow-x-auto overflow-y-hidden snap-x
        snap-mandatory scroll-smooth scrollbar-hide">
                    {children}
                </div>
            </div>
        </div>
    );
}