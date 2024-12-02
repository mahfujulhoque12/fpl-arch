"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import Link from "next/link";
import plain from "/public/contact/contact3.png";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  agreeToPolicy: boolean;
}

const ContactFormInfo: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    agreeToPolicy: false,
  });

  const [errors, setErrors] = useState<{ [K in keyof FormData]?: string }>({});
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [loadin, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
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
            console.log("SUCCESS!");
            setSuccessMessage("Your message has been sent successfully!");
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              subject: "",
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
    <div>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="flex gap-4">
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
          <div className="w-full">
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

        <div className="flex gap-4 mt-8">
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
          <div className="w-full">
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

        <div className="w-full mt-8">
          <label className="font-medium text-xs">Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Write your Subject"
            className="w-full border-b border-gray-400 mt-2 py-2 outline-none placeholder-gray-600 focus:border-[#60D66A] focus:placeholder-transparent text-sm font-medium"
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && (
            <p className="text-red-500 text-xs">{errors.subject}</p>
          )}
        </div>

        <div className="w-full mt-8">
          <label className="font-medium text-xs">Message</label>
          <textarea
            name="message"
            placeholder="Write your Message"
            className="w-full border-b border-gray-400 pt-2 mt-2 outline-none placeholder-gray-600 focus:border-[#60D66A] focus:placeholder-transparent text-sm font-medium"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && (
            <p className="text-red-500 text-xs">{errors.message}</p>
          )}
        </div>

        <div className="mt-8 flex gap-3">
          <input
            type="checkbox"
            name="agreeToPolicy"
            checked={formData.agreeToPolicy}
            onChange={handleChange}
          />
          <label className="text-base font-normal">
            I agree to your{" "}
            <Link href="/privacy-policy" className="text-red-600 underline">
              privacy policy
            </Link>
          </label>
          {errors.agreeToPolicy && (
            <p className="text-red-500 text-xs">{errors.agreeToPolicy}</p>
          )}
        </div>
        {successMessage && (
          <p className="text-green-500 text-sm mt-5">{successMessage}</p>
        )}
        <div className="flex justify-end mt-10">
          <button
            type="submit"
            className="px-6 py-2 bg-gradient-to-t from-[#20B038] to-[#60D66A] rounded-md text-gray-100 shadow-sm text-base font-medium"
          >
            {loadin ? "Sending..." : "   Send Message"}
          </button>
        </div>

        <div className="flex justify-end">
          <Image
            src={plain}
            alt="img"
            width={100}
            height={100}
            className="me-16"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactFormInfo;
