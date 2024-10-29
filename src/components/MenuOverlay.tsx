import React from "react";
import NavLink from "./NavLink";


interface LinkItem {
  path: string; 
  title: string; 
}

// Define the props type for MenuOverlay
interface MenuOverlayProps {
  links: LinkItem[];
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links }) => {
  return (
    <ul className="menu-overlay">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
