import { Home, ShoppingBag, Settings2 } from 'lucide-react'

export const BottomNavigation = () => {
  return (
    <div className="z-10 bg-slate-50 flex items-center fixed bottom-0 left-0 w-full border shadow-md border-slate-300 rounded-t-lg h-24">
      <div className='flex justify-between items-center w-full mx-8'>
        <div className='flex flex-col items-center text-orange-600'>
          <div className='border rounded-b-lg bg-orange-600 w-full h-2 relative -top-5' />
          <Home />
          <span className='mt-1'>Home</span>
        </div>

        <div className='flex flex-col items-center text-orange-600'>
          <ShoppingBag />
          <span className='mt-1'>Cart</span>
        </div>

        <div className='flex flex-col items-center text-orange-600'>
          <Settings2 />
          <span className='mt-1'>Settings</span>
        </div>
      </div>
    </div>
  )
}