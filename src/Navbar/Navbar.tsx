import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";
import { navLinks } from "./navData";
import type { NavLinkType } from "./navData";
import { Link } from "react-router-dom";
import Logo from "../assets/dideco-logo.png";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Track scroll position to change navbar appearance
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Top bar with contact info and social links */}
      <div
        className={cn(
          "bg-darkish text-zinc-200 py-2 px-4",
          isScrolled && "hidden"
        )}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center text-sm">
              <Phone className="h-3.5 w-3.5 mr-2" />
              <span>1800-123-4567</span>
            </div>
            <div className="hidden sm:flex items-center text-sm">
              <Mail className="h-3.5 w-3.5 mr-2" />
              <span> info@dideconorthamerica.org</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Button
              size="icon"
              variant="ghost"
              className="h-8 w-8 text-zinc-200 hover:text-white bg-zinc-700"
            >
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
                className="h-4 w-4"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="h-8 w-8 text-zinc-200 hover:text-white bg-zinc-700"
            >
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
                className="h-4 w-4"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <motion.nav
        className={cn(
          "py-4 transition-all duration-300",
          isScrolled
            ? "bg-darkish/95 backdrop-blur-md shadow-md py-3 text-white"
            : "bg-white text-darkish"
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="relative h-16 w-20 overflow-hidden rounded-md bg-orange-400">
              <img src={Logo} />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="flex items-center justify-between flex-row">
            <div className="hidden lg:flex items-center ">
              {navLinks.map((link: NavLinkType) => (
                <NavLink
                  isScrolled={isScrolled}
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  hasDropdown={link.hasDropdown}
                />
              ))}
              <button
                className={cn(
                  "ml-2 px-5 py-2 text-xl backdrop-blur-md border  border-greenish/40 text-white mx-auto text-center rounded-full relative  hover:scale-110 transition flex items-center justify-center",

                  isScrolled ? "bg-greenish/70" : "bg-greenish"
                )}
              >
                <span>Donate Now</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
};

export default Navbar;
