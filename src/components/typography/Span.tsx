import { cn } from "@/lib/utilis";
import { ReactNode } from "react";
const Span = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <span
      className={cn(
        "text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-medium",
        className
      )}
    >
      {children}
    </span>
  );
};
export default Span;
