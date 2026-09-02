
"use client"
import ProductCard from '@/components/ProductCard'
import { productsData } from '@/data';
import { Search } from 'lucide-react';
import React, { useState, useEffect } from 'react'


const initialFilter = {
    "non-vented": false,
    mask: false,
    canula: false,
};
export default function OurProduct() {
    const [data, setData] = useState(productsData.slice(0, 10));
    const [filter, setFilter] = useState(initialFilter);
    const [InputData, setInputData] = useState('');

    const handleCheckbox = (e) => {
        const { name, checked } = e.target;

        setFilter((prev) => ({
            ...prev,
            [name]: checked,
        }));
    };

    const handleClearFilter = () => {
        setFilter(initialFilter);
        setData(productsData);
    };


  const handleSearch = () => {
    if(InputData.length <1) return 
    const filter = data.filter((data) =>data.title.includes(InputData));
    console.log("Input Filter ", filter)
    if(!filter) {
      return setData("No data fount ")
    }
    setData(filter)
  }
    useEffect(() => {
        // Get only the filters that are checked
        const activeFilters = Object.keys(filter).filter(
            (key) => filter[key]
        );

        // If no filter is selected, show ALL products
        if (activeFilters.length === 0) {
            setData(productsData);
            return;
        }

        // Otherwise filter products
        const filteredProducts = productsData.filter((product) =>
            activeFilters.includes(product.type)
        );

        setData(filteredProducts);
    }, [filter]);
 console.log(InputData)
    return (
        <div className='flex flex-row-reverse gap-5 h-full'>
            <div className=" product-grid animate__animated animate__fadeInUp">
                {data.map((product, index) => (
                    <ProductCard
                        key={index}
                        title={product.title}
                        price={product.price}
                        rating={product.rating}
                        review={product.review}
                        image={product.image}
                        link="/product-details"
                    />
                ))}
            </div>

            {/* Filetr section  */}
            <div className=" bg-[#02181fa8] rounded-md p-5 w-[200px] sticky bottom-0 top-20  left-0 h-96  ml-2 mt-2 text-white/90">
          <h3>Filter Product</h3>

          <div>
            <div className='flex mt-3 -ml-3 gap-1'>
              <input type="text"
              onChange={(e)=>setInputData(e.target.value)}
               value ={InputData} 
               className='bg-white rounded w-full outline-none border-0 text-black/80' />
              <Search onClick={handleSearch}/>
            </div>
          </div>

          <div>
            <div className="mt-5 flex items-center gap-2">
              <input
                type="checkbox"
                id="mask"
                name="mask"
                checked={filter.mask}
                onChange={handleCheckbox}
              />
              <label htmlFor="mask">Mask</label>
            </div>

            <div className="mt-5 flex items-center gap-2">
              <input
                type="checkbox"
                id="canula"
                name="canula"
                checked={filter.canula}
                onChange={handleCheckbox}
              />
              <label htmlFor="canula">Canula</label>
            </div>

            <div className="mt-5 flex items-center gap-2">
              <input
                type="checkbox"
                id="non-vented"
                name="non-vented"
                checked={filter["non-vented"]}
                onChange={handleCheckbox}
              />
              <label htmlFor="non-vented">Non vented</label>
            </div>

            <button
              onClick={handleClearFilter}
              className="mt-3 cursor-pointer botton rounded-lg bg-blue-500 px-4 py-2 text-base font-bold text-white cursor-pointer"
            >
              Clear
            </button>
          </div>
        </div>
        </div>
    )
}

