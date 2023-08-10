const page: React.FC = () => {
  return (
    <div className="p-10">                
        {/* Title and Description */}
        <div className='flex'>
            <div className='flex-wrap'>
                <h1 className='text-[36px] font-semibold'>Dashboard</h1>
                <p className='text-[18px] text-blue-400'>Overview of your store</p>
            </div>
        </div>
        
        {/* These boxes will be displayed in a row */}
        <div className='mt-5 flex border-t'>
            {/* Total Revenue */}
            <div className="mt-5 w-full rounded-lg border p-5">
                <h1 className="text-[16px]">Total Revenue</h1>
                <p className='mt-2 text-[24px] font-bold'>PKR 34,000.00</p>
            </div>

            {/* Sales */}
            <div className="ml-5  mt-5 w-full rounded-lg border p-5">
                <h1 className="text-[16px]">Sales</h1>
                <p className='mt-2 text-[24px] font-bold'>+6</p>
            </div>

            {/* Products in Stock */}
            <div className="ml-5 mt-5 w-full rounded-lg border p-5">
                <h1 className="text-[16px]">Products in Stock</h1>
                <p className='mt-2 text-[24px] font-bold'>7</p>
            </div>

            {/* Clicks */}
            <div className="ml-5 mt-5 w-full rounded-lg border p-5">
                <h1 className="text-[16px]">Clicks</h1>
                <p className='mt-2 text-[24px] font-bold'>24</p>
            </div>
        </div>

        <div className='flex'>
            {/* Sales Overview */}
            <div className="mt-5 w-full rounded-lg border p-5">
                <h1 className="text-[20px] font-bold">Overview</h1>
            </div>
        </div>
    </div>
  )
}

export default page