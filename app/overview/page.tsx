'use client'

import { getGraphRevenue } from "@/actions/get-graph-revenue";
import { Overview } from "@/components/overview";
import { inventory } from "@/config/inventory";
import { CreditCard, DollarSign, Package, MousePointer2 } from "lucide-react";
import { useState } from "react";

const Page: React.FC = () => {

  const [clickCounts, setClickCounts] = useState<{ [productId: string]: number }>({});
  const graphRevenue = getGraphRevenue('1')
  const [showClicks, setShowClicks] = useState(false);

  const toggleClicks = () => {
    setShowClicks(!showClicks);
  };
  
  const handleProductClick = (productId: string) => {
    setClickCounts((prevClickCounts) => ({
      ...prevClickCounts,
      [productId]: (prevClickCounts[productId] || 0) + 1,
    }));

    console.log(`Product ${productId} clicked! Click count: ${clickCounts[productId] || 1}`);
  };

  return (
    <div className="p-10">                
        {/* Title and Description */}
        <div className='flex'>
            <div className='flex-wrap'>
                <h1 className='text-[36px] font-bold'>Dashboard</h1>
                <p className='text-[18px] text-blue-400'>Overview of your store</p>
            </div>
        </div>
        
        {/* These boxes will be displayed in a row */}
        <div className='mt-5 flex border-t'>
            {/* Total Revenue */}
            <div className="mt-5 w-full rounded-lg border p-5">
                <div className="flex justify-between">
                    <h1 className="text-[16px]">Total Revenue</h1>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                </div>
                <p className='mt-2 text-[24px] font-bold'>PKR 34,000.00</p>
            </div>

            {/* Sales */}
            <div className="ml-5  mt-5 w-full rounded-lg border p-5">
                <div className="flex justify-between">
                    <h1 className="text-[16px]">Sales</h1>
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                </div>
                <p className='mt-2 text-[24px] font-bold'>+6</p>
            </div>

            {/* Products in Stock */}
            <div className="ml-5 mt-5 w-full rounded-lg border p-5">
                <div className="flex justify-between">
                    <h1 className="text-[16px]">Products in Stock</h1>
                    <Package className="h-4 w-4 text-muted-foreground" />
                </div>
                <p className='mt-2 text-[24px] font-bold'>7</p>
            </div> 
        </div>

        {/* Clicks */}
        {/* <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {inventory.map((product, index) => (
                <div
                    className={`mt-5 w-[25%] rounded-lg border p-5`}
                    key={product.id}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h1 className="text-[16px]">Clicks</h1>
                        <MousePointer2 className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <p className="mt-2 text-[24px] font-bold">{clickCounts[product.id] || 0}</p>
                </div>
            ))}
        </div> */}

        <div>
            <button className="mt-5 rounded-lg bg-violet-600 px-6 text-base font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500" onClick={toggleClicks}>{showClicks ? 'Hide Clicks' : 'Show Clicks'}</button>
            {showClicks && (
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {inventory.map((product, index) => (
                        <div
                            className={`mt-5 w-[25%] rounded-lg border p-5`}
                            key={product.id}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <h1 className="text-[16px]">{product.name} Clicks</h1>
                                <MousePointer2 className="h-4 w-4 text-muted-foreground" />
                            </div>
                            <p className="mt-2 text-[24px] font-bold">{clickCounts[product.id] || 0}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>

        <div className='flex'>
            {/* Sales Overview */}
            <div className="mt-5 w-full rounded-lg border p-5">
                <h1 className="text-[20px] font-bold">Overview</h1>
                <Overview data={[1, 2, 3]} />
            </div>
        </div>
    </div>
  )
}

export default Page