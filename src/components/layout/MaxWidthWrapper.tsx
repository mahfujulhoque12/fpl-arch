import { cn } from "@/lib/utilis";
import { ReactNode } from "react";
const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-screen-2xl px-3 md:px-8 lg:px-12 xl:px-16 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};
export default MaxWidthWrapper;
