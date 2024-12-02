import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { X } from "lucide-react";
import MegaMenu from "@/components/navbar/MegaMenu";
import { cn } from "@/lib/utils";
import mobileLogo from "/public/fbl-logo.png";
import Image from "next/image";
import Link from "next/link";

// Define types for the props
interface MobileNavigationDrawerProps {
  isDrawerOpen: boolean;
  setIsDrawerOpen: (isOpen: boolean) => void;
  drawerButtonRef: React.RefObject<HTMLButtonElement>;
  mobileMenuPos: string;
}

const MobileNavigationDrawer: React.FC<MobileNavigationDrawerProps> = ({
  isDrawerOpen,
  setIsDrawerOpen,
  drawerButtonRef,
  mobileMenuPos,
}) => {
  const [clicked, setClicked] = useState<number | null>(null); // clicked state is either a number or null
  const drawerRef = useRef<HTMLDivElement>(null); // ref is for a div element

  useEffect(() => {
    if (isDrawerOpen && drawerRef.current) {
      // Focus the drawer when it opens
      drawerRef.current.focus();
    }
  }, [isDrawerOpen]);

  const handleToggle = (index: number) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      setIsDrawerOpen(false);
      // Focus the drawer button when it closes
      if (drawerButtonRef.current) {
        drawerButtonRef.current.focus();
      }
    }
  };

  return (
    <div
      className="mobile_navigation"
      ref={drawerRef}
      tabIndex={isDrawerOpen ? 0 : -1}
      onKeyDown={handleKeyDown}
    >
      {isDrawerOpen && (
        <div
          className="backdrop"
          onClick={() => {
            setIsDrawerOpen(false);
            // Focus the drawer button when it closes
            if (drawerButtonRef.current) {
              drawerButtonRef.current.focus();
            }
          }}
        ></div>
      )}

      <div
        className={cn(
          "drawer_content bg-white fixed w-full top-0 h-screen z-[99] overflow-y-auto  transition-transform duration-500 select-none",
          isDrawerOpen ? "active" : "",
          mobileMenuPos == "left" && "left-0 -translate-x-full",
          mobileMenuPos == "right" && "right-0 translate-x-full",
          mobileMenuPos == "top" && "left-0 -translate-y-full",
          mobileMenuPos == "bottom" && "left-0 bottom-0 translate-y-full"
        )}
      >
        <div
          className={cn(
            "close_drawer",
            mobileMenuPos === "left" && "text-end",
            mobileMenuPos === "right" && "text-start"
          )}
        >

          <div  className="flex justify-between">
            <div className="p-2">
              <Link href="/"  onClick={() => {
              setIsDrawerOpen(false);
              // Focus the drawer button when it closes
              if (drawerButtonRef.current) {
                drawerButtonRef.current.focus();
              }
            }} >
              <Image src={mobileLogo} alt="logo" width={50} height={50} className="  h-auto object-cover" />
              </Link>          
            </div>

            <button
            onClick={() => {
              setIsDrawerOpen(false);
              // Focus the drawer button when it closes
              if (drawerButtonRef.current) {
                drawerButtonRef.current.focus();
              }
            }}
           
          >
          
          
          
            <X size={30} />
          </button>
          </div>

        
        </div>
        <div>
          <MegaMenu
            handleToggle={handleToggle}
            clicked={clicked as number} // clicked will always be a number or null, cast to number
            setIsDrawerOpen={setIsDrawerOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileNavigationDrawer;
