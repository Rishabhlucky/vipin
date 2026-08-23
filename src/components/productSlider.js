"use client";

import { useEffect, useRef, useState } from "react";
import { animate, utils } from "animejs";
import { imageSlider } from "@/data";
import Image from "next/image";

export default function ProductSlider() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const imageRef = useRef(null);
  const textRef = useRef(null);
  const timerRef = useRef(null);

  const slide = imageSlider[current];

  /*
   * Animate the current slide
   */
  const animateSlide = () => {
    if (!imageRef.current || !textRef.current) return;

    setIsAnimating(true);

    /*
     * Reset elements before animation
     */
    utils.set(imageRef.current, {
      opacity: 0,
      scale: 0.85,
      translateX: 80,
    });

    utils.set(textRef.current, {
      opacity: 0,
      translateY: -80,
    });

    /*
     * STEP 1
     * Animate IMAGE first
     */
    const imageAnimation = animate(imageRef.current, {
      opacity: [0, 1],
      scale: [0.85, 1],
      translateX: [80, 0],
      duration: 900,
      ease: "outExpo",

      onComplete: () => {
        /*
         * STEP 2
         * Animate text after image finishes
         */
        animate(textRef.current, {
          opacity: [0, 1],
          translateY: [-80, 0],
          duration: 700,
          ease: "outCubic",

          onComplete: () => {
            setIsAnimating(false);
          },
        });
      },
    });

    return imageAnimation;
  };

  /*
   * Run animation whenever slide changes
   */
  useEffect(() => {
    const animation = animateSlide();

    return () => {
      if (animation) {
        animation.cancel();
      }
    };
  }, [current]);

  /*
   * Auto slider
   */
  useEffect(() => {
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % imageSlider.length);
    }, 5000);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [current]);

  /*
   * Next slide
   */
  const nextSlide = () => {
    if (isAnimating) return;

    clearTimeout(timerRef.current);

    setCurrent((prev) => (prev + 1) % imageSlider.length);
  };

  /*
   * Previous slide
   */
  const prevSlide = () => {
    if (isAnimating) return;

    clearTimeout(timerRef.current);

    setCurrent((prev) =>
      prev === 0 ? imageSlider.length - 1 : prev - 1
    );
  };

  /*
   * Go directly to a slide
   */
  const goToSlide = (index) => {
    if (isAnimating || index === current) return;

    clearTimeout(timerRef.current);

    setCurrent(index);
  };

  return (
    <section className="relative min-h-[500px] overflow-hidden bg-[#27303f]">
      <div className="mx-auto flex min-h-[500px] max-w-7xl items-center px-6 lg:px-12">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2">
       
          {/* TEXT */}
          <div
            ref={textRef}
            className="order-2 lg:order-1"
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-green-400">
              Medical Solutions
            </p>

            <h2 className="mb-5 text-3xl font-bold text-white md:text-4xl">
              {slide.title}
            </h2>

            <p className="max-w-lg text-sm leading-7 text-gray-300 md:text-base">
              {slide.description}
            </p>

            <button
              className="mt-7 rounded-md bg-green-600 px-7 py-3 text-sm font-medium text-white transition hover:bg-green-700"
            >
              Read More
            </button>
          </div>

          {/* IMAGE */}
          <div className="order-1 flex justify-center lg:order-2">
            <div
              ref={imageRef}
              className="h-[330px] w-[330px] overflow-hidden rounded-xl border-2 border-green-500 bg-white md:h-[380px] md:w-[380px]"
            >
              <Image 
                key={slide.image}
                src={slide.image}
                alt={slide.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* PREVIOUS BUTTON */}
      <button
        onClick={prevSlide}
        disabled={isAnimating}
        className="absolute left-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white backdrop-blur-sm transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-50"
        aria-label="Previous slide"
      >
        &#8249;
      </button>

      {/* NEXT BUTTON */}
      <button
        onClick={nextSlide}
        disabled={isAnimating}
        className="absolute right-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white backdrop-blur-sm transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-50"
        aria-label="Next slide"
      >
        &#8250;
      </button>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {imageSlider.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === current
                ? "w-8 bg-green-500"
                : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}