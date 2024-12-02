import { cn } from "@/lib/utilis";
import { ReactNode } from "react";
const SubHeading = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <h2
      className={cn(
        "text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-snug",
        className
      )}
    >
      {children}
    </h2>
  );
};
export default SubHeading;
