import { cn } from "@/lib/utilis";
import { ReactNode } from "react";
const Heading = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <h1
      className={cn(
        "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl  font-bold",
        className
      )}
    >
      {children}
    </h1>
  );
};
export default Heading;
