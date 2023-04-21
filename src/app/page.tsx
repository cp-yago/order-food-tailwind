import Image from 'next/image'

import { MapPin, ChevronDown } from 'lucide-react'
import deliveryGuy from './assets/delivery-guy.png'

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
    </div>
  )
}
