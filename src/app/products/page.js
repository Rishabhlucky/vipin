"use client"

import Link from "next/link";
import { ArrowRight, Building2, Microscope, Scissors, Search, Stethoscope, Wrench } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { productsData } from "@/data"
import { useEffect, useState } from "react";

const products = [
  ["General Surgery Instruments", "Scissors, forceps, retractors, clamps and essential surgical sets.", Scissors],
  ["Orthopedic Instruments", "Precision-focused instruments for orthopedic procedures.", Stethoscope],
  ["Operation Theatre Equipment", "Equipment and accessories for organized operating rooms.", Building2],
  ["Diagnostic Equipment", "Healthcare equipment for dependable clinical workflows.", Microscope],
  ["Surgical Sets", "Procedure-focused instrument sets for institutional requirements.", Wrench]
];
const filterIncialVal = {
    "non-vented":false,
    "mask":false,
    "canula":false
  }
export default function ProductsPage() {
  const  [data, setData] =useState(productsData);

  const [filter , setFilter] =useState(filterIncialVal)

  const handleCheckbox =(e)=>{
    const { name, checked } = e.target;
    setFilter(pre => ({
      ...pre,
      [name]:checked
    }))
  }

  const handleClearFilter = () =>{
    setData(productsData);
    setFilter(filterIncialVal)

  }
  useEffect(() =>{
    const filterKey = Object.keys(filter);
    console.log(filterKey , "FilterKey")
    
     const filterData = productsData.filter(data =>filterKey.includes(data.type) &&filter[data.type])
     setData(filterData);
  },[filter])


  useEffect(() =>{
    console.log(filter , "Filter")
  })
  return (
    <section className="inner-page section ml-[250px]">
      <div className="container">
        <div className="eyebrow">Products</div>
        <h4 className="text-base font-extrabold my-2">Surgical instruments and medical equipment</h4>
        <p className="lead">
          Browse our major product categories. Contact us for availability,
          specifications, institutional pricing and bulk requirements.
        </p>

        {/* product filter */}
        <div className="product-filter">

          <h3>Search for Filter Product</h3>
          <div>
            <div>
              <input type="text" />
              <Search />
            </div>

          </div>
          <div>

            <div>
              <input type="checkbox" id="mask" checked={filter.mask} name="mask" onChange={handleCheckbox} />
                <label htmlFor="mask">Mask </label>
            </div>
            <div>
              <input type="checkbox" id="canula" name="canula" checked={filter.canula} onChange={handleCheckbox}/>
                <label htmlFor="canula">canula</label>
            </div>
            <div>
              <input type="checkbox" id="non-vented" name="non-vented" checked={filter["non-vented"]} onChange={handleCheckbox}/>
                <label htmlFor="non-vented">Non vented</label>
            </div>

            <button onClick={handleClearFilter}>Clear</button>
          </div>
        </div>
        <div className="product-grid animate__animated animate__fadeInUp">
          {data?.map((product, index) => (
            <ProductCard key={index} title={product.title} price={product.price} rating={product.rating} review={product.review} image={product.image} />
          ))}
        </div>
        <div className="catalog-grid">
          {products.map(([title, description, Icon]) => (
            <article className="catalog-card" key={title}>
              <div className="catalog-icon"><Icon size={28} /></div>
              <h2>{title}</h2>
              <p>{description}</p>
              <Link href="/contact">Request details <ArrowRight size={16} /></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
