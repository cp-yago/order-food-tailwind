export const CategorySelector = () => {
  return (
    <>
      <h2 className='text-xl font-semibold my-4'>Categories</h2>
      <div className="overflow-x-scroll">
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
    </>
  )
}