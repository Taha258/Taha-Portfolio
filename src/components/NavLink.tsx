import Link from "next/link";
import "@/allStyleFile/navLink.css"

// Define the props type for NavLink
interface NavLinkProps {
  href: string; 
  title: string; 
}

const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
  return (
    <Link href={href} className="nav-link">
      {title}
    </Link>
  );
};

export default NavLink;
