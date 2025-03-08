import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, Mail, Linkedin, Facebook } from "lucide-react";
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
    <header className="fixed top-0 left-0 right-0 z-[999] w-full">
      {/* Top bar with contact info and social links */}
      <div className={cn("bg-darkish text-zinc-200 py-2 px-4", isScrolled && "hidden")}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="hidden sm:flex items-center text-sm">
              <Mail className="h-3.5 w-3.5 mr-2" />
              <span> DIDECONORTHAMERICA@GMAIL.COM</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Button
              size="icon"
              variant="ghost"
              className="h-8 w-8 text-zinc-200 hover:text-white bg-zinc-700"
            >
              <Facebook className="h-3 w-3" color="blue" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="h-8 w-8 text-zinc-200 hover:text-white bg-zinc-700"
            >
              <Linkedin className="w-3 h-3" color="blue" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <motion.nav
        className={cn(
          "py-4 transition-all duration-300",
          isScrolled
            ? "bg-greenish/80 backdrop-blur-md shadow-md py-3 text-white"
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
              <Link to="/donate">
                <button
                  className={cn(
                    "ml-2 px-5 py-2 text-xl backdrop-blur-3xl border  border-greenish/40 text-white mx-auto text-center rounded-full relative  hover:scale-110 transition flex items-center justify-center bg-orange-500/90"

                    // isScrolled ? "bg-greenish/70" : "bg-greenish"
                  )}
                >
                  <span>Donate Now</span>
                </button>
              </Link>
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
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
};

export default Navbar;
