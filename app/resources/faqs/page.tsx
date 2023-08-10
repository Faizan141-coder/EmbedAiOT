import Image from "next/image";
import React from "react";

const Page: React.FC = () => {
  return (
    <div>
      <div className="my-10 flex px-52">
        <div className="text-justify">
          <div className="flex">
            <div className="flex-wrap">
              <h1 className="text-[44px] font-semibold">
                Frequently Asked <span className="text-blue-400">Questions</span>
              </h1>
              <p className="text-md mt-5">
                Welcome to the Frequently Asked Questions page of our website!
              </p>
              <p className="text-md mt-5">
                Here you’ll find answers to common questions about our products and services. If you can’t find what you’re looking for, please contact us, and one of our customer service representatives will be happy to help.
              </p>
              <p className="text-md mt-5">
                We hope this page provides you with the information you need to make informed decisions about our products and services. Thank you for visiting.
              </p>
            </div>
            <div className="mx-20 mt-5">
              <Image
                src="/faq.png"
                alt="FAQ"
                width={1000}
                height={500}
                className="mt-16"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
