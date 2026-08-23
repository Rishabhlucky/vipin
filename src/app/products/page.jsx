
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

    return (
        <div className='flex flex-row-reverse gap-5 h-full'>
            <div className="product-grid animate__animated animate__fadeInUp">
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
            <div className=" bg-[#3796b3a8] fixed top-16  left-0 h-64">
          <h3>Search for Filter Product</h3>

          <div>
            <div>
              <input type="text" />
              <Search />
            </div>
          </div>

          <div>
            <div className="m-2 flex items-center gap-2">
              <input
                type="checkbox"
                id="mask"
                name="mask"
                checked={filter.mask}
                onChange={handleCheckbox}
              />
              <label htmlFor="mask">Mask</label>
            </div>

            <div className="m-2 flex items-center gap-2">
              <input
                type="checkbox"
                id="canula"
                name="canula"
                checked={filter.canula}
                onChange={handleCheckbox}
              />
              <label htmlFor="canula">Canula</label>
            </div>

            <div className="m-2 flex items-center gap-2">
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
              className="cursor-pointer rounded-lg bg-blue-500 px-4 py-2 text-base font-bold text-white"
            >
              Clear
            </button>
          </div>
        </div>
        </div>
    )
}

