import { FC } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

interface NavLinkProps {
  href: string;
  label: string;
  isScrolled: boolean;
  className?: string;
  hasDropdown?: boolean;
  onClick?: () => void;
}

const NavLink: FC<NavLinkProps> = ({ 
  href, 
  label, 
  className,
  isScrolled ,
  hasDropdown = false,
  onClick
}) => {
  const {pathname} = useLocation();
  console.log(pathname);
  const isActive = pathname === href;

  return (
    <Link
      to={href}
      className={cn(
        "relative px-3 py-1 text-sm font-semibold transition-colors duration-300",
        isActive ? "text-darkish" : "text-darkish/70",
        hasDropdown && "flex items-center gap-1",
        isScrolled && " text-white/70 hover:text-white" ,
        isScrolled &&  isActive && " text-white" ,
        className
      )}
      onClick={onClick}
    >
      {label}
      {hasDropdown && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-1 h-3 w-3"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      )}
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 w-full bg-primary"
          layoutId="navbar-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </Link>
  );
};

export default NavLink;