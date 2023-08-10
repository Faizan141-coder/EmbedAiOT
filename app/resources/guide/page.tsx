import Image from "next/image";
import React from "react";

const Page: React.FC = () => {
  return (
    <div>
      <div className="my-10 flex px-52">
        <div className="text-justify">
          <div className="flex">
            <div className="mr-32 flex-wrap">
              <h1 className="text-[44px] font-semibold">
                Application and <span className="text-blue-400">Software Guide</span>
              </h1>
              <p className="my-5 text-[16px] font-semibold">Make your life easier with our Smart Agricultural Solutions</p>
              <p className="text-sm">
                Do you manage a business with a lot of manual work? If yes, then it’s time to move to an automated system. Automation is the key to making your business more efficient and cost-effective.
              </p>
              <br />
              <p className="text-sm">
                With the help of our automated temperature monitoring system, you can easily monitor and manage the temperature of your desired location.
              </p>
            </div>
            <div>
              <Image
                src="/guide.png"
                alt="Guide"
                width={600}
                height={100}
                className="mt-16"
              />
            </div>
          </div>
          <div className="mt-20">
            <p className="my-5 text-[16px] font-semibold">So, are you ready to take your business to the next level with automated temperature monitoring?</p>
            <p className="my-5 text-sm">1. Ensure that you set up the sensor at the right location to get accurate readings.</p>
            <p className="my-5 text-sm">2. Regularly check the temperature readings and make sure that they are within the desired range.</p>
            <p className="my-5 text-sm">3. Make sure that you secure the data on an IoT platform to ensure that it is safe and secure.</p>
            <p className="my-5 text-sm">4. Check the online dashboard regularly to get a comprehensive view of all spaces and devices.</p>
            <p className="my-5 text-sm">5. Make sure that you set up alerts so that you can stay informed about the environment.</p>
            <p className="my-5 text-sm">6. Regularly monitor and manage the temperature of the environment to enhance your brand value.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;