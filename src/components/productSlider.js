"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { products } from "@/data";

export default function ProductSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto overflow-hidden rounded-2xl bg-gray-100 p-6">

      {/* Slider */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-full flex-shrink-0 text-center"
          >
            <div className="relative h-64 w-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>

            <h2 className="mt-4 text-xl font-semibold text-gray-800">
              {product.name}
            </h2>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="mt-5 flex justify-center gap-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              current === index
                ? "w-6 bg-blue-600"
                : "bg-gray-400"
            }`}
          />
        ))}
      </div>

    </div>
  );
}