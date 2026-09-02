


import Image from "next/image";
import { productHome } from "@/data";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
} from "lucide-react";


export default async function ProductDetails({params}) {
   const { products , name } = await params
  let productData = productHome.find((item =>item.name == products));
productData = productData.subTitle.find((item => item.name ==name));

console.log(products , name, productData, "Check URL ")
  return (
    
    <main className="min-h-screen bg-white">

      {/* =====================================================
          HERO / BREADCRUMB
      ====================================================== */}
      <section className="relative h-[185px] overflow-hidden">
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
            {productData.name}
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

            <Link
              href={`/${products}`}
              className="transition hover:text-green-400"
            >
              Tracheostomy Tube
            </Link>

            <ChevronRight
              size={13}
              className="text-green-500"
            />

            <span className="text-white">
              {productData.name}
            </span>
          </nav>
        </div>
      </section>


      {/* =====================================================
          PRODUCT INFORMATION
      ====================================================== */}
      <section className="bg-white px-4 py-12 md:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">

          {/* Product title */}
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#172b45] md:text-4xl">
              {productData.title}
            </h2>

            <p className="mt-2 text-sm font-medium text-green-600">
              Brand Name: {productData?.brand}
            </p>
          </div>


          {/* Product image + table */}
          <div className="mt-8 grid items-start gap-8 md:grid-cols-2 lg:gap-12">

            {/* Product image */}
            <div className="flex justify-center">
              <div className="relative h-[320px] w-full max-w-[420px] overflow-hidden rounded-xl border border-green-500 bg-white">
                <Image
                  src={productData.image}
                  alt={productData.name}
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>


            {/* Size table */}
            <div className="overflow-hidden border border-gray-400">
              <table className="w-full border-collapse text-center text-sm">
                <thead>
                  <tr className="bg-[#0c467d] text-white">
                    <th className="border-r border-white/30 px-4 py-2.5 text-xs font-bold">
                      Product Size Code
                    </th>

                    <th className="px-4 py-2.5 text-xs font-bold">
                      Size
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {productData.sizes.map((item, index) => (
                    <tr
                      key={item.code}
                      className={
                        index % 2 === 0
                          ? "bg-white"
                          : "bg-gray-50"
                      }
                    >
                      <td className="border-t border-gray-400 px-4 py-2.5 text-sm text-gray-800">
                        {item.code}
                      </td>

                      <td className="border-l border-t border-gray-400 px-4 py-2.5 text-sm text-gray-800">
                        {item.size}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          FEATURES
      ====================================================== */}
      <section className="bg-[#f5f6f8] px-4 py-10 md:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">

          {/* Heading */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#172b45] md:text-4xl">
              Features
            </h2>

            <p className="mx-auto mt-2 max-w-4xl text-sm leading-6 text-gray-800 md:text-base">
              When caring for a patient with a tracheostomy, you need to
              choose the tracheostomy tube that best suits the specific
              clinical need. The trachsafeplus range has many benefits:
            </p>
          </div>


          {/* Feature list */}
          <div className="mx-auto mt-4 max-w-5xl space-y-2">

            {productData.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-md border border-[#06477e] bg-white px-4 py-3 shadow-sm transition hover:bg-blue-50"
              >
                <ArrowRight
                  size={17}
                  strokeWidth={2.5}
                  className="mt-0.5 shrink-0 text-green-600"
                />

                <p className="text-xs leading-5 text-gray-900 md:text-sm md:leading-6">
                  {feature}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}
