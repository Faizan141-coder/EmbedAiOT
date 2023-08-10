'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { urlForImage } from "@/sanity/lib/image";
import { XCircle } from "lucide-react";
import { formatCurrencyString } from "use-shopping-cart";

import { SanityProduct } from "@/config/inventory";
import { shimmer, toBase64 } from "@/lib/image";

interface Props {
  products: SanityProduct[];
}

export function ProductGrid({ products }: Props) {

  const [clickCounts, setClickCounts] = useState<{ [productId: string]: number }>({});
  
  const handleProductClick = (productId: string) => {
    setClickCounts((prevClickCounts) => ({
      ...prevClickCounts,
      [productId]: (prevClickCounts[productId] || 0) + 1,
    }));

    console.log(`Product ${productId} clicked! Click count: ${clickCounts[productId] || 1}`);
  };

  if (products.length === 0) {
    return (
      <div className="mx-auto grid h-40 w-full place-items-center rounded-md border-2 border-dashed bg-gray-50 py-10 text-center dark:bg-gray-900">
        <div>
          <XCircle className="mx-auto h-10 w-10 text-gray-500 dark:text-gray-200" />
          <h1 className="mt-2 text-xl font-bold tracking-tight text-gray-500 dark:text-gray-200 sm:text-2xl">
            No products found
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-4 lg:col-span-4 lg:gap-x-8">
      {products.map((product) => {
        if (product.images && product.images.length > 0) {
          const firstImageUrl = urlForImage(product.images[0]).url();

          return (
            <Link key={product._id} onClick={() => handleProductClick(product._id)} href={`/products/${product.slug}`} passHref >
              <div className="text-center">
                <div className="mx-auto mb-2 h-60 w-60 overflow-hidden rounded-lg border-2 border-gray-600">
                  <Image
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64, ${toBase64(shimmer(225, 280))}`}
                    src={firstImageUrl}
                    alt={product.name}
                    width={225}
                    height={280}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-4 font-medium">{product.name}</h3>
                <p className="mt-2 font-medium">
                  {formatCurrencyString({ currency: product.currency, value: product.price })}
                </p>
              </div>
            </Link>
          );
        }

        return (
          <div key={product._id}>
            <h3>{product.name}</h3>
            <p>No images available</p>
          </div>
        );
      })}
    </div>
  );
}
