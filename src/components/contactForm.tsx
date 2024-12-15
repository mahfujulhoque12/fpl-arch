import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import SubHeading from "./typography/SubHeading";
import { FaPaperPlane } from "react-icons/fa";
import { RiHome3Fill } from "react-icons/ri";
import { FaPhoneVolume } from "react-icons/fa6";
import { TiMessages } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import fromImg from "/public/contact/contact2.png";

import map from "/public/contact/map.png";
import ContactFormInfo from "./contactFormInfo";

const ContactForm = () => {
  return (
    <section className="pt-10 md:pt-15">
      <MaxWidthWrapper>
        <div>
          <p className="font-semibold text-sm	uppercase  flex items-center justify-center gap-3">
            Contact Us <FaPaperPlane className="text-[#20B038]" />
          </p>
          <SubHeading className="text-center mt-2 text-gray-700 uppercase font-bold">
            Let’s Chat, Reach Out to us
          </SubHeading>
          <p className=" text-base md:text-xl font-normal text-gray-600 w-[100%] md:w-[60%] mx-auto text-center mt-2">
            Have any questions? We’re here to help. Send us a message, and we’ll
            respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 bg-white shadow-sm p-4 rounded-xl">
          <div className="bg-gradient-to-t from-[#3528C5] to-[#7367F0]  p-6 rounded-lg relative">
            <p className="font-semibold text-xs	uppercase  flex items-center text-gray-100 gap-2">
              Message now <FaPaperPlane className="text-[#60D66A]" />
            </p>

            <p className=" text-lg md:text-[28px] font-semibold text-gray-100 mt-1">
              We’d love to hear, form you
            </p>
            <p className="text-[#C9C9C9] text-base md:text-xl font-normal mt-3">
              Have any questions? We’re here to help. Send us a message, and
              we’ll respond within 24 hours.
            </p>

            <div className="flex items-center mt-28 gap-2">
              <RiHome3Fill size={26} className="text-gray-100 mt-[-16px]" />
              <p className=" text-base font-normal text-gray-100 w-[300px]">
              House # 29 (8th Floor), Block - A, Aftabnaga Main Road, Dhaka - 1219.
              </p>
            </div>
            <p className=" text-base font-normal text-gray-100 w-[300px] mt-4 flex items-center  gap-2">
              {" "}
              <FaPhoneVolume size={20} />
              01896-088860
            </p>

            <p className=" text-base font-normal text-gray-100 w-[300px] mt-4 flex items-center  gap-2">
              {" "}
              <TiMessages size={25} />
              info.yourfpl@gmail.com
            </p>


            <div className="text-gray-100 mt-28 flex gap-3">
              <Link href="#">
                {" "}
                <FaFacebook size={25} />
              </Link>
              <Link href="#">
                {" "}
                <FaInstagram size={25} />
              </Link>
              <Link href="#">
                {" "}
                <FaLinkedin size={25} />
              </Link>
              <Link href="#">
                {" "}
                <RiTwitterXFill size={25} />
              </Link>
            </div>
            <Image
              src={fromImg}
              width={200}
              height={200}
              alt="image"
              className="absolute bottom-0 right-0 w-[80px] h-[80px] md:w-[180px] md:h-[180px]"
            />
          </div>

          <div>
            <ContactFormInfo />
          </div>
        </div>
      </MaxWidthWrapper>

      {/* map */}
      <div className="mt-10">
        <Image
          src={map}
          alt="map"
          width={500}
          height={200}
          className="w-full h-[330px]"
        />
      </div>
    </section>
  );
};

export default ContactForm;
