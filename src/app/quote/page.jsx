"use client"
import React from 'react'
import GetQuote from "@/components/getQuates";
import Link from 'next/link';
import useReveal from '@/hooks/useReveal'

export default function Quote(){
  const [ref, visible] = useReveal(1)
  return (
    <div className={visible ? "animate__animated animate__backInLeft":''}>

      <h3> Raise Your Products Add List Product Name and Quantity !</h3>
      <Link href="/quote"><button >ADD</button></Link>

        <GetQuote />
    </div>
  )
}
