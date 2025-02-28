export interface NavLinkType {
  href: string;
  label: string;
  hasDropdown?: boolean;
}

export const navLinks: NavLinkType[] = [
  {
    href: "/",
    label: "HOME",
  },
  {
    href: "/about",
    label: "ABOUT US",
    hasDropdown: true,
    // dropdown : {}
  },
  {
    href: "/services",
    label: "SERVICES",
    hasDropdown: true,
  },
  {
    href: "/community",
    label: "OUR COMMUNITY",
    hasDropdown: true,
  },
  {
    href: "/heritage",
    label: "OUR HERITAGE",
    hasDropdown: true,
  },
  {
    href: "/gallery",
    label: "GALLERY",
    hasDropdown: true,
  },
  {
    href: "/outreach",
    label: "OUTREACH",
    hasDropdown: true,
  },
  {
    href: "/contact",
    label: "CONTACT US",
  },
];