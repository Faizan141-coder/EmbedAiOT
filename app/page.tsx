'use client'

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Target } from "lucide-react";

interface HomeProps {
  // Add any additional props if required.
}

const Home: React.FC<HomeProps> = () => {
  const router = useRouter();

  return (
    <div>
      
      <div>
        <div className='my-10 px-52'>

          <div>
            <Image 
              src='/EmbedBackg-2.png'
              alt='EmbedAIoT Background'
              width={3000}
              height={500}
            />
          </div>

          <div>
            <h1 className='mt-5 px-24 text-center text-[35px] font-bold'>Delivering <span className="text-blue-400">Smarter Solutions </span>with EmbedAiOT</h1>
            
            <div className="px-10">
            <h1 className='px-24 pt-5 text-center text-4xl font-bold'>Who Are<span className="text-blue-400"> We ?</span></h1>
              <p className='text-md my-5 text-justify'>
                At EmbedAiOT, we are your smart solution experts in embedded systems, AI, and IoT. Specializing in agri-tech and energy, we deliver cutting-edge technologies tailored to your unique needs. Innovation, efficiency, and sustainability drive us forward as we shape a smarter future for industries worldwide
              </p>
              <h1 className='px-24 pt-5 text-center text-4xl font-bold'>We Provide <span className="text-blue-400">Services </span>In</h1>
              <div className='my-5 flex items-center'>
                  <Target size={16} className='mr-2 text-blue-500' />
                  <span className='text-md font-semibold'>Embedded System Solutions</span>
              </div>
              <div className='my-5 flex items-center'>
                  <Target size={16} className='mr-2 text-blue-500' />
                  <span className='text-md font-semibold'>Personalized IOT Ecosystems</span>
              </div>
              <div className='my-5 flex items-center'>
                  <Target size={16} className='mr-2 text-blue-500' />
                  <span className='text-md font-semibold'>Innovative AI Implementation</span>    
              </div>
              <div className='my-5 flex items-center'>
                  <Target size={16} className='mr-2 text-blue-500' />
                  <span className='text-md font-semibold'>Tailored Solutions for Unique Requirements</span>    
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="mt-8 h-[0.3px] w-full bg-blue-500" />
          </div>
           
          <div>
            <h1 className='px-24 pt-5 text-center text-4xl font-bold'>Our<span className="text-blue-400"> Partners</span></h1>
            <div className="flex flex-wrap items-start justify-between">
              <Image src='/partner-logo-2.png' alt='VGreen' width={100} height={10} className="mt-20" />
              <Image src='/partner-logo-3.png' alt='National Incubation Center' width={100} height={10} className="mt-10" />
              <Image src='/partner-logo-4.png' alt='PFAN' width={100} height={10} className="mt-20" />
              <Image src='/partner-logo-5.png' alt='Green Tech' width={100} height={10} className="mt-10"  />
              <Image src='/Microsoft-Logo.png' alt='Microsoft' width={100} height={10} className="mt-20" />
            </div>
          </div>
          <h1 className='mt-5 px-24 pt-5 text-center text-4xl font-bold'>Our<span className="text-blue-400"> Investors</span></h1>
          <div className="flex flex-wrap items-start justify-between">
            <Image src='/Asset1.jpg' alt='VGreen' width={100} height={10} className="mt-14" />
            <Image src='/Asset-2.jpg' alt='National Incubation Center' width={100} height={10} className="mt-10" />
            <Image src='/Asset-3.jpg' alt='PFAN' width={100} height={10} className="mt-14" />
            <Image src='/Asset-4.jpg' alt='Green Tech' width={100} height={10} className="mt-10"  />
            <Image src='/Asset-5.jpg' alt='Microsoft' width={100} height={10} className="mt-10" />
          </div>
    </div>
        
    </div>
    </div>
  );
}

export default Home;