import { FC, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { getDropdownItems } from "./navData";
import { Link, useLocation } from "react-router-dom";

interface NavLinkProps {
  href: string;
  label: string;
  className?: string;
  hasDropdown?: boolean;
  isScrolled?: boolean;
  onClick?: () => void;
}

const NavLink: FC<NavLinkProps> = ({
  href,
  label,
  className,
  isScrolled,
  hasDropdown = false,
  onClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);
  const dropdownItems = hasDropdown ? getDropdownItems(href) : [];

  console.log(isOpen);

  // If this link has a dropdown, render it with NavigationMenu
  if (hasDropdown) {
    return (
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn(
                "px-3 py-2 text-sm font-medium transition-colors duration-300 text-darkish hover:text-darkish/60",
                isActive ? "text-darkish" : "text-darkish/70",
                isScrolled && " text-white/70 hover:text-white",
                isScrolled && isActive && " text-white",
                className
              )}
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <Link to={href}>
                {label}
                {isActive && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 w-full"
                    layoutId="navbar-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent
              className="bg-card p-2 rounded-md shadow-md border border-border "
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <ul className="grid w-[200px] gap-1 p-2">

                {dropdownItems.map((item, index) => (
                  <li key={index}>
                    <NavigationMenuLink asChild>
                      <Link
                        to={item.href}
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground ",
                          pathname === item.href
                            ? "bg-accent text-accent-foreground"
                            : "text-muted-foreground"
                        )}
                        onClick={onClick}
                      >
                        <div className="text-sm font-medium">{item.label}</div>
                        {item.description && (
                          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                            {item.description}
                          </p>
                        )}
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
  }

  return (
    <Link
      to={href}
      className={cn(
        "relative px-3  text-sm font-semibold transition-colors duration-300 hover:bg-darkish/50 py-2 rounded-lg hover:text-white",
        isActive ? "text-darkish" : "text-darkish/70",
        hasDropdown && "flex items-center gap-1",
        isScrolled && " text-white/70 hover:text-white",
        isScrolled && isActive && " text-white",
        className
      )}
      onClick={onClick}
    >
      {label}
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
