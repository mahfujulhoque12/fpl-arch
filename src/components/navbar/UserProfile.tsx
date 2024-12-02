"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const UserProfile: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false); 
  const handleMoreDetails = async () => {
    setLoading(true); 
    await new Promise((resolve) => setTimeout(resolve, 500)); 
    router.push('/cotesion');
    setLoading(false); 
  };

  return (
    <div>
      <button 
        type="button" 
        className="sign border-none inline-flex items-center cursor-pointer font-medium text-[14px] text-white bg-[#cf4045] hover:bg-[#c13136] min-w-[64px] px-4 py-2 rounded-md ml-4"
        onClick={handleMoreDetails} 
        disabled={loading} 
      >
        {loading ? (
          <div className="flex items-center">
            <span className="loader mr-2" />
            Loading...
          </div>
        ) : (
          "Get Quotation"
        )}
      </button>
    </div>
  );
};

export default UserProfile;
