"use client";
import { useState } from "react";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import SubHeading from "./typography/SubHeading";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { cardData } from "@/data/blogData";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { format } from "date-fns";

interface Card {
  id: number;
  imageUrl: string;
  date: string;
  title: string;
  des: string;
  clinetImg: string;
  name: string;
  slug: string;
}

const cardsPerPage = 6;

const getCurrentDate = (): string => {
  const date = new Date();
  return format(date, "dd MMMM yyyy");
};

const BlogContent = () => {
  const router = useRouter();

    const [loadingSlug, setLoadingSlug] = useState<string | null>(null); 
  const handleMoreDetails = async (slug: string) => {
    setLoadingSlug(slug)
    await new Promise((resolve)=>(setTimeout(resolve,500))) 
    router.push(`/blogs/${slug}`);
    setLoadingSlug(null)
  };

  const [currentPage, setCurrentPage] = useState<number>(1);

  // Calculate indices for the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards: Card[] = cardData.slice(
    indexOfFirstCard,
    indexOfLastCard
  );

  // Calculate total number of pages
  const totalPages = Math.ceil(cardData.length / cardsPerPage);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const createPaginationItems = () => {
    const items = [];
    const maxDisplayedPages = 3; // Total number of page numbers to show

    // Logic to determine which pages to show
    if (totalPages <= maxDisplayedPages) {
      for (let i = 1; i <= totalPages; i++) {
        items.push(
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={i === currentPage ? "font-bold" : ""}
          >
            {i}
          </button>
        );
      }
    } else {
      // Show first page
      items.push(
        <button key={1} onClick={() => setCurrentPage(1)}>
          1
        </button>
      );

      // Add the current page and surrounding pages
      const startPage = Math.max(currentPage - 1, 2); // Ensure we show at least page 2
      const endPage = Math.min(currentPage + 1, totalPages - 1); // Ensure we show at most the last page - 1

      for (let i = startPage; i <= endPage; i++) {
        items.push(
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={
              i === currentPage ? "font-bold bg-gray-200 px-4 rounded-md" : ""
            }
          >
            {i}
          </button>
        );
      }

      // Handle the ellipsis for next pages
      if (currentPage < totalPages - 1) {
        items.push(<span key="ellipsis-end">...</span>);
      }

      // Show last page
      items.push(
        <button key={totalPages} onClick={() => setCurrentPage(totalPages)}>
          {totalPages}
        </button>
      );
    }

    return items;
  };

  return (
    <section className="py-10 bg-[#FCFDFF]">
      <MaxWidthWrapper>
        <SubHeading className="text-gray-700 font-bold uppercase text-center">
          {" "}
          Our Stories{" "}
        </SubHeading>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {currentCards?.map((card) => (
            <div
              className="p-6 rounded-xl bg-[#ffffff] border drop-shadow-md"
              key={card.id}
            >
              <Image
                src={card.imageUrl}
                width={600}
                height={100}
                alt="image"
                className="w-full rounded-lg h-[400px] object-cover"
              />
              <div className="mt-5">
                <p className="font-normal text-xs text-[#656565]">
                  {card.date}
                </p>
                <h4 className="text-[#243045] font-semibold text-sm mt-3">
                  {card.title}
                </h4>
                <p className="mt-2 text-[#656565] text-xs font-normal">
                  {card.des}
                </p>
                <div className="mt-3 flex gap-2">
                  <Image
                    src={card.clinetImg}
                    width={16}
                    height={16}
                    alt="img"
                  />
                  <p className="font-normal text-xs text-[#243045]">
                    {card.name}
                  </p>
                  <p className="font-normal text-xs text-[#243045]">
                    .{getCurrentDate()}
                  </p>
                </div>
                <p className="mt-6 w-full h-[2px] bg-[#243045]"></p>
                <div className="mt-4 flex justify-between">
                  <div className="flex gap-2 text-[#243045]">
                    <Link href="">
                      <FaFacebook />
                    </Link>
                    <Link href="">
                      <FaLinkedin />
                    </Link>
                    <Link href="">
                      <LuInstagram />
                    </Link>
                  </div>
                  <button
                    className="border-b border-b-[#243045] text-xs font-semibold "
                    onClick={() => handleMoreDetails(card.slug)}
                    disabled={loadingSlug === card.slug}
                    >
                       {loadingSlug === card.slug ? ( 
                        <div className="flex items-center">
                          <span className="loader mr-2" />
                          Loading...
                        </div>
                      ) : ( 
                        "Read More"
                      )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-5 gap-4">
          <button
            type="button"
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`px-4 py-1 rounded-md text-sm font-semibold ${
              currentPage === 1
                ? "text-gray-400"
                : "text-[#cf4045] hover:bg-[#f1e4e5] transition-all duration-150"
            }`}
          >
            Previous
          </button>
          <div className="flex gap-2">{createPaginationItems()}</div>
          <button
            type="button"
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-1 rounded-md text-sm font-semibold ${
              currentPage === totalPages
                ? "text-gray-400"
                : "text-[#cf4045] hover:bg-[#f1e4e5] transition-all duration-150"
            }`}
          >
            Next
          </button>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default BlogContent;
