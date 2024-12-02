import React from "react";
import Link from "next/link";

// Define the types for the submenu items
interface SubmenuItem {
  label: string;
  href: string;
}

// Define the type for the content of each submenu
interface SubmenuContent {
  heading: string;
  submenu: SubmenuItem[];
}

// Define the props for the DropdownContent component
interface DropdownContentProps {
  submenuscontent: SubmenuContent[];
  setIsDrawerOpen?: (isOpen: boolean) => void; // Optional function to set drawer state
  handleClick: () => void; // Function to handle click events
}

const DropdownContent: React.FC<DropdownContentProps> = ({
  submenuscontent,
  setIsDrawerOpen,
  handleClick,
}) => {
  return (
    <div className="dropdown_content lg:grid lg:gap-5 md:grid-cols-3 text-sm">
      {submenuscontent.map((item, index) => (
        <React.Fragment key={index}>
          <section>
            <h4 className="font-bold leading-5 mt-3 lg:mt-0 lg:mb-3">
              {item.heading}
            </h4>
            <ul>
              {item.submenu.map(({ label, href }, index) => (
                <li
                  key={index}
                  onClick={() => {
                    if (setIsDrawerOpen) setIsDrawerOpen(false);
                    handleClick();
                  }}
                  className="leading-[1.85rem]"
                >
                  <Link href={href} className="text-inherit font-normal">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </React.Fragment>
      ))}
    </div>
  );
};

export default DropdownContent;
