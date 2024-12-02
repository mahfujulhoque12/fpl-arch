import React from "react";
import SubHeading from "./typography/SubHeading";
import blogHero from "/public/blog/blogHero.png";
import Image from "next/image";

const BlogHero = () => {
  return (
    <section>
      <div className="relative overflow-hidden">
        <Image
          src={blogHero}
          width={600}
          height={100}
          alt="blog-hero"
          className="w-[100%] object-fill h-[450px]"
        />

        {/* Overlay div */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />

        <SubHeading className="text-gray-100 font-bold uppercase absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
          Floor Planer Blogs
        </SubHeading>
        <div className="flex absolute  top-[56%] left-[45%]  justify-start w-full">
          <button
            type="button"
            className=" gap-2 text-center  flex  bg-[#cf4045] px-4 py-1 text-white rounded-md hover:bg-[#c13136] transition-all text-sm duration-150"
          >
            Get start
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
