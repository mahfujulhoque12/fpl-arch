import MenuItem from "@/components/navbar/MenuItem";

// Define the type for each submenu item
interface SubmenuItem {
  label: string;
  href: string;
}

// Define the type for each nested menu section
interface NestedMenu {
  heading: string;
  submenu: SubmenuItem[];
}

// Define the type for the main menu item
interface MenuDataItem {
  label: string;
  href: string;
  nestedMenu?: NestedMenu[]; // Optional because not all menu items have nested menus
}

// Correct menuData type to be an array of MenuDataItem

const menuData: MenuDataItem[] = [
  { label: "Home", href: "/" },
  {
  
    label: "Interiors Faculty",
    href: "/interiors-faculty",
    nestedMenu: [
      {
        heading: "Interiors",
        submenu: [
          {
            label: "Living Room",
            href: "/interiors-faculty",
          },
          { label: "Bed Room", href: "/interiors-faculty" },
        ],
      },
      {
        heading: "Interiors",
        submenu: [
          { label: "Kitchen Residences", href: "/interiors-faculty" },
          {
            label: "Kitchen Commercial",
            href: "/interiors-faculty",
          },
          {
            label: "Store Room",
            href: "/interiors-faculty",
          },
        
        ],
      },
      {
        heading: "Interiors",
        submenu: [
          {
            label: "Corporate Office",
            href: "/interiors-faculty",
          },
          { label: "Office Reception", href: "/interiors-faculty" },
          {
            label: "Supper Shop",
            href: "/interiors-faculty",
          },
        ],
      },
    ],
  },
  {
    label: "Construction Faculty",
    href: "/construction-faculty",
    nestedMenu: [
      {
        heading: "Construction",
        submenu: [
          { label: "Village House", href: "/construction-faculty" },
          {
            label: "Simplex House",
            href: "/construction-faculty",
          },
          { label: "Duplex House", href: "/construction-faculty" },
        ],
      },
      {
        heading: "Construction",
        submenu: [
          { label: "Multi Storied House", href: "/construction-faculty" },
          {
            label: "Resort",
            href: "/construction-faculty",
          },
          { label: "Hotel House", href: "/construction-faculty" },
        
        ],
      },
      {
        heading: "Construction",
        submenu: [
          { label: "Bulding Ranovation", href: "/construction-faculty" },
          { label: "Bulding Ranovation", href: "/construction-faculty" },
        ],
      },
    ],
  },
 
  { label: "Furniture-Faculty", href: "#" },


  { label: "FPL Updates", href: "/others-faculty" },

  { label: "Why FPL", href: "/why-fpl" },

  { label: "About Us", href: "/about-us" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact-us" },

];
// Define the props for the MegaMenu component
interface MegaMenuProps {
  handleToggle?: (index: number) => void; // Optional function to handle toggle
  clicked?: number; // Index of the currently clicked item
  setIsDrawerOpen?: (isOpen: boolean) => void; // Optional function to set drawer state
}

const MegaMenu: React.FC<MegaMenuProps> = ({
  handleToggle,
  clicked,
  setIsDrawerOpen,
}) => {
  return (
    <div className="nav__container">
      <nav>
        <ul className="lg:flex lg:items-center lg:leading-[50px]">
          {menuData.map(({ label, href, nestedMenu }, index) => {
            return (
              <MenuItem
                key={index}
                label={label}
                href={href}
                nestedMenu={nestedMenu}
                setIsDrawerOpen={setIsDrawerOpen}
                onToggle={() => handleToggle && handleToggle(index)}
                active={clicked === index}
              />
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default MegaMenu;
