export interface NavLink {
  href: string;
  label: string;
  hasDropdown?: boolean;
}

export interface DropdownItem {
  href: string;
  label: string;
  description?: string;
}

export interface NavLinkType {
  href: string;
  label: string;
  hasDropdown?: boolean;
}

export const navLinks: NavLink[] = [
  {
    href: "/",
    label: "HOME",
  },
  {
    href: "/about",
    label: "ABOUT US",
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

// Dropdown items for each navigation link
const dropdownItems: Record<string, DropdownItem[]> = {
  "/about": [
    { href: "/about/#mission", label: "Our Mission", description: "Learn about our mission and values" },
    { href: "/about/#team", label: "Our Team", description: "Meet our dedicated team members" },
    { href: "/about/#history", label: "Our History", description: "Discover our journey through the years" },
    // { href: "/about/#partners", label: "Our Partners", description: "Organizations we work with" },
  ],
  "/community": [
    { href: "/community/education", label: "Education", description: "Education is the corner stone of empowerment and progress within the Dikome Balue community." },
    { href: "/community/healthcare", label: "Healthcare", description: "Access to quality health care is essential for the well-being of the Dikome Balue community." },
    { href: "/community/religion", label: "Religion", description: "Education is the corner stone of empowerment and progress within the Dikome Balue community." },
    { href: "/donate", label: "Donate", description: "Support our community initiatives" },
  ],
  "/heritage": [
    { href: "/heritage/culture", label: "Cultural Heritage", description: "Preserving cultural traditions" },
    { href: "/heritage/artifacts", label: "Artifacts", description: "Historical artifacts and preservation" },
    { href: "/heritage/language", label: "Language", description: "Language preservation efforts" },
    { href: "/heritage/traditions", label: "Traditions", description: "Traditional practices and customs" },
  ],
  "/gallery": [
    { href: "/gallery/photos", label: "Photo Gallery", description: "Images from our events and projects" },
    { href: "/gallery/videos", label: "Video Gallery", description: "Videos showcasing our work" },
    { href: "/gallery/press", label: "Press Coverage", description: "Media coverage of our organization" },
  ],
  "/outreach": [
    { href: "/outreach/programs", label: "Programs", description: "Our outreach programs" },
    { href: "/outreach/international", label: "International", description: "Our global initiatives" },
    { href: "/outreach/partnerships", label: "Partnerships", description: "Collaborative outreach efforts" },
    { href: "/outreach/impact", label: "Impact", description: "The impact of our outreach work" },
  ],
};

// Function to get dropdown items for a specific navigation link
export const getDropdownItems = (href: string): DropdownItem[] => {
  return dropdownItems[href] || [];
};