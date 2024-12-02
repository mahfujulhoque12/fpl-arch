import React from "react";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import Image from "next/image";
import Banner from "/public/ex.png";
import Link from 'next/link';

const Experience: React.FC = () => {
  return (
    <section className="py-10 md:py-15">
      <MaxWidthWrapper>
        <div className="w-full py-4">
          <div>
            <Link href="/contact-us">
            <Image
              src={Banner}
              className="rounded-md"
              alt="Banner-Img"
              layout="responsive"
              width={1920}
              height={1080}
            />
            </Link>
           
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Experience;
