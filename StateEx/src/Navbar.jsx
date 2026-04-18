import React, { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  User,
  GraduationCap,
  FileText,
  BookOpen,
  Home,
  Camera,
  Briefcase,
  Users,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
} from "lucide-react";
import SearchBar from "../Searchbar/searchbar";
import SearchableWrapper from "../Searchbar/SearchableWrapper";

// Navigation configuration data
const NAVIGATION_CONFIG = [
  {
    key: "about",
    label: "About Us",
    icon: User,
    baseRoute: "/about-us",
    items: [
      { slug: "About Gbu", label: "About GBU" },
      { slug: "chancellor-message", label: "Chancellor Message" },
      { slug: "vice-chancellor-message", label: "Vice Chancellor Message" },
      { slug: "governance-committees", label: "Governance Committees" },
      { slug: "policies-statutes-rti", label: "Policies Statutes RTI" },
      { slug: "mandatory-disclosures", label: "Mandatory Disclosures" },
    ],
  },
  {
    key: "academics",
    label: "Academics",
    icon: GraduationCap,
    baseRoute: "/academics",
    items: [
      { slug: "schools", label: "Schools & Departments" },
      { slug: "faculty", label: "Faculty Directory" },
      { slug: "academic-calendar", label: "Academic Calendar & Regulations" },
      { slug: "cbcs-framework", label: "CBCS Curriculum Framework" },
      { slug: "centers-of-excellence", label: "Centers of Excellence" },
      { slug: "international-collaboration", label: "International Collaboration" },
      { slug: "reports-publications", label: "Reports & Publications" },
    ],
  },
  {
    key: "admissions",
    label: "Admissions",
    icon: FileText,
    baseRoute: "/admissions",
    items: [
      { slug: "admission-process", label: "Admission Process" },
      { slug: "courses-offered", label: "Courses Offered (UG | PG | PhD)" },
      { slug: "eligibility-reservation", label: "Eligibility & Reservation" },
      { slug: "fee-structure-prospectus", label: "Fee Structure & Prospectus" },
      { slug: "international-admissions", label: "International Admissions" },
    ],
  },
  {
    key: "research",
    label: "Research",
    icon: BookOpen,
    baseRoute: "/research",
    items: [
      { slug: "research-centers", label: "Center of Excellence and Labs" },
      { slug: "publications-patents", label: "Publications, Patents and Projects" },
      { slug: "incubation", label: "GBU Incubation Cell" },
      { slug: "institution-innovation", label: "Institution and Innovation" },
      { slug: "ipr-cell", label: "IPR Cell" },
    ],
  },
  {
    key: "campus",
    label: "Campus Life",
    icon: Home,
    baseRoute: "/campus-life",
    items: [
      { slug: "hero", label: "Overview" },
      { slug: "hostel-detailed", label: "Hostels" },
      { slug: "sports-fitness", label: "Sports" },
      { slug: "clubs-societies", label: "Clubs and Societies" },
      { slug: "meditation-center", label: "Meditation Centre" },
      {
        slug: "NSS",
        label: "National Service Scheme (NSS)",
      },
      {
        slug: "NCC",
        label: "National Cadet Corps (NCC)",
      },
    ],
  },
  {
    key: "announcements",
    label: "Announcements",
    icon: Camera,
    baseRoute: "/announcements",
    items: [
      { slug: "news-notifications", label: "News & Updates" },
      { slug: "event-calendar", label: "Upcoming Events" },
      { slug: "notices", label: "Notices & Circular" },
      { slug: "media-gallery", label: "Media Gallery" },
      { slug: "newsletter", label: "Newsletter" },
    ],
  },
  {
    key: "placements",
    label: "Placements",
    icon: Briefcase,
    directPath: "/placements",
  },
  {
    key: "alumni",
    label: "Alumni",
    icon: Users,
    baseRoute: "/alumni",
    items: [
      { slug: "alumni-network", label: "Alumni Network" },
      { slug: "alumni-events", label: "Alumni Events" },
      { slug: "become-mentor", label: "Become a Mentor" },
      { slug: "success-stories", label: "Success Stories" },
    ],
  },
];

// Custom hooks for navbar functionality
const useScrollDetection = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isScrolled;
};

const useDropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRefs = useRef(new Map());

  const toggleMenu = (menuKey) => {
    setActiveMenu(prev => prev === menuKey ? null : menuKey);
  };

  const closeMenu = () => setActiveMenu(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isInsideMenu = Array.from(menuRefs.current.values())
        .some(ref => ref?.contains(event.target));

      if (!isInsideMenu) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return {
    activeMenu,
    toggleMenu,
    closeMenu,
    menuRefs,
  };
};

const useMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSubmenus, setExpandedSubmenus] = useState(new Set());

  const toggle = () => setIsOpen(prev => !prev);
  const close = () => setIsOpen(false);

  const toggleSubmenu = (menuKey) => {
    setExpandedSubmenus(prev => {
      const newSet = new Set(prev);
      if (newSet.has(menuKey)) {
        newSet.delete(menuKey);
      } else {
        newSet.add(menuKey);
      }
      return newSet;
    });
  };

  return {
    isOpen,
    toggle,
    close,
    expandedSubmenus,
    toggleSubmenu,
  };
};

// UI Components
const MenuIcon = ({ icon: Icon, size = 16 }) => <Icon size={size} />;

const DropdownMenuItem = ({ item, baseRoute, onClick }) => {
  const linkProps = item.isExternal
    ? { href: item.slug, target: "_blank", rel: "noopener noreferrer" }
    : { to: `${baseRoute}/${item.slug}` };

  const LinkComponent = item.isExternal ? 'a' : Link;

  return (
    <LinkComponent
      {...linkProps}
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
      onClick={onClick}
    >
      {item.label}
    </LinkComponent>
  );
};

const DropdownMenu = ({ items, baseRoute, onItemClick }) => (
  <div className="absolute left-0 top-full mt-1 w-64 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100">
    {items.map((item, index) => (
      <DropdownMenuItem
        key={`${item.slug}-${index}`}
        item={item}
        baseRoute={baseRoute}
        onClick={onItemClick}
      />
    ))}
  </div>
);

const DesktopMenuItem = ({ menu, isActive, onToggle, menuRef, onMenuClose }) => {
  if (menu.directPath) {
    return (
      <li>
        <Link
          to={menu.directPath}
          className="flex items-center gap-1 hover:text-blue-600 text-gray-700 px-3 py-2 text-sm font-medium transition-colors"
        >
          <MenuIcon icon={menu.icon} />
          {menu.label}
        </Link>
      </li>
    );
  }

  return (
    <li className="relative" ref={menuRef} aria-haspopup="true">
      <button
        onClick={() => onToggle(menu.key)}
        className="flex items-center gap-1 hover:text-blue-600 text-gray-700 px-3 py-2 text-sm font-medium transition-colors"
        aria-expanded={isActive}
      >
        <MenuIcon icon={menu.icon} />
        {menu.label}
        {isActive ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>

      {isActive && (
        <DropdownMenu
          items={menu.items}
          baseRoute={menu.baseRoute}
          onItemClick={onMenuClose}
        />
      )}
    </li>
  );
};

const MobileMenuItem = ({ menu, isExpanded, onToggle, onSubmenuToggle }) => {
  if (menu.directPath) {
    return (
      <Link
        to={menu.directPath}
        className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 transition-colors"
        onClick={onToggle}
      >
        <span className="flex items-center gap-2">
          <MenuIcon icon={menu.icon} />
          {menu.label}
        </span>
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => onSubmenuToggle(menu.key)}
        className="w-full flex items-center justify-between px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 transition-colors"
      >
        <span className="flex items-center gap-2">
          <MenuIcon icon={menu.icon} />
          {menu.label}
        </span>
        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {isExpanded && (
        <div className="bg-gray-50">
          {menu.items.map((item, index) => (
            <DropdownMenuItem
              key={`mobile-${item.slug}-${index}`}
              item={item}
              baseRoute={menu.baseRoute}
              onClick={onToggle}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Main Navbar Component
const Navbar = () => {
  const isScrolled = useScrollDetection();
  const { activeMenu, toggleMenu, closeMenu, menuRefs } = useDropdownMenu();
  const { isOpen: isMobileOpen, toggle: toggleMobile, close: closeMobile, expandedSubmenus, toggleSubmenu } = useMobileMenu();

  // Memoize navigation items to prevent unnecessary re-renders
  const navigationItems = useMemo(() => NAVIGATION_CONFIG, []);

  const setMenuRef = (menuKey, ref) => {
    if (ref) {
      menuRefs.current.set(menuKey, ref);
    } else {
      menuRefs.current.delete(menuKey);
    }
  };

  return (
    <SearchableWrapper>
      <nav
        className={`fixed top-9 left-0 w-full z-40 bg-white transition-all duration-300 ${isScrolled ? "shadow-md" : "shadow"
          }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="px-4 md:px-">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center" aria-label="GBU Home">
              <img
                src="/assets/logo.svg"
                alt="GBU Logo"
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center">
              <ul className="flex items-center space-x-1">
                {navigationItems.map((menu) => (
                  <DesktopMenuItem
                    key={menu.key}
                    menu={menu}
                    isActive={activeMenu === menu.key}
                    onToggle={toggleMenu}
                    menuRef={(ref) => setMenuRef(menu.key, ref)}
                    onMenuClose={closeMenu}
                  />
                ))}
              </ul>
              {/* Desktop SearchBar */}
              <SearchBar />
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobile}
              className="xl:hidden p-2 text-gray-700 transition-colors"
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileOpen && (
            <div className="xl:hidden border-t border-gray-200">
              <div className="py-2">
                {navigationItems.map((menu) => (
                  <MobileMenuItem
                    key={menu.key}
                    menu={menu}
                    isExpanded={expandedSubmenus.has(menu.key)}
                    onToggle={closeMobile}
                    onSubmenuToggle={toggleSubmenu}
                  />
                ))}
                {/* Mobile SearchBar */}
                <SearchBar isMobile />
              </div>
            </div>
          )}
        </div>
      </nav>
    </SearchableWrapper>
  );
};

export default Navbar;