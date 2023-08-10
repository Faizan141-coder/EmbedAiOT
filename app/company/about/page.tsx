'use client'

import { BatteryFull, MonitorSpeaker, Target, TrendingDown, UserCheck, Wifi, WifiOff } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const page: React.FC = () => {
  return (
    <div>
          <div className='my-10 flex px-52'>
            <div className='text-justify'>
                <div className='flex'>
                    <div className='flex-wrap'>
                        <h1 className='text-[40px] font-semibold'>About Us <span className='text-blue-400'>- Our Story</span></h1>
                        <p className='text-md mt-5'>
                            Thermalog was established in 2021 in Australia, when we saw the dire need for monitoring systems, especially for storing temperature-sensitive food. There is a strict code where shopkeepers have to keep an eye on the temperature of the refrigerators, freezers, air conditioners, etc., since many food products require to be stored at a certain temperature, otherwise, they may lose their original color, and vitamin content, taste and overall quality – they may even become toxic to some extent. A proper system was needed to monitor the temperature without wasting time and money.
                        </p>
                    </div>
                    <div className='mx-20 mt-5'>
                        <Image 
                            src='/about.png'
                            alt='About Us'
                            width={1920}
                            height={1080}
                            className='mt-16'
                        />
                    </div>
                </div>
                <div className='flex-wrap'>
                    <p className='text-md mt-5'>
                        Hence, we started to design these <span className='font-bold text-blue-500'>monitoring and safety systems</span> in electronic devices that monitor time and temperature. The local shops in Australia became our first clients. Now, we ship our products worldwide! These devices are designed for automated time and temperature monitoring that reduce your costs and ensure food safety compliance. They can be used by anyone who wants to maintain a certain temperature or to keep track of time! Other than enterprises or businesses, our sensors can be used by anyone wanting to:
                    </p>
                    <div className='my-5 flex items-center'>
                        <Target size={16} className='mr-2 text-blue-500' />
                        <span className='text-md font-semibold'>Maintain time and temperature recordings data</span>
                    </div>
                    <div className='my-5 flex items-center'>
                        <Target size={16} className='mr-2 text-blue-500' />
                        <span className='text-md font-semibold'>Enhance Brand Reputation</span>
                    </div>
                    <div className='my-5 flex items-center'>
                        <Target size={16} className='mr-2 text-blue-500' />
                        <span className='text-md font-semibold'>Prevent unnecessary waste</span>    
                    </div>
                    <div className='my-5 flex items-center'>
                        <Target size={16} className='mr-2 text-blue-500' />
                        <span className='text-md font-semibold'>Receive alerts (text, email, and/or audio/visual)</span>
                    </div>
                </div>
                <div>
                    <h1 className='mt-10 text-center text-[40px] font-bold'>Why choose us?</h1>
                    <div className='my-5 flex items-center'>
                        <TrendingDown size={40} className='mr-2 text-blue-500' />
                        <span className='mr-5 text-[25px] font-extrabold'>
                            Low price, high quality
                            <p className='text-[16px] font-normal'>
                                Get the best sensors with highest accuracy of 0.1 °C in the market at the best price.
                            </p>
                        </span>
                        <MonitorSpeaker size={40} className='ml-20 mr-2 text-blue-500' />
                        <span className='text-[25px] font-extrabold'>
                            Operating Range
                            <p className='text-[16px] font-normal'>
                                Our sensors come with a wide operating temperature range of -40 °C to 120 °C.
                            </p>
                        </span>
                    </div>
                    <div className='my-5 flex items-center'>
                        <MonitorSpeaker size={40} className='mr-2 text-blue-500' />
                        <span className='mr-5 text-[25px] font-extrabold'>
                            Connect into gateway
                            <p className='text-[16px] font-normal'>
                                Pair the wireless sensors with the secure gateway and get real time readings on gateway screen.
                            </p>
                        </span>
                        <BatteryFull size={40} className='ml-5 mr-2 text-blue-500' />
                        <span className='text-[25px] font-extrabold'>
                            Battery life
                            <p className='text-[16px] font-normal'>
                                Our sensors are designed to be ultra-low power with a battery life of over 2 years.
                            </p>
                        </span>
                    </div>
                    <div className='my-5 flex items-center'>
                        <UserCheck size={40} className='mr-2 text-blue-500' />
                        <span className='mr-5 text-[25px] font-extrabold'>
                            User friendly
                            <p className='text-[16px] font-normal'>
                                System is designed in such a friendly way that a non-technical person can use system easily no need of IT trained workers.
                            </p>
                        </span>
                        <Wifi size={40} className='ml-20 mr-2 text-blue-500' />
                        <span className='text-[25px] font-extrabold'>
                            Wireless range
                            <p className='text-[16px] font-normal'>
                                The sensors work on mesh networking which means that the range of wireless mesh can be extended into kilometers.
                            </p>
                        </span>
                    </div>
                </div>
            </div>
          </div>
    </div>
  )
}

export default page