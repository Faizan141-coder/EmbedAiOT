import Image from "next/image";
import React from "react";

const Page: React.FC = () => {
  return (
    <div>
      <div className="my-10 px-52">

        <div className="text-justify">
            <div className="flex-wrap">
                <h1 className="text-[44px] font-semibold">
                  Meet Our <span className="text-blue-400">Team</span>
                </h1>
            </div>
        </div>

        <h1 className='mt-10 px-24 pt-5 text-center text-4xl font-bold'><span className="text-blue-400">CEO</span></h1>
        <div className="mt-5 flex flex-wrap items-start space-x-10">
            <div className="flex flex-col items-center justify-center">
              <div className="mx-auto mb-2 h-36 w-36 overflow-hidden rounded-full">
                <Image src="/persons/2222.png" alt="Dr. Shehzad Younas" width="150" height="150" />
              </div>
              <p className="mb-1 text-center text-xl font-bold">Dr. Shahzad Younis</p>
              <p className="text-center">(Director & CEO)</p>
            </div>
        </div>

        <h1 className='mt-10 px-24 pt-5 text-center text-4xl font-bold'><span className="text-blue-400">Team Leads</span></h1>
        <div className="mt-5 flex flex-wrap items-start space-x-10">
            <div className="flex flex-col items-center justify-center">
              <div className="mx-auto mb-2 h-36 w-36 overflow-hidden rounded-full">
                <Image src="/persons/22.jpg" alt="Muhammad Kashif" width="150" height="150" />
              </div>
              <p className="mb-1 text-center text-xl font-bold">Muhammad Kashif</p>
              <p className="text-center">(Product Development Engineer)</p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="mx-auto mb-2 h-36 w-36 overflow-hidden rounded-full">
                <Image src="/persons/aa.png" alt="Muhammad Tayyab" width="150" height="150" />
              </div>
              <p className="mb-1 text-center text-xl font-bold">Muhammad Tayyab</p>
              <p className="text-center">(Design Engineer)</p>
            </div>
        </div>

        <h1 className='mt-5 px-24 pt-5 text-center text-4xl font-bold'><span className="text-blue-400">Research</span></h1>
        <div className="mt-5 flex flex-wrap items-start space-x-10">
          
          <div className="flex flex-col items-center justify-center">
            <div className="mx-auto mb-2 h-36 w-36 overflow-hidden rounded-full">
              <Image src="/persons/Muhammad-Uzair.jpeg" alt="Muhammad Uzair" width="150" height="150" />
            </div>
            <p className="mb-1 text-center text-xl font-bold">Muhammad Uzair</p>
            <p className="text-center">(Design Engineer)</p>
          </div>
          
          <div className="flex flex-col items-center justify-center">
            <div className="mx-auto mb-2 h-36 w-36 overflow-hidden rounded-full">
              <Image src="/persons/Kashif-Janjua.jpeg" alt="Kashif Janjua" width="150" height="150" />
            </div>
            <p className="mb-1 text-center text-xl font-bold">Kashif Janjua</p>
            <p className="text-center">(Team Member)</p>
          </div>
          
          <div className="flex flex-col items-center justify-center">
            <div className="mx-auto mb-2 h-36 w-36 overflow-hidden rounded-full">
              <Image src="/persons/8.jpeg" alt="Nazish Zulfiqar" width="150" height="150" />
            </div>
            <p className="mb-1 text-center text-xl font-bold">Nazish Zulfiqar</p>
            <p className="text-center">(Senior Research Scientist)</p>
          </div>
        </div>

        <h1 className='mt-5 px-24 pt-5 text-center text-4xl font-bold'><span className="text-blue-400">Sales & Marketing</span></h1>
        <div className="mt-5 flex flex-wrap items-start space-x-10">
          
          <div className="flex flex-col items-center justify-center">
            <div className="mx-auto mb-2 h-36 w-36 overflow-hidden rounded-full">
              <Image src="/persons/a.png" alt="Nida Nabeel" width="150" height="150" />
            </div>
            <p className="mb-1 text-center text-xl font-bold">Nida Nabeel</p>
            <p className="text-center">(Media Manager)</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="mx-auto mb-2 h-36 w-36 overflow-hidden rounded-full">
              <Image src="/persons/4.png" alt="Naveen Akbar" width="150" height="150" />
            </div>
            <p className="mb-1 text-center text-xl font-bold">Naveen Akbar</p>
            <p className="text-center">(Product Designer)</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Page;
