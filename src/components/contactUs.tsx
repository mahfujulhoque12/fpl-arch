import SubHeading from "./typography/SubHeading";
import { MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";

const ContactUs = () => {
  return (
    <section>
      <div className="w-full h-auto">
        <div
          style={{
            backgroundImage: `url('/contact/contact.jpg')`,
            // width: '100%',
            height: "400px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="relative object-none object-center"
        >
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center">
            <SubHeading className="font-bold text-[#FFFFFF] uppercase">
              Contact Us
            </SubHeading>
            <div className="flex gap-3 items-center mt-4">
              <Link href="/" className="text-gray-300 font-normal text-base">
                Home
              </Link>
              <MdArrowForwardIos className="text-gray-300" />
              <Link
                href=""
                className="bg-gradient-to-r from-[#20B038] to-[#60D66A] text-transparent bg-clip-text font-normal text-base"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
