"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import quo from "/public/quo/quo.png";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import Link from "next/link";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specificOption: string;
  specificOptionTwo: string;
  subject: string;
  message: string;
  agreeToPolicy: boolean;
}

const Cotesion: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    specificOption: "",
    specificOptionTwo: "",
    message: "",
    agreeToPolicy: false,
  });
  const [errors, setErrors] = useState<{ [K in keyof FormData]?: string }>({});
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    // Reset specificOption if subject changes
    if (name === "subject") {
      setFormData({
        ...formData,
        [name]: value,
        specificOption: "",
        specificOptionTwo: "", // Reset specific option when subject changes
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const validate = () => {
    const tempErrors: { [K in keyof FormData]?: string } = {};

    if (!formData.firstName) tempErrors.firstName = "First Name is required";
    if (!formData.lastName) tempErrors.lastName = "Last Name is required";

    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is not valid";
    }
    if (!formData.phone) tempErrors.phone = "Phone Number is required";

    if (!formData.subject) tempErrors.subject = "Subject is required";
    if (!formData.message) tempErrors.message = "Message is required";
    if (!formData.agreeToPolicy)
      tempErrors.agreeToPolicy = "You must agree to the privacy policy";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate() && form.current) {
      setLoading(true);
      emailjs
        .sendForm(
          "service_kfj3cro",
          "template_lfluq19",
          form.current,
          "orx1MIs4yluPGG7mH"
        )
        .then(
          () => {
            setSuccessMessage("Your message has been sent successfully!");
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              subject: "",
              specificOption: "",
              specificOptionTwo: "",
              message: "",
              agreeToPolicy: false,
            });
            setErrors({});
            setTimeout(() => setSuccessMessage(null), 3000);
            setLoading(false);
          },
          (error) => {
            console.error("FAILED...", error.text);
            setLoading(false);
          }
        );
    }
  };

  return (
    <section className="py-10">
      <MaxWidthWrapper>
        <h3 className="text-gray-700 text-3xl text-center font-bold uppercase mb-4">
          Send Us a Message
        </h3>

        <div className="grid grid-col-1 gap-6 md:grid-cols-2">
          <div>
            <Image
              src={quo}
              width={800}
              height={500}
              alt="img" 
              className="rounded-md shadow-md mt-5"  
            />
          </div>
          <div >
            <form ref={form} onSubmit={handleSubmit}>
              <div className=" p-4">
                <div className="w-full">
                  <label className="font-medium text-xs">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="w-full border-b border-gray-400 mt-2 py-2 outline-none placeholder-gray-600 focus:border-[#60D66A] focus:placeholder-transparent text-sm font-medium"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs">{errors.firstName}</p>
                  )}
                </div>
                <div className="w-full mt-8">
                  <label className="font-medium text-xs">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="w-full border-b border-gray-400 mt-2 py-2 outline-none placeholder-gray-600 focus:border-[#60D66A] focus:placeholder-transparent text-sm font-medium"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div className=" p-4">
                <div className="w-full">
                  <label className="font-medium text-xs">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="test@gmail.com"
                    className="w-full border-b border-gray-400 mt-2 py-2 outline-none placeholder-gray-600 focus:border-[#60D66A] focus:placeholder-transparent text-sm font-medium"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">{errors.email}</p>
                  )}
                </div>
                <div className="w-full mt-8">
                  <label className="font-medium text-xs">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="+0215864545"
                    className="w-full border-b border-gray-400 mt-2 py-2 outline-none placeholder-gray-600 focus:border-[#60D66A] focus:placeholder-transparent text-sm font-medium"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className=" p-4">
                <div className="w-full">
                  <label className="font-medium text-xs">
                    What Kind Of Faculty You Want
                  </label>
                  <select
                    name="subject"
                    className="w-full border-b border-gray-400 mt-2 py-2 outline-none placeholder-gray-600 focus:border-[#60D66A] text-sm font-medium"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="interiors">Interiors Faculty</option>
                    <option value="construction">Construction Faculty</option>
                  </select>
                  {errors.subject && (
                    <p className="text-red-500 text-xs">{errors.subject}</p>
                  )}
                </div>

                {formData.subject === "interiors" && (
                  <div className="w-full mt-8">
                    <label className="font-medium text-xs">
                      Select Room Type
                    </label>
                    <select
                      name="specificOption"
                      className="w-full border-b border-gray-400 mt-2 py-2 outline-none placeholder-gray-600 focus:border-[#60D66A] text-sm font-medium"
                      value={formData.specificOption}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      <option value="livingroom">Living Room</option>
                      <option value="bedroom">Bed Room</option>
                      <option value="Storeroom">Store Room</option>
                      <option value="suppershop">Supper Shop</option>
                      <option value="office">Office Reception</option>
                      <option value="corporate">Corporate Office</option>
                      <option value="kitchencommercial">
                        Kitchen Commercial
                      </option>
                      <option value="kitchenresidences">
                        Kitchen Residences{" "}
                      </option>
                    </select>
                  </div>
                )}

                {[
                  "livingroom",
                  "bedroom",
                  "kitchenresidences",
                  "kitchencommercial",
                  "corporate",
                  "office",
                  "suppershop",
                  "Storeroom",
                ].includes(formData.specificOption) && (
                  <div className="w-full mt-8">
                    <label className="font-medium text-xs">
                      Select Width and Height
                    </label>
                    <select
                      name="specificOptionTwo"
                      className="w-full border-b border-gray-400 mt-2 py-2 outline-none placeholder-gray-600 focus:border-[#60D66A] text-sm font-medium"
                      value={formData.specificOptionTwo}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      <option value="20/12fit">20/12 ft</option>
                      <option value="25/15fit">25/15 ft</option>
                      <option value="35/18fit">35/18 ft</option>
                      <option value="40/20fit">40/20 ft</option>
                      <option value="50/25fit">50/25 ft</option>
                    </select>
                  </div>
                )}

                {formData.subject === "construction" && (
                  <div className="w-full mt-8">
                    <label className="font-medium text-xs">
                      Select Project Type
                    </label>
                    <select
                      name="specificOption"
                      className="w-full border-b border-gray-400 mt-2 py-2 outline-none placeholder-gray-600 focus:border-[#60D66A] text-sm font-medium"
                      value={formData.specificOption}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Select Your House
                      </option>
                      <option value="village">village House</option>
                      <option value="simplex">Simplex house</option>
                      <option value="duplex">Duplex House</option>
                      <option value="multi">Multi Storied House</option>
                      <option value="resort">Resort</option>
                      <option value="hotel">Hotel House</option>
                      <option value="bulding">Bulding Ranovation</option>
                      <option value="boundary">Boundary Renovation</option>
                    </select>
                  </div>
                )}

                {[
                  "simplex",
                  "village",
                  "duplex",
                  "boundary",
                  "bulding",
                  "hotel",
                  "resort",
                ].includes(formData.specificOption) && (
                  <div className="w-full mt-8">
                    <label className="font-medium text-xs">
                      Select House Lenght
                    </label>
                    <select
                      name="specificOptionTwo"
                      className="w-full border-b border-gray-400 mt-2 py-2 outline-none placeholder-gray-600 focus:border-[#60D66A] text-sm font-medium"
                      value={formData.specificOptionTwo}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      <option value="400fit">400 Sq Fit</option>
                      <option value="300fit">300 Sq Fit</option>
                      <option value="600fit">600 Sq Fit</option>
                      <option value="800fit">800 Sq Fit</option>
                      <option value="1000fit">1000 Sq Fit</option>
                    </select>
                  </div>
                )}

                <div className="w-full mt-8">
                  <label className="font-medium text-xs">Message</label>
                  <textarea
                    name="message"
                    placeholder="Type your message"
                    className="w-full border-b border-gray-400 mt-2 py-2 outline-none placeholder-gray-600 focus:border-[#60D66A] focus:placeholder-transparent text-sm font-medium"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs">{errors.message}</p>
                  )}
                </div>
                <div className="flex items-center mt-4">
                  <input
                    type="checkbox"
                    name="agreeToPolicy"
                    checked={formData.agreeToPolicy}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label className="text-sm">
                    I agree to the{" "}
                    <Link  href="/privacy-policy" className="text-red-600 underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                {errors.agreeToPolicy && (
                  <p className="text-red-500 text-xs">{errors.agreeToPolicy}</p>
                )}
              </div>

              <div className="flex   p-4">
                <button
                  type="submit"
                  className="bg-green-500 text-white py-1 px-3 rounded"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </div>
              {successMessage && (
                <p className="text-green-500 text-center mt-4">
                  {successMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Cotesion;
