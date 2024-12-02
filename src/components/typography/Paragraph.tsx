import { cn } from "@/lib/utilis";
import { ReactNode } from "react";
const Paragraph = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <p
      className={cn(
        "text-sm sm:text-base md:text-base lg:text-lg xl:text-xl leading-relaxed sm:leading-loose md:leading-loose lg:leading-relaxed xl:leading-snug font-normal",
        className
      )}
    >
      {children}
    </p>
  );
};
export default Paragraph;
