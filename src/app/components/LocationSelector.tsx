import { MapPin, ChevronDown } from 'lucide-react'

export const LocationSelector = () => {
  return (
    <div className='flex my-4'>
      <MapPin color='orange' />
      <h2 className='font-medium mx-2'>São Paulo, SP</h2>
      <ChevronDown color='orange' />
    </div>
  )
}