'use client'

import { useRouter } from "next/navigation";
import Image from "next/image";

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
            <h1 className='mt-5 px-24 text-center text-[35px] font-bold'>EmbedAIoT has put an end to guess work with its<span className="text-blue-400"> Automated Temperature Monitoring System</span></h1>
            
            <div className="px-10">
              <p className='text-md mt-5 text-justify'>
                  Everyone knows that food safety is one of the most important element for businesses in the food industry.
              </p>
              <p className='text-md mt-5 text-justify'>
                  With the constant threat of financial penalties, stock losses, and poor food handling and hygiene practices, it’s essential for businesses to stay on top of regulations to protect the health and safety of consumers.
              </p>
              <p className='text-md mt-5 text-justify'>
                  That’s why we developed our temperature monitoring system. Our system helps businesses stay compliant with government regulations for food safety, address the two-hour/four-hour rule, prevent stock losses with real-time pre-spoilage alerts, keep stock fresh with accurate temperature results and stay ahead of food safety with estimated bacterial growth monitoring.
              </p>
              <p className='text-md mt-5 text-justify'>
                  With our temperature monitoring system, you can say goodbye to operational headaches and save costs like labor, financial penalties and the time for recording temperature manually.
              </p>

              <div className="flex justify-center">
                  <div className="mt-8 h-[0.3px] w-full bg-blue-500" />
              </div>

            </div>

          </div>

        <div>
            <h1 className='px-24 pt-5 text-center text-[35px] font-bold'>Savings<span className="text-blue-400"> Estimator</span></h1>
            <div>
              <p className='text-md mt-5 text-justify'>
                  Relying on traditional methods to monitor and record temperature readings can result in various issues and challenges.
              </p>
              <p className='text-md mt-5 text-justify'>
                  <span className="font-bold text-blue-400">1. </span>It can be costly, especially for multiple appliances or large areas
              </p>
              <p className='text-md mt-5 text-justify'>
                  <span className="font-bold text-blue-400">2. </span>Human error may occur while reading and recording data
              </p>
              <p className='text-md mt-5 text-justify'>
                  <span className="font-bold text-blue-400">3. </span>Timing is crucial; incidents between checks can lead to stock loss
              </p>
              <p className='text-md mt-5 text-justify'>
                  <span className="font-bold text-blue-400">4. </span>Storing physical data takes up significant space.
              </p>
              <p className='text-md mt-5 text-justify'>
                  Use our saving calculator to calculate how much you can save daily and per annum by simply installing the automated temperature monitoring system.
              </p>
              <p className='text-md mt-5 text-justify'>
                  Contact us today to learn more about our solution and take the first step towards automating your temperature monitoring process.
              </p>
            </div>
        </div>
          <div>
            <Image 
              src='/EmbedBackg.png'
              alt='EmbedAIoT Background'
              width={3000}
              height={500}
              className="mt-10"
            />
            <div className="flex justify-center">
              <div className="mt-8 h-[0.3px] w-full bg-blue-500" />
            </div>
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