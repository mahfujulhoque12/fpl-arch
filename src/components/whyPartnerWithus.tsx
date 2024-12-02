"use client"
import { useEffect } from "react";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import SubHeading from "./typography/SubHeading";

function WhyPartnerWithUs() {
  useEffect(() => {
    // Safe utility function to animate numbers
    function animateValue(
      obj: HTMLElement,
      start: number,
      end: number,
      duration: number
    ): void {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start).toString();
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }

    // Safely get elements and ensure they exist before animating
    const expertise = document.getElementById("expertise");
    const reservation = document.getElementById("reservation");
    const customer = document.getElementById("customer");
    const award = document.getElementById("award");
    const salse = document.getElementById("salse");
    const factory = document.getElementById("factory");
    const grow = document.getElementById("grow");
    const mn = document.getElementById("mn");



    // Null-check and animate values only if elements are found
    if (expertise && reservation && customer && award && salse && factory && grow && mn) {
      animateValue(expertise, 0, 75000, 5000);
      animateValue(reservation, 0, 3500, 5000);
      animateValue(customer, 0, 55, 5000);
      animateValue(award, 0, 29, 5000);
      animateValue(salse, 0, 29, 5000);
      animateValue(factory, 0, 15, 5000);
      animateValue(grow, 0, 500, 5000);
      animateValue(mn, 0, 450, 5000);


    }
  }, []);

  return (
    <section className="py-10 md:py-15">
      <MaxWidthWrapper>
        <div>
          <SubHeading className="text-center text-gray-700 uppercase font-bold">
            Why partner with us?
          </SubHeading>
          <p className="text-base font-medium text-gray-500 text-center">
            We’ll let our numbers be the answer.
          </p>

          {/* Second Part */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-3 text-black">
            <div className="flex flex-col justify-center items-center border rounded-md shadow-md p-4 hover:scale-[101%] transition-all duration-300">
              <h2 className="flex justify-center p-0 m-0">
                <div
                  id="expertise"
                  className="flex items-center justify-center text-3xl font-bold text-[#cf4045]"
                >
                  75000{" "}
                </div>
                <span className="text-3xl font-bold text-[#cf4045]">+</span>
              </h2>
              <span className="text-center text-gray-500">Happy Homes Delivered</span>
            </div>
            <div className="flex flex-col justify-center items-center border rounded-md shadow-md p-4 hover:scale-[101%] transition-all duration-300">
              <h2 className="flex justify-center p-0 m-0">
                <div
                  id="reservation"
                  className="flex items-center justify-center text-3xl font-bold text-[#cf4045]"
                >
                  3500
                </div>
                <span className="text-3xl font-bold text-[#cf4045]">+</span>
              </h2>
              <span className="text-center text-gray-500">Interior Design Onboard</span>
            </div>
            <div className="flex flex-col justify-center items-center border rounded-md shadow-md p-4 hover:scale-[101%] transition-all duration-300">
              <h2 className="flex justify-center p-0 m-0">
                <div
                  id="customer"
                  className="flex items-center justify-center text-3xl font-bold text-[#cf4045]"
                >
                  55
                </div>
                <span className="text-3xl font-bold text-[#cf4045]">+</span>
              </h2>
              <span className="text-center text-gray-500">Cities across 4 countries</span>
            </div>

            <div className="flex flex-col justify-center items-center border rounded-md shadow-md p-4 hover:scale-[101%] transition-all duration-300">
              <h2 className="flex justify-center p-0 m-0">
                <div
                  id="award"
                  className="flex items-center justify-center text-3xl font-bold text-[#cf4045]"
                >
                  29
                </div>
                <span className="text-3xl font-bold text-[#cf4045] ms-1"> lakh+</span>
              </h2>
              <span className="text-center text-gray-500">Catalog Products</span>
            </div>

            {/* Five Card */}
            <div className="flex flex-col justify-center items-center border rounded-md shadow-md p-4 hover:scale-[101%] transition-all duration-300">
              <h2 className="flex justify-center p-0 m-0">
                <div
                  id="salse"
                  className="flex items-center justify-center text-3xl font-bold text-[#cf4045]"
                >
                  120
                </div>
                <span className="text-3xl font-bold text-[#cf4045] ms-1">corer+</span>
              </h2>
              <span className="text-center text-gray-500">Sales per month</span>
            </div>

            {/* Six Card */}
            <div className="flex flex-col justify-center items-center border rounded-md shadow-md p-4 hover:scale-[101%] transition-all duration-300">
              <h2 className="flex justify-center p-0 m-0">
                <div
                  id="factory"
                  className="flex items-center justify-center text-3xl font-bold text-[#cf4045]"
                >
                  15
                </div>
                <span className="text-3xl font-bold text-[#cf4045] ms-1">+</span>
              </h2>
              <span className="text-center text-gray-500">Factories Globally</span>
            </div>

            {/* seven card */}
            <div className="flex flex-col justify-center items-center border rounded-md shadow-md p-4 hover:scale-[101%] transition-all duration-300">
              <h2 className="flex justify-center p-0 m-0">
                <div
                  id="grow"
                  className="flex items-center justify-center text-3xl font-bold text-[#cf4045]"
                >
                  500
                </div>
                <span className="text-3xl font-bold text-[#cf4045] ms-1">%</span>
              </h2>
              <span className="text-center text-gray-500">Grow in last 24 month</span>
            </div>

            {/* eight card */}
            <div className="flex flex-col justify-center items-center border rounded-md shadow-md p-4 hover:scale-[101%] transition-all duration-300">
              <h2 className="flex justify-center p-0 m-0">
              <span className="text-3xl font-bold text-[#cf4045] ms-1">$</span>
                <div
                  id="mn"
                  className="flex items-center justify-center text-3xl font-bold text-[#cf4045]"
                >
                  450
                </div>
                <span className="text-3xl font-bold text-[#cf4045] ms-1">mn</span>
              </h2>
              <span className="text-center text-gray-500">
              raised(Series F as of Feb&apos;22 led by DC)
            </span>

            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default WhyPartnerWithUs;
