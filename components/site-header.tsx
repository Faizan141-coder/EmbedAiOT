"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation"
import { useShoppingCart } from "use-shopping-cart"
import { ChevronDown, Edit, SearchIcon } from "lucide-react"

import { Input } from "@/components/ui/input"
import { inventory } from "@/config/inventory"
import { Button } from "@/components/ui/button"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {

  const router = useRouter()
  const { cartCount } = useShoppingCart()
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [clickCounts, setClickCounts] = useState<{ [productId: string]: number }>({});

  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);

  const handleProductClick = (productId: string) => {
    setClickCounts((prevClickCounts) => ({
      ...prevClickCounts,
      [productId]: (prevClickCounts[productId] || 0) + 1,
    }));

    console.log(`Product ${productId} clicked! Click count: ${clickCounts[productId] || 1}`);
  };

  const toggleDropdown = (dropdownName: string) => {
    switch (dropdownName) {
      case 'products':
        setShowProductsDropdown(!showProductsDropdown);
        break;
      case 'company':
        setShowCompanyDropdown(!showCompanyDropdown);
        break;
      case 'resources':
        setShowResourcesDropdown(!showResourcesDropdown);
        break;
      default:
        break;
    }
  }

  const onSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const searchQuery = formData.get("search");
    router.replace(`/shop?search=${searchQuery}`);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between space-x-4 px-6 sm:space-x-0">
        <MainNav />

        <h1 className="cursor-pointer" onClick={() => router.push('/')}>Home</h1>
        <h1 className="cursor-pointer">
          <div
            className='relative'
            onMouseEnter={() => toggleDropdown('products')}
            onMouseLeave={() => toggleDropdown('products')}
          >
            <h1 className='flex cursor-pointer' onClick={() => router.push('/shop')}>
              Products <ChevronDown />
            </h1>
            {showProductsDropdown && (
              <div className="absolute left-0 top-full rounded-md bg-sky-50 text-black" style={{ whiteSpace: 'nowrap' }}>
                {inventory.map((item) => (
                  <p
                    key={item.slug}
                    onClick={() => {
                      handleProductClick(item.id); 
                      router.push(`/products/${(item.slug)}`);
                    }}
                    className="cursor-pointer rounded-md px-5 py-2 hover:bg-blue-400 hover:text-white"
                  >
                    {item.name}
                  </p>
                ))}
              </div>
            )}
          </div>
        </h1>
        <h1 className="cursor-pointer">
          <div
            className='relative'
            onMouseEnter={() => toggleDropdown('company')}
            onMouseLeave={() => toggleDropdown('company')}
          >
            <h1 className='flex cursor-pointer'>
              Compnay <ChevronDown />
            </h1>
            {showCompanyDropdown && (
              <div className="absolute left-0 top-full rounded-md bg-sky-50 text-black" style={{ whiteSpace: 'nowrap'}}>
                <p onClick={() => router.push('/company/about')} className="cursor-pointer rounded-md px-5 py-2 hover:bg-blue-400 hover:text-white">About Us</p>
                <p onClick={() => router.push('/company/contact')} className="cursor-pointer rounded-md px-5 py-2 hover:bg-blue-400 hover:text-white">Contact Us</p>
                <p onClick={() => router.push('/company/reviews')} className="cursor-pointer rounded-md px-5 py-2 hover:bg-blue-400 hover:text-white">Client Reviews</p>
                <p onClick={() => router.push('/company/team')} className="cursor-pointer rounded-md px-5 py-2 hover:bg-blue-400 hover:text-white">Our Team</p>
              </div>
            )}
          </div>
        </h1>
        <h1 className="cursor-pointer">
          <div
            className='relative'
            onMouseEnter={() => toggleDropdown('resources')}
            onMouseLeave={() => toggleDropdown('resources')}
          >
            <h1 className='flex cursor-pointer'>
              Resources <ChevronDown />
            </h1>
            {showResourcesDropdown && (
              <div className="absolute left-0 top-full rounded-md bg-sky-50 text-black" style={{ whiteSpace: 'nowrap'}}>
                <p onClick={() => router.push('/resources/guide')} className="cursor-pointer rounded-md px-5 py-2 hover:bg-blue-400 hover:text-white">Application & Software Guide</p>
                <p onClick={() => router.push('/resources/faqs')} className="cursor-pointer rounded-md px-5 py-2 hover:bg-blue-400 hover:text-white">FAQs</p>
              </div>
            )}
          </div>
        </h1>

        <div className="flex items-center space-x-1">
          <Button
            size="sm"
            variant="ghost"
            title="Search"
            onClick={() => setIsInputVisible((prev) => !prev)}
          >
            <SearchIcon className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          {isInputVisible && ( 
            <form onClick={onSubmit} className="hidden items-center lg:inline-flex">
              <Input
                id="search"
                name="search"
                type="search"
                autoComplete="off"
                placeholder="Search products..."
                className="h-9 lg:w-[300px]"
              />
              <Button size="sm" variant="ghost" className="hidden">
                <SearchIcon className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            </form>
          )}

          <Link href="/cart">
            <Button size="sm" variant="ghost" title="Cart">
              <Image src='/logo.svg' alt="cart" width={25} height={25}/>
              <span className="ml-2 text-sm font-bold">{cartCount}</span>
              <span className="sr-only">Cart</span>
            </Button>
          </Link>

          <ThemeToggle />

          {process.env.NODE_ENV === "development" && (
            <Link href="/studio">
              <Button size="sm" variant="ghost">
                <Edit className="h-5 w-5" />
              </Button>
            </Link>
          )}
          <UserButton afterSignOutUrl="/" />
      </div>
      </div>
    </header>
  );
}