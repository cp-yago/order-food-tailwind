import Image from 'next/image'

import { MapPin, ChevronDown, Search, Settings2, Plus } from 'lucide-react'

import deliveryGuy from './assets/delivery-guy.png'
import star from './assets/star-rating.png'
import hamburguer1 from './assets/hamburguer-1.svg'
import hamburguer2 from './assets/hamburguer-1.svg'

export default function Home() {
  return (
    <div className='h-screen p-3'>
      <div className='flex flex-col'>
        <div className='flex my-4'>
          <MapPin color='orange' />
          <h2 className='font-medium mx-2'>São Paulo, SP</h2>
          <ChevronDown color='orange' />
        </div>
        <div className="flex items-center justify-between p-2">
          <h1 className="text-3xl font-semibold">Order Your Food Fast and Free</h1>
          <Image src={deliveryGuy} alt="delivery-icon" className='w-1/2' />
        </div>
      </div>

      <div className='flex justify-between'>
        <div className='flex items-center p-2 border border-slate-300 rounded-lg h-12 w-full'>
          <Search />
          <input type="text" placeholder='Search' className='m-3' />
        </div>
        <button className='border rounded-lg border-orange-600 ml-3'>
          <Settings2 className='text-orange-600 m-3' />
        </button>
      </div>

      <div>
        <h2 className='text-xl font-semibold my-4'>Categories</h2>
        <div className='flex'>
          <div className='flex justify-center items-center border rounded-lg border-orange-600 w-20 h-10 px-16 mr-4'>
            <span role="img" aria-label="sheep">🍔</span>
            <h3 className='font-semibold mx-1'>Burguer</h3>
          </div>
          <div className='flex justify-center items-center border rounded-lg border-orange-600 w-20 h-10 px-16 mr-4'>
            <span role="img" aria-label="sheep">🍕</span>
            <h3 className='font-semibold mx-1'>Pizza</h3>
          </div>
          <div className='flex justify-center items-center border rounded-lg border-orange-600 w-20 h-10 px-16 mr-4'>
            <span role="img" aria-label="sheep">🌭</span>
            <h3 className='font-semibold mx-1'>Sandwich</h3>
          </div>
        </div>
      </div>

      <div className='flex mt-4'>
        <div className='flex flex-col border rounded-xl shadow w-1/2 mx-2'>
          <div className='flex items-center p-2 w-full'>
            <Image src={star} alt="rating" className='w-4' />
            <span className='ml-2'>4.8</span>
          </div>
          <div className='p-2'>
            <Image src={hamburguer1} alt="product" className='w-full p-4' />
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

        <div className='flex flex-col border rounded-xl shadow w-1/2'>
          <div className='flex items-center p-2 w-full'>
            <Image src={star} alt="rating" className='w-4' />
            <span className='ml-2'>4.8</span>
          </div>
          <div className='p-2'>
            <Image src={hamburguer1} alt="product" className='w-full p-4' />
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
    </div>
  )
}
