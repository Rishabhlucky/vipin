import { Minus, Plus } from 'lucide-react';
import React, { useState } from 'react'

const Faq = ({question, answer}) => {
   const[open, setOpen] = useState(false);
   console.log(open)
  return (
    <div className='bg-white p-4 rounded-2xl my-2'>
        <div className='flex justify-between items-center'>
            <h3 className='text-base font-bold cursor-pointer' onClick={() =>setOpen(!open)}>{question}</h3>
        {!open?<Plus strokeWidth="3" onClick={() =>setOpen(true)} className='cursor-pointer hover:text-2xl'/> :<Minus className='cursor-pointer hover:text-2xl hover:font-semibold' strokeWidth="3" onClick={() =>setOpen(false)} />}
        </div>

         {open && <p className='text-gray-600/70 mt-2'>{answer}</p>}   
        
    </div>
  )
}

export default Faq;