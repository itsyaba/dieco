export interface NavLink {
  href: string;
  label: string;
  hasDropdown?: boolean;
}

export interface DropdownItem {
  href: string;
  label: string;
  description?: string;
  children?: DropdownItem[];
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
    hasDropdown: true,
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
  // {
  //   href: "/heritage",
  //   label: "OUR HERITAGE",
  //   hasDropdown: true,
  // },
  {
    href: "/gallery",
    label: "GALLERY",
    hasDropdown: true,
  },
  {
    href: "/projects",
    label: "PROJECTS",
    // hasDropdown: true,
  },
  {
    href: "/outreach",
    label: "OUTREACH",
  },
  {
    href: "/donate",
    label: "DONATE",
  },
  {
    href: "/contact",
    label: "CONTACT US",
  },
];

// Dropdown items for each navigation link
const dropdownItems: Record<string, DropdownItem[]> = {
  "/": [
    {
      href: "/heritage",
      label: "Heritage",
      description: "Explore the rich heritage of the Dikome Balue community.",
      children: [
        {
          href: "/heritage/village",
          label: "Our Village",
          description:
            "We have a rich history, vibrant culture, and enduring spirit of the Dikome Balue people.",
        },
        {
          href: "/heritage/cultural",
          label: "Cultural Heritage",
          description: "Historical artifacts and preservation",
        },
        // {
        //   href: "/heritage/traditional",
        //   label: "Traditional Dishes",
        //   description:
        //     "Our dishes are a flavorful reflection of our cultural heritage and culinary traditions.",
        // },
        {
          href: "/heritage/Makoros",
          label: "Makoros",
          description:
            "A traditional of the Dikome Balue community, embodying the spirit of camaraderie, athleticism, and cultural pride.",
        },
      ],
    },
    {
      href: "/about",
      label: "Nganos Ya Mboka",
      description: "Learn about the governance and leadership of the Dikome Balue community.",
      children: [
        {
          href: "/about#history",
          label: "History",
          description: "The historical evolution of Nganos Ya Mboka.",
        },
        {
          href: "/about#branches",
          label: "Diedeco Branches",
          description: "The various branches of the Diedeco system.",
        },
        {
          href: "/about#team",
          label: "Chiefs",
          description: "The traditional chiefs and their roles in the community.",
        },
      ],
    },
  ],

  "/about": [
    {
      href: "/about#mission",
      label: "Our Mission",
      description: "Learn about our mission and values",
    },
    { href: "/about#team", label: "Our Team", description: "Meet our dedicated team members" },
    {
      href: "/about#history",
      label: "Our History",
      description: "Discover our journey through the years",
    },
    // { href: "/about/#partners", label: "Our Partners", description: "Organizations we work with" },
  ],
  "/community": [
    {
      href: "/community/education",
      label: "Education",
      description:
        "Education is the corner stone of empowerment and progress within the Dikome Balue community.",
    },
    {
      href: "/community/healthcare",
      label: "Healthcare",
      description:
        "Access to quality health care is essential for the well-being of the Dikome Balue community.",
    },
    {
      href: "/community/religion",
      label: "Religion",
      description:
        "Education is the corner stone of empowerment and progress within the Dikome Balue community.",
    },
    { href: "/donate", label: "Donate", description: "Support our community initiatives" },
  ],
  "/gallery": [
    {
      href: "/gallery",
      label: "AGM",
      description:
        "AGM  is a significant event in the calendar of DIDECO, bringing together members, stakeholders, and community leaders",
    },
    {
      href: "/gallery",
      label: "Dibunu",
      description: "Dibunu gallery captures the essence and energy of this cultural festival.",
    },
    {
      href: "/events",
      label: "Events",
      description: "Here are some of the images from our events.",
    },
  ],
  "/projects": [
    {
      href: "/projects#water-project",
      label: "Photo Gallery",
      description: "Images from our events and projects",
    },
    {
      href: "/projects#hospital",
      label: "Video Gallery",
      description: "Videos showcasing our work",
    },
    // { href: "/gallery/press", label: "Press Coverage", description: "Media coverage of our organization" },
  ],
  "/outreach": [
    { href: "/outreach/programs", label: "Programs", description: "Our outreach programs" },
    {
      href: "/outreach/international",
      label: "International",
      description: "Our global initiatives",
    },
    {
      href: "/outreach/partnerships",
      label: "Partnerships",
      description: "Collaborative outreach efforts",
    },
    { href: "/outreach/impact", label: "Impact", description: "The impact of our outreach work" },
  ],
};

// Function to get dropdown items for a specific navigation link
export const getDropdownItems = (href: string): DropdownItem[] => {
  return dropdownItems[href] || [];
};
