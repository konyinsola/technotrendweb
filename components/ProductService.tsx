import Link from "next/link";
import React from "react";

function ProductService() {
  return (
    <section className="relative w-full overflow-hidden ">
      <div className="relative max-w-360 mx-auto">
        <div className="relative z-10 max-w-5xl mx-auto text-center pt-20 pb-24 px-4">
          <h1 className="font-manrope font-semibold text-[48px] leading-13.25 tracking-[-2.3px]">
            <span className="text-black">Interested in any of our</span>
            <br />
            <span>products?</span>
          </h1>

          <p className="font-manrope font-normal text-[17px] leading-[30.26px] tracking-normal text-gray-500 mt-6 max-w-155 mx-auto">
            Reach out and we'll walk you through capabilities, pricing, and
            integration options.
          </p>
            <Link href="/services">
              <button className="mt-8 bg-white text-black border-[1.32px] border-[#E3E0D4] text-sm rounded-[10px] pt-3.25 pr-5 pb-3.25 pl-5">
                View our services
              </button>
            </Link>
        </div>
      </div>
    </section>
  );
}

export default ProductService;
