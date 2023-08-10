"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart"

import { SanityProduct } from "@/config/inventory"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import Brochure from "@/components/Brochure"

interface Props {
  product: SanityProduct
}

export function ProductInfo({ product }: Props) {

  const { addItem, incrementItem, cartDetails } = useShoppingCart()
  const { toast } = useToast()
  const isInCart = !!cartDetails?.[product._id]
  
  const brochureLinks: Record<string, string | null> = {
    'Smart Energy Monitoring Device': 'https://drive.google.com/file/d/1mm4U521ZuPeETGBn0sYaQ4KfICmbJiQ2/view?usp=drive_link',
    'Sense Ball': 'https://drive.google.com/file/d/1m-gjHsKmKxFFDXeHsXa9ngVzw-JhMasJ/view?usp=drive_link',
    'Agri Farm Multi Meter': 'https://drive.google.com/file/d/1U3v4G3IZRUCfzF7sQ4ma3_ET6LUMuo7F/view?usp=drive_link',
    'Range Sensor': null,
    'Multi Channel Power Analyzer': null,
    'Water Quality Monitoring System': null,
    'Wind Direction and Speed Sensor': null,
  };
 
  const addToCart = () => {
    const item = {
      ...product
    }
    isInCart ? incrementItem(item._id) : addItem(item)
    toast({
      title: `${item.name}`,
      description: `Product added to cart`,
      action: (
        <Link href="/cart">
          <Button variant='link' className="gap-x-2 whitespace-nowrap">
            <span>Open cart</span>
            <ArrowRight className='h-5 w-5' />
          </Button>
        </Link>
      )
    })
  }

  return (
    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
      <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>

      <div className="mt-3">
        <h2 className="sr-only">Product information</h2>
        <p className="text-3xl tracking-tight">{formatCurrencyString({ value: product.price, currency: product.currency })}</p>
      </div>

      <div className="mt-6">
        <h3 className="sr-only">Info</h3>
        <div className="space-y-6 text-base">{product.description}</div>
      </div>

      <form className="mt-6">
        <div className="mt-4 flex">
          <Button
            type="button"
            onClick={addToCart}
            className="w-full bg-violet-600 py-6 text-base font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            Add to cart
          </Button>
        </div>
        <div className="mt-5 text-center">
          {brochureLinks[product.name] !== null ? (
            <Brochure link={brochureLinks[product.name] as string} />
          ) : (
            <p>No Brochure exists for this product</p>
          )}
        </div>
      </form>

    </div> 
  )
}
