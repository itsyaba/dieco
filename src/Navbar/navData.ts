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
  },
  {
    href: "/community",
    label: "COMMUNITY",
    hasDropdown: true,
  },
  {
    href: "/projects",
    label: "PROJECTS",
    hasDropdown: true,
  },
  // {
  //   href: "/heritage",
  //   label: "OUR HERITAGE",
  //   hasDropdown: true,
  // },

  {
    href: "/outreach",
    label: "OUTREACH",
    hasDropdown: true,
  },  {
    href: "/donation",
    label: "SPONSORSHIP",
    hasDropdown: true,
  },
  {
    href: "/contact",
    label: "CONTACT US",
  },
];