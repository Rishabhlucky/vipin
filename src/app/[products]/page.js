
// "use client";

// import Link from "next/link";
// import {
//   ArrowRight,
//   Building2,
//   Microscope,
//   Scissors,
//   Search,
//   Stethoscope,
//   Wrench,
// } from "lucide-react";

// import ProductCard from "@/components/ProductCard";
// import { productsData } from "@/data";
// import { useEffect, useState } from "react";

// const products = [
//   [
//     "General Surgery Instruments",
//     "Scissors, forceps, retractors, clamps and essential surgical sets.",
//     Scissors,
//   ],
//   [
//     "Orthopedic Instruments",
//     "Precision-focused instruments for orthopedic procedures.",
//     Stethoscope,
//   ],
//   [
//     "Operation Theatre Equipment",
//     "Equipment and accessories for organized operating rooms.",
//     Building2,
//   ],
//   [
//     "Diagnostic Equipment",
//     "Healthcare equipment for dependable clinical workflows.",
//     Microscope,
//   ],
//   [
//     "Surgical Sets",
//     "Procedure-focused instrument sets for institutional requirements.",
//     Wrench,
//   ],
// ];

// const initialFilter = {
//   "non-vented": false,
//   mask: false,
//   canula: false,
// };

// export default function ProductsPage() {
//   const [data, setData] = useState(productsData);
//   const [filter, setFilter] = useState(initialFilter);

//   const handleCheckbox = (e) => {
//     const { name, checked } = e.target;

//     setFilter((prev) => ({
//       ...prev,
//       [name]: checked,
//     }));
//   };

//   const handleClearFilter = () => {
//     setFilter(initialFilter);
//     setData(productsData);
//   };

//   useEffect(() => {
//     // Get only the filters that are checked
//     const activeFilters = Object.keys(filter).filter(
//       (key) => filter[key]
//     );

//     // If no filter is selected, show ALL products
//     if (activeFilters.length === 0) {
//       setData(productsData);
//       return;
//     }

//     // Otherwise filter products
//     const filteredProducts = productsData.filter((product) =>
//       activeFilters.includes(product.type)
//     );

//     setData(filteredProducts);
//   }, [filter]);

//   return (
//     <section className="inner-page section ml-[250px] h-full">
//       <div className="container">
//         <div className="eyebrow">Products</div>

//         <h4 className="my-2 text-base font-extrabold">
//           Surgical instruments and medical equipment
//         </h4>

//         <p className="lead">
//           Browse our major product categories. Contact us for availability,
//           specifications, institutional pricing and bulk requirements.
//         </p>

//         {/* FILTER */}
//         <div className="product-filter h-full bg-[#3796b3a8]">
//           <h3>Search for Filter Product</h3>

//           <div>
//             <div>
//               <input type="text" />
//               <Search />
//             </div>
//           </div>

//           <div>
//             <div className="m-2 flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 id="mask"
//                 name="mask"
//                 checked={filter.mask}
//                 onChange={handleCheckbox}
//               />
//               <label htmlFor="mask">Mask</label>
//             </div>

//             <div className="m-2 flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 id="canula"
//                 name="canula"
//                 checked={filter.canula}
//                 onChange={handleCheckbox}
//               />
//               <label htmlFor="canula">Canula</label>
//             </div>

//             <div className="m-2 flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 id="non-vented"
//                 name="non-vented"
//                 checked={filter["non-vented"]}
//                 onChange={handleCheckbox}
//               />
//               <label htmlFor="non-vented">Non vented</label>
//             </div>

//             <button
//               onClick={handleClearFilter}
//               className="cursor-pointer rounded-lg bg-blue-500 px-4 py-2 text-base font-bold text-white"
//             >
//               Clear
//             </button>
//           </div>
//         </div>

//         {/* PRODUCTS */}
//         <div className="product-grid animate__animated animate__fadeInUp">
//           {data.map((product, index) => (
//             <ProductCard
//               key={index}
//               title={product.title}
//               price={product.price}
//               rating={product.rating}
//               review={product.review}
//               image={product.image}
//               link="/product-details"
//             />
//           ))}
//         </div>

//         {/* CATALOG */}
//         <div className="catalog-grid">
//           {products.map(([title, description, Icon]) => (
//             <article className="catalog-card" key={title}>
//               <div className="catalog-icon">
//                 <Icon size={28} />
//               </div>

//               <h2>{title}</h2>

//               <p>{description}</p>

//               <Link href="/contact">
//                 Request details <ArrowRight size={16} />
//               </Link>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import { ChevronRight } from 'lucide-react'
import { productHome } from '@/data';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ProductCardHome from '@/components/ProductCardHome';

export default async function ProductsPage({ params }) {
  const { products } = await params
  console.log(products, "product")
  const productData = productHome.find((item) => item.name == products);
  console.log(productData, "Filter product by name")
  return (
   <div>

    <div className="relative h-[185px] overflow-hidden">
      {/* Background */}
      <Image
        src={productData.image}
        alt=""
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Hero content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="text-2xl font-bold text-white md:text-3xl">
          {productData?.name}
        </h1>

        {/* Breadcrumb */}
        <nav className="mt-2 flex items-center gap-1 text-[10px] font-medium text-white md:text-xs">
          <Link
            href="/"
            className="transition hover:text-green-400"
          >
            Home
          </Link>

          <ChevronRight
            size={13}
            className="text-green-500"
          />

          <span className="text-white">
            {productData.name.split("-").join(" ")}
          </span>
        </nav>
      </div>
    </div>

    {/* product Listes  */}
    <div className='my-10 flex justify-center items-center'>

    <ProductCardHome mapData={productData.subTitle} link={`${productData.name}`}/>
    </div>
    </div>
  )
}
