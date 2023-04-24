import Image from 'next/image'

import star from '../assets/star-rating.png'
import hamburguer1 from '../assets/hamburguer-1.svg'
import { Plus } from 'lucide-react'

export const ProductItem = () => {
  return (
    <div className='flex w-44 mb-4'>
      <div className='flex flex-col border rounded-xl shadow'>
        <div className='flex items-center p-2'>
          <Image src={star} alt="rating" className='w-4' />
          <span className='ml-2'>4.8</span>
        </div>
        <div className='p-2'>
          <Image src={hamburguer1} alt="product" className='p-4 w-full' />
          <h1 className='font-semibold text-xl'>Chicken burguer</h1>
          <p>200 gr chicken + cheese  Lettuce + tomato</p>
        </div>
        <div className='flex items-center justify-between p-2'>
          <p className='text-xl text-orange-600 font-semibold'>$ 22.00</p>
          <button className='bg-orange-600 border rounded-full p-2'>
            <Plus className='text-slate-100' />
          </button>
        </div>
      </div>
    </div>
  )
}