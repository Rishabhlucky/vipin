import React from 'react'
import GetQuote from "@/components/getQuates";
import Link from 'next/link';

export default function Quote(){
  return (
    <div>

      <h3> Raise Your Products Add List Product Name and Quantity !</h3>
      <Link href="/quote"><button >ADD</button></Link>

        <GetQuote />
    </div>
  )
}
