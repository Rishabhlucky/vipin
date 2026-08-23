import Image from "next/image";
import { Heart, Scale, Star } from "lucide-react";
import Link from "next/link";

export default function ProductCard({title, price,rating, review,image  }) {
  // console.log(link , "Link ProductCrad Compo")
  return (
      <div className=" bg-[#3796b3a8] p-2 rounded-2xl mt-4 text-[#ff00bf7d]">
      <div className="relative overflow-hidden bg-white">
        {/* Discount Badge */}
        <div className="absolute left-0 top-0 z-10 bg-[#c026a0] px-3 py-1.5 text-[9px] font-bold text-white">
          25% OFF
        </div>

        {/* Top Icons */}
        <div className="absolute right-3 top-3 z-10 flex flex-col gap-2 overflow-hidden">
          <button className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm">
            <Heart
              size={16}
              strokeWidth={1.8}
              className="text-[#b92b9f]"
            />
          </button>

          <button className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm">
            <Scale
              size={15}
              strokeWidth={1.8}
              className="text-gray-700"
            />
          </button>
        </div>

        {/* Product Image */}
        <div className="relative h-[190px] w-full rounded-lg bg-[#f4f4ff] overflow-hidden">
          <Image
            src={image}
            alt="Resmed AirFit F20 Full Face Mask"
            fill
            className="object-contain overflow-hidden transition-all duration-700 hover:scale-110 cursor-pointer rounded-lg shaadow"
            priority
          />
        </div>

        {/* Product Details */}
        <div className="px-3 pb-3 pt-3 rounded-lg bg-[#3796b3a8]">
          {/* Product Name */}
         <Link href={"/product-details"}> <h3 className="text-xl font-bold ">
            {title}
          </h3>
          </Link>

          {/* Rating */}
          <div className="mt-5 flex items-center gap-1">
            <div className="flex items-center">
              {rating?.map((star) => (
                <Star
                  key={star}
                  size={14}
                  strokeWidth={0}
                  fill="#c026a0"
                  className="text-[#c026a0]"
                />
              ))}

              <Star
                size={14}
                strokeWidth={1.5}
                className="ml-0.5 text-[#c026a0]"
              />
            </div>

            <span className="ml-1 text-[10px] text-[#c026a0]">{rating?.length}</span>
            <span className="mx-1 text-[10px] text-[#c026a0]">|</span>
            <span className="text-[10px] text-[#111]"> {`(${review})`} </span>
          </div>

          {/* Price */}
          <div className="mt-2 flex items-center gap-2">
            <span className="text-base font-extrabold text-green-700">
              ₹{price}
            </span>

            <span className="text-[12px] line-through text-black">
              ₹7,300
            </span>

            <span className="text-[9px] font-medium text-[#c026a0]">
              (25% off)
            </span>
          </div>

          {/* CTA */}
          <button className="mt-5 flex h-[31px] w-full items-center justify-center gap-4 rounded-full bg-[#c026a0] text-[10px] font-bold text-white transition hover:bg-[#b3469b96] cursor-pointer">
            CHOOSE OPTIONS
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
          </button>
        </div>
      </div>
    </div>
    
  );
}