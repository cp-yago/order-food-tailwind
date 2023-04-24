import Image from 'next/image'

import deliveryGuy from './assets/delivery-guy.png'

import {
  ProductItem,
  SearchInput,
  LocationSelector,
  CategorySelector,
  BottomNavigation
} from './components'

export default function Home() {
  return (
    <div className='h-screen p-3'>
      <div className='flex flex-col'>
        <LocationSelector />
        <div className="flex items-center justify-between p-2">
          <h1 className="text-3xl font-semibold">Order Your Food Fast and Free</h1>
          <Image src={deliveryGuy} alt="delivery-icon" className='w-1/2' />
        </div>
      </div>

      <SearchInput />

      <CategorySelector />

      <div className='mt-4 flex flex-wrap justify-between overflow-y-scroll w-full h-2/4'>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>

      <BottomNavigation />
    </div >
  )
}
