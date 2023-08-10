import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="border-t p-10">
      <div className="text-center">
        <h1 className="text-[40px] font-bold">EmbedAiOT</h1>
      </div>
      <div className="mt-10 flex justify-center space-x-10 text-center">
        <div className="flex flex-col">
          <h1 className="text-[20px] font-bold text-blue-400">Office</h1>
          <p>SINES, NUST, H-12, Islamabad</p>
        </div> 
        <div className="flex flex-col">
          <h1 className="text-[20px] font-bold text-blue-400">Contact</h1>
          <p>+923335436531</p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-[20px] font-bold text-blue-400">Website</h1>
          <a href="https://embedaiot.vercel.app" className="hover:text-blue-500">https://embedaiot.vercel.app</a>
        </div>
        <div className="flex flex-col">
          <h1 className="text-[20px] font-bold text-blue-400">Email</h1>
          <a href="mailto:m.shahzad.younis@gmail.com" className="hover:text-blue-500">m.shahzad.younis@gmail.com</a>
        </div>
      </div>      
      <div className="mx-auto mt-10">
        <p className="text-center text-xs">
          &copy; 2023 EmbedAiOT, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}