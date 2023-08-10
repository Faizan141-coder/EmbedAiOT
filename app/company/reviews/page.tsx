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
                Client <span className="text-blue-400">Reviews</span>
              </h1>
              <p className="text-md mt-5">
                Need proof of our authenticity, quality, and standards? We’ll just let our clients do that for us. To begin with, we have collected and analyzed all our clients’ feedbacks. We’re proud to tell you that they’re happy, progressive, and successful after using our products!
              </p>
              <br />
              <p className="text-md">
                At <span className="font-bold text-blue-400">EmbedAIoT</span>, we believe that the best way to showcase our products is by letting our clients talk about them. That’s why we are sharing our clients’ feedback to give you an authentic picture of what it’s like to work with us. In addition, we take great pride in the success of our clients, and we are thrilled to report that our products have helped them achieve their goals. Our clients have described their experience with us as not just satisfactory but progressive and successful.
              </p>
            </div>
            <div className="mx-20 mt-5">
              <Image
                src="/Client.png"
                alt="Client Reviews"
                width={1920}
                height={1080}
                className="mt-16"
              />
            </div>
          </div>
          <div className="mt-20">
            <h1 className="mt-5 px-24 text-center text-[38px] font-bold">
              Upgrade your lifestyle with our products<span className="text-blue-400"> that exceed expectations</span>
            </h1>
            <div>
              <p className="text-md mt-5 text-justify">
                We understand that choosing a product can be a difficult decision. That’s why we have made it our mission to provide the highest quality products that meet our clients’ needs. Our products are designed to deliver results and exceed expectations, and our clients’ feedback reflects that.
              </p>
              <p className="text-md mt-5 text-justify">
                So, if you are still on the fence about working with us, take a look at our client reviews page. You will see for yourself how our products have made a positive impact on our clients’ lives.
              </p>
              <p className="text-md mt-5 text-justify">
                Overall, we are confident that you will find the authenticity, quality, and standards you are looking for in our products. In the end, we are grateful for the support and positive feedback we have received from our clients, and we are committed to maintaining the highest standards of excellence in all that we do.
              </p>
              <p className="text- mt-5 text-justify text-[22px] font-bold">
                We would love to hear from you too.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
