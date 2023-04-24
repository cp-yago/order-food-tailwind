import { Search, Settings2 } from 'lucide-react'

export const SearchInput = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex items-center p-2 border border-slate-300 rounded-lg h-12 w-full'>
        <Search />
        <input type="text" placeholder='Search' className='m-3' />
      </div>
      <button className='border rounded-lg border-orange-600 ml-1'>
        <Settings2 className='text-orange-600 m-3' />
      </button>
    </div>
  )
}