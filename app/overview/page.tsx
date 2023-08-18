'use client'

import { getGraphRevenue } from "@/actions/get-graph-revenue";
import { inventory } from "@/config/inventory";
import { MousePointer2 } from "lucide-react";
import { useState } from "react";

const Page: React.FC = () => {

  const [clickCounts, setClickCounts] = useState<{ [productId: string]: number }>({});
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
        <div className='flex'>
            <div className='flex-wrap'>
                <h1 className='text-[36px] font-bold'>Dashboard</h1>
                <p className='text-[18px] text-blue-400'>Overview of your store</p>
            </div>
        </div>
        
        <div>            
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
        </div>
    </div>
  )
}

export default Page