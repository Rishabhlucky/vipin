"use client";

import Image from "next/image";
import { useState } from "react";
import Link from 'next/link'


export default function ProductCardHome({mapData ,link}) {
  const [active, setActive] = useState(null);

  return (
    <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 lg:grid-cols-4 ">
      {mapData.map((product) => (
       <Link href={`/${link?`${link}/${product.name}/` :`${product.name}/`}`} key={product.name}> <div
          key={product.id}
          onMouseEnter={() => setActive(product.id)}
          onMouseLeave={() => setActive(null)}
          className={`
            group
            w-[270px]
            h-[380px]
            cursor-pointer
            
            bg-white
            border
            transition-all
            duration-200
            ease-in-out
            ${
              active === product.id
                ? "border-green-700 rounded-tr-[12px] rounded-bl-[12px] shadow-[0_4px_18px_rgba(0,0,0,0.06)]"
                : "border-[#c7cedc] rounded-tl-[12px] rounded-br-[12px]"
            }
          `}
        >
          {/* Image */}
          <div className="relative mt-4 w-full h-[310px]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="
                object-contain
                p-4
                transition-transform
                duration-200
                group-hover:scale-[1.05]
              "
            />
          </div>

          {/* Product Name */}
          <div className="flex h-auto items-center px-7">
            <h3
              className={`
                text-[14px]
                font-semibold
                leading-[20px]
                transition-colors
                duration-200
                ${
                  active === product.id
                    ? "text-green-800"
                    : "text-black"
                }
              `}
            >
              {product.name}
            </h3>
          </div>
        </div>
      </Link>
      ))}
    </div>


  );
}