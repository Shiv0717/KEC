"use client";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  Home,
  Users,
  BookOpen,
  Briefcase,
  Newspaper,
  Beaker,
  GraduationCap,
  Image,
  Calendar,
  Award,
  ChevronDown,
  X,
  Menu,
  School,
  Building,
  Bookmark,
  Phone,
  MapPin,
  Library,
  Mic,
  BarChart3,
  Star,
  Trophy,
  UserPlus,
  FileText,
  Plug,
  Zap,
  Code,
  ClipboardList
} from "lucide-react";
// Register GSAP plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Green, Orange, Blue Color Scheme
const colors = {
  primary: "#1e40af",     // Royal Blue
  secondary: "#059669",   // Emerald Green
  tertiary: "#ea580c",    // Vibrant Orange
  accent: "#3b82f6",      // Bright Blue
  light: "#f0fdf4",       // Light Green background
  dark: "#1f2937",  
  highlight: "#facc15",      // Dark gray
   darkRed :"#b23b3c",
   neutral: "#0369a1",  
   danger: "#dc2626", 
   pink: "#7c3aed",  
  gradient: {
    primary: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
    secondary: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
    tertiary: "linear-gradient(135deg, #ea580c 0%, #f97316 100%)",
  }
};

// Affiliations data with color coding
const affiliations = [
  {
    img: "https://i0.wp.com/sjbit.edu.in/wp-content/uploads/2021/07/NAAC-Logo-250x250-1.png?ssl=1",
    label: "NAAC Accredited",
    color: "text-orange-500",
    bgColor: "#fed7aa",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/en/5/52/National_Institutional_Ranking_Framework_logo.png",
    label: "NIRF Ranked",
    color: "text-green-500",
    bgColor: "#bbf7d0",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx0MXjwnJVBVGn2aq6GwXvS7M4UV_EeksTlQ&s",
    label: "NBA Accredited",
    color: "text-blue-500",
    bgColor: "#bfdbfe",
  },
  {
    img: "https://static.wixstatic.com/media/9d31c9_8d868574531544b78f5dcf11679c32c5~mv2.png/v1/fill/w_509,h_491,al_c/9d31c9_8d868574531544b78f5dcf11679c32c5~mv2.png",
    label: "Approved by AICTE",
    color: "text-purple-500",
    bgColor: "#e9d5ff",
  },
];

// Main categories with color coding
const mainCategories = [
  {
    name: "Home",
    path: "/",
    icon: Home,
    description: "Welcome to Krishna Engineering College",
    color: colors.primary,
  },
  {
    name: "About",
    path: "/about",
    icon: Users,
    description: "Discover our history and leadership",
    color: colors.secondary,
    submenu: [
      {
        name: "About College",
        path: "/about",
        icon: Building,
        description: "Our journey and achievements",
        color: colors.secondary,
      },
      {
        name: "Principal's Message",
        path: "/principal",
        icon: Mic,
        description: "Words from our leadership",
        color: colors.secondary,
      },
      {
        name: "HOD",
        path: "/hod",
        icon: Users,
        description: "Heads of Departments",
        color: colors.secondary,
      },
      {
        name: "Mission & Vision",
        path: "/mission",
        icon: Award,
        description: "Our guiding principles",
        color: colors.secondary,
      },
      {
        name: "Governance",
        path: "/governance",
        icon: Library,
        description: "Management structure",
        color: colors.secondary,
      },
    ],
  },
  {
    name: "Academics",
    path: "/departments",
    icon: BookOpen,
    description: "Programs and departments",
    color: colors.tertiary,
    submenu: [
      {
        name: "Departments",
        path: "/departments",
        icon: BookOpen,
        description: "Explore our academic departments",
        color: colors.tertiary,
      },
      {
        name: "Courses",
        path: "/courses",
        icon: GraduationCap,
        description: "Programs we offer",
        color: colors.tertiary,
      },
      {
        name: "Faculty",
        path: "/faculty",
        icon: Users,
        description: "Meet our professors",
        color: colors.tertiary,
      },
      {
        name: "Research",
        path: "/research",
        icon: Beaker,
        description: "Innovation and projects",
        color: colors.tertiary,
      },
    ],
  },
  {
    name: "Admission",
    path: "/admission",
    icon: GraduationCap,
    description: "Join our institution",
    color: colors.primary,
    submenu: [
      {
        name: "Super 40",
        path: "/apply",
        icon: UserPlus,
        description: "Register for the Super 40 Entrance Exam 2026",
        color: colors.primary,
      },
      {
      name: "Process",
      path: "/admission#process",
      icon: BarChart3,
      description: "Step-by-step guide",
      color: colors.primary,
    },
      {
        name: "Requirements",
        path: "/admission#requirements",
        icon: Bookmark,
        description: "Eligibility criteria",
        color: colors.primary,
      },
      
     
      
      {
        name: "Scholarships",
        path: "/admission#scholarships",
        icon: Award,
        description: "Financial assistance",
        color: colors.primary,
      },
      {
        name: "Super 40 Examination",
        path: "/exam",
        icon: ClipboardList, // You can choose another icon if preferred
        description: "Details about the Super 40 Examination",
        color: colors.primary,
      },
      {
        name: "Results",
        path: "/super40-results",
        icon: FileText,
        description: "View Super 40 Exam Results",
        color: colors.primary,
      },
      
    ],
  },
  {
    name: "Campus",
    path: "/facilities",
    icon: Building,
    description: "Our facilities and infrastructure",
    color: colors.highlight,
    submenu: [
      {
        name: "Facilities",
        path: "/facilities",
        icon: Building,
        description: "Campus amenities",
        color: colors.highlight,
      },
      {
        name: "Infrastructure",
        path: "/infrastructure",
        icon: MapPin,
        description: "Our campus layout",
        color: colors.highlight,
      },
      {
        name: "Gallery",
        path: "/gallery",
        icon: Image,
        description: "Campus visuals",
        color: colors.highlight,
      },
    ],
  },
  {
    name: "Placements",
    path: "/placements",
    icon: Briefcase,
    description: "Career opportunities",
    color: colors.darkRed,
    submenu: [
      {
        name: "Placement Stats",
        path: "/placements#stats",
        icon: BarChart3,
        description: "Our success records",
        color: colors.darkRed,
      },
      {
        name: "Recruiters",
        path: "/placements#recruiters",
        icon: Briefcase,
        description: "Our industry partners",
        color: colors.darkRed,
      },
      {
        name: "Training",
        path: "/placements#training",
        icon: School,
        description: "Career preparation",
        color: colors.darkRed,
      },
    ],
  },
  {
    name: "News & Events",
    path: "#news-events", // anchor to the section
    icon: Calendar,
    description: "Latest updates and happenings at KEC",
    color: colors.pink,
    isScrollLink: true, // custom flag to handle scrolling
  },
  
  {
    name: "Courses",
    path: "/courses",
    icon: BookOpen,
    description: "Explore our specialized courses",
    color: colors.neutral,
    submenu: [
      {
        name: "Drone Technology",
        path: "/drone",
        icon: Zap,
        description: "Learn cutting-edge drone tech",
        color: colors.neutral,
      },
      {
        name: "EV Charging Station",
        path: "/ev",
        icon: Plug,
        description: "Electric Vehicle Charging Station setup",
        color: colors.neutral,
      },
      {
        name: "Advanced Coding",
        path: "/coding",
        icon: Code,
        description: "Master advanced programming concepts",
        color: colors.neutral,
      },
    ],
  },
  {
    name: "Connect",
    path: "#",
    icon: Bookmark,
    description: "More ways to engage",
    color: colors.danger,
    submenu: [
      {
        name: "Notices",
        path: "/notice",
        icon: Newspaper,
        description: "Latest announcements",
        color: colors.danger,
      },
      {
        name: "Events",
        path: "/event",
        icon: Calendar,
        description: "Upcoming activities",
        color: colors.danger,
      },
      {
        name: "Press",
        path: "/press",
        icon: Bookmark,
        description: "Media coverage",
        color: colors.danger,
      },
      {
        name: "Alumni",
        path: "/alumni",
        icon: School,
        description: "Our graduates network",
        color: colors.danger,
      },
      {
        name: "Affiliation",
        path: "/affiliation",
        icon: Award,
        description: "Accreditations",
        color: colors.danger,
      },
      {
        name: "Contact",
        path: "/contact",
        icon: Phone,
        description: "Get in touch with us",
        color: colors.danger,
      },
    ],
  },
];


const UniversityMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  // Refs for GSAP animations
  const menuRef = useRef(null);
  const logoRef = useRef(null);
  const affiliationRefs = useRef([]);
  const menuItemRefs = useRef([]);
  const megaMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Function to handle News & Events click
  const handleNewsEventsClick = (e) => {
    e.preventDefault();
    closeAllMenus();
    
    // Find the news-events section on the page
    const newsEventsSection = document.getElementById('news-events');
    if (newsEventsSection) {
      // Smooth scroll to the section
      newsEventsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      
      // Optional: Add a visual highlight effect
      gsap.fromTo(newsEventsSection,
        { backgroundColor: 'rgba(124, 58, 237, 0.1)' },
        { 
          backgroundColor: 'transparent', 
          duration: 2,
          ease: "power2.out"
        }
      );
    } else {
      // If section not found, navigate to home and then scroll
      window.location.href = '/#news-events';
    }
  };

  // Update the News & Events menu item to use the scroll function
  const updatedMainCategories = mainCategories.map(category => {
    if (category.name === "News & Events") {
      return {
        ...category,
        onClick: handleNewsEventsClick
      };
    }
    return category;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
      if (window.innerWidth > 1024) {
        setMobileMenuOpen(false);
        setMobileSubmenu(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Logo animation
      gsap.fromTo(logoRef.current,
        { opacity: 0, y: -10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out"
        }
      );

      // Affiliations animation
      affiliationRefs.current.forEach((ref, index) => {
        if (ref) {
          gsap.fromTo(ref,
            { opacity: 0, x: 20 },
            {
              opacity: 1,
              x: 0,
              duration: 0.5,
              delay: index * 0.1,
              ease: "power2.out"
            }
          );
        }
      });

      // Menu items animation
      menuItemRefs.current.forEach((ref, index) => {
        if (ref) {
          gsap.fromTo(ref,
            { opacity: 0, y: -10 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              delay: index * 0.05,
              ease: "back.out(1.7)"
            }
          );
        }
      });
    }, menuRef);

    return () => ctx.revert();
  }, []);

  // Animate mega menu when activeMenu changes
  useEffect(() => {
    if (activeMenu && megaMenuRef.current) {
      gsap.fromTo(megaMenuRef.current,
        { opacity: 0, y: -10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out"
        }
      );
    }
  }, [activeMenu]);

  const closeAllMenus = () => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
    setMobileSubmenu(null);
  };

  const getCategoryColor = (categoryName) => {
    const category = updatedMainCategories.find(cat => cat.name === categoryName);
    return category ? category.color : colors.primary;
  };

  return (
    <div ref={menuRef} className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      {/* Top Bar with Logo and Affiliations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between ">
          {/* Logo */}
          <div ref={logoRef} className="flex-shrink-0">
            <div className="flex items-center">
              <div className="w-20 h-20 rounded-full p-1 flex items-center justify-center">
                <img
                  src="/images/2025-08-27 19.10.46.jpg"
                  className="w-full h-full rounded-full object-cover"
                  alt="Krishna Engineering College Logo"
                />
              </div>
              <div className="ml-3" style={{ fontFamily: 'inter, serif' }}>
                <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                  KRISHNA
                </h1>
                <p className="text-xs md:text-xl -mt-1 font-semibold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                  ENGINEERING COLLEGE
                </p>
                <span className="text-xs font-medium md:text-sm">
                  Managed By KPS GROUP
                </span>
              </div>
            </div>
          </div>

          {/* Affiliations - Right Side */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4 rounded-2xl p-4"
            style={{ 
              fontFamily: 'Inter, serif',
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(20px)',
            }}
          >
            {affiliations.map(({ img, label, color, bgColor }, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-xl group"
              >
                <div className="p-3 rounded-lg transition-all duration-300 group-hover:scale-110">
                  <img src={img} alt={label} className="w-6 h-6 lg:w-16 lg:h-16 object-contain" />
                </div>
                <div 
                  className="w-1 h-8 rounded-full transition-all duration-300 group-hover:h-10"
                  style={{ backgroundColor: bgColor }}
                ></div>
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-3 rounded-xl transition-colors"
              style={{ 
                backgroundColor: colors.primary,
                color: 'white'
              }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation Menu with Mega Menu */}
      <div className="hidden md:block border-t"
        style={{ borderColor: `${colors.primary}20` }}
      >
        <div className="max-w-9xl mx-auto px-4 sm:px-6">
          <div className="flex justify-center relative">
            <div className="flex space-x-1">
              {updatedMainCategories.map((category, index) => {
                const IconComponent = category.icon;
                const isActive = activeMenu === category.name;
                const categoryColor = getCategoryColor(category.name);

                return (
                  <div
                    key={category.name}
                    ref={el => menuItemRefs.current[index] = el}
                    className="relative group"
                    style={{ fontFamily: "inter, serif" }}
                    onMouseEnter={() => setActiveMenu(category.name)}
                    onMouseLeave={() => {
                      setActiveMenu(null);
                      setHoveredItem(null);
                    }}
                  >
                    {category.name === "News & Events" ? (
                      // Special handling for News & Events with scroll
                      <button
                        onClick={category.onClick}
                        className="flex items-center px-5 py-4 text-sm transition-all duration-300 group-hover:rounded-t-xl relative w-full"
                        style={{ 
                          color: isActive ? categoryColor : colors.dark,
                          backgroundColor: isActive ? `${categoryColor}10` : 'transparent'
                        }}
                      >
                        <IconComponent 
                          size={18} 
                          className="mr-2" 
                          style={{ color: isActive ? categoryColor : colors.dark }}
                        />
                        {category.name}
                        {/* Animated underline */}
                        <div 
                          className="absolute bottom-0 left-0 w-0 h-1 transition-all duration-300 group-hover:w-full"
                          style={{ 
                            backgroundColor: categoryColor,
                            width: isActive ? '100%' : '0%'
                          }}
                        />
                      </button>
                    ) : (
                      // Regular menu items with Link
                      <Link
                        to={category.path}
                        className="flex items-center px-5 py-4 text-sm transition-all duration-300 group-hover:rounded-t-xl relative"
                        style={{ 
                          color: isActive ? categoryColor : colors.dark,
                          backgroundColor: isActive ? `${categoryColor}10` : 'transparent'
                        }}
                      >
                        <IconComponent 
                          size={18} 
                          className="mr-2" 
                          style={{ color: isActive ? categoryColor : colors.dark }}
                        />
                        {category.name}
                        {category.submenu && (
                          <ChevronDown
                            size={16}
                            className="ml-2 transition-transform duration-300 group-hover:rotate-180"
                            style={{ color: isActive ? categoryColor : colors.dark }}
                          />
                        )}
                        {/* Animated underline */}
                        <div 
                          className="absolute bottom-0 left-0 w-0 h-1 transition-all duration-300 group-hover:w-full"
                          style={{ 
                            backgroundColor: categoryColor,
                            width: isActive ? '100%' : '0%'
                          }}
                        />
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
            
            {/* Enhanced Mega Menu Container */}
            {activeMenu && (
              <div
                ref={megaMenuRef}
                className="absolute top-full left-1/2 transform -translate-x-1/2 z-50 w-full max-w-5xl"
                onMouseEnter={() => setActiveMenu(activeMenu)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                {updatedMainCategories.map((category) => {
                  if (category.name === activeMenu && category.submenu) {
                    const IconComponent = category.icon;
                    const categoryColor = category.color;
                    
                    return (
                      <div
                        key={category.name}
                        className="rounded-xl shadow-2xl border-2 overflow-hidden transform transition-all duration-300"
                        style={{ 
                          borderColor: `${categoryColor}20`,
                          background: 'white'
                        }}
                      >
                        {/* Enhanced Mega Menu Header */}
                        <div 
                          className="py-5 px-8 text-white relative overflow-hidden"
                          style={{ background: `linear-gradient(135deg, ${categoryColor} 0%, ${categoryColor}dd 100%)` }}
                        >
                          <div className="flex items-center relative z-10">
                            <div 
                              className="p-3 rounded-xl mr-4 backdrop-blur-sm"
                              style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
                            >
                              <IconComponent size={28} className="text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold">
                                {category.name}
                              </h3>
                              <p className="text-sm opacity-95 mt-1">
                                {category.description}
                              </p>
                            </div>
                          </div>
                          {/* Background pattern */}
                          <div 
                            className="absolute top-0 right-0 w-32 h-32 opacity-10"
                            style={{ background: 'radial-gradient(circle, white 20%, transparent 70%)' }}
                          />
                        </div>

                        {/* Enhanced Mega Menu Content */}
                        <div className="p-8 grid grid-cols-2 gap-2">
                          {category.submenu.map((item, index) => {
                            const ItemIcon = item.icon;
                            const itemColor = item.color || categoryColor;
                            
                            return (
                              <div
                                key={item.name}
                                className="transform transition-all duration-300 hover:scale-[1.02]"
                              >
                                <Link
                                  to={item.path}
                                  className={`flex items-start p-4 rounded-xl transition-all duration-300 border-2 ${
                                    hoveredItem === item.name
                                      ? "shadow-lg transform scale-[1.02]"
                                      : "shadow-sm hover:shadow-md"
                                  }`}
                                  onClick={closeAllMenus}
                                  onMouseEnter={() => setHoveredItem(item.name)}
                                  onMouseLeave={() => setHoveredItem(null)}
                                  style={{ 
                                    borderColor: hoveredItem === item.name ? `${itemColor}40` : 'transparent',
                                    backgroundColor: hoveredItem === item.name ? `${itemColor}08` : 'white'
                                  }}
                                >
                                  <div 
                                    className="flex-shrink-0 h-12 w-12 rounded-xl flex items-center justify-center mr-4 shadow-sm"
                                    style={{ 
                                      backgroundColor: `${itemColor}15`,
                                      border: `2px solid ${itemColor}30`
                                    }}
                                  >
                                    <ItemIcon
                                      size={20}
                                      style={{ color: itemColor }}
                                    />
                                  </div>
                                  <div className="flex-1">
                                    <h4 
                                      className="font-bold text-lg mb-2"
                                      style={{ color: colors.dark }}
                                    >
                                      {item.name}
                                    </h4>
                                    <p 
                                      className="text-sm"
                                      style={{ color: colors.dark + 'cc' }}
                                    >
                                      {item.description}
                                    </p>
                                    <div 
                                      className="w-8 h-0.5 rounded-full mt-2"
                                      style={{ backgroundColor: itemColor }}
                                    />
                                  </div>
                                </Link>
                              </div>
                            );
                          })}
                        </div>

                        {/* Mega Menu Footer */}
                        <div 
                          className="px-8 py-4 border-t text-center"
                          style={{ borderColor: `${categoryColor}15`, backgroundColor: `${categoryColor}05` }}
                        >
                          <span 
                            className="text-sm font-medium"
                            style={{ color: categoryColor }}
                          >
                            Explore more about {category.name.toLowerCase()}
                          </span>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden bg-white border-t"
          style={{ borderColor: `${colors.primary}20` }}
        >
          {/* Mobile Affiliations */}
          <div 
            className="px-4 py-4 border-b"
            style={{ borderColor: `${colors.primary}20`, backgroundColor: `${colors.primary}05` }}
          >
            <h3 
              className="text-sm font-bold mb-3 text-center"
              style={{ color: colors.primary }}
            >
              RECOGNITIONS & AWARDS
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {affiliations.map((affiliation, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 bg-white rounded-xl border-2 shadow-sm"
                  style={{ borderColor: `${affiliation.bgColor}50` }}
                >
                  <div
                    className="p-2 rounded-lg mr-3"
                    style={{ backgroundColor: affiliation.bgColor }}
                  >
                    <img
                      src={affiliation.img}
                      alt={affiliation.label}
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                  <span
                    className="text-xs font-semibold"
                    style={{ color: affiliation.color.replace("text-", "") }}
                  >
                    {affiliation.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="py-2 space-y-1">
            {updatedMainCategories.map((category) => {
              const IconComponent = category.icon;
              const hasSubmenu = category.submenu && category.submenu.length > 0;
              const categoryColor = category.color;

              return (
                <div
                  key={category.name}
                  className="border-b last:border-b-0"
                  style={{ borderColor: `${colors.primary}10` }}
                >
                  {category.name === "News & Events" ? (
                    // Special handling for News & Events in mobile
                    <button
                      onClick={category.onClick}
                      className="flex items-center justify-between w-full px-4 py-4 transition-colors duration-200"
                      style={{ 
                        backgroundColor: mobileSubmenu === category.name ? `${categoryColor}08` : 'transparent'
                      }}
                    >
                      <div className="flex items-center font-semibold">
                        <div 
                          className="p-2 rounded-lg mr-3"
                          style={{ backgroundColor: `${categoryColor}15` }}
                        >
                          <IconComponent
                            size={18}
                            style={{ color: categoryColor }}
                          />
                        </div>
                        {category.name}
                      </div>
                    </button>
                  ) : (
                    // Regular mobile menu items
                    <div
                      className={`flex items-center justify-between px-4 py-4 ${
                        hasSubmenu ? "cursor-pointer" : ""
                      } transition-colors duration-200`}
                      onClick={() =>
                        hasSubmenu &&
                        setMobileSubmenu(
                          mobileSubmenu === category.name ? null : category.name
                        )
                      }
                      style={{ 
                        backgroundColor: mobileSubmenu === category.name ? `${categoryColor}08` : 'transparent'
                      }}
                    >
                      <Link
                        to={category.path}
                        className="flex items-center font-semibold"
                        onClick={!hasSubmenu ? closeAllMenus : undefined}
                        style={{ color: colors.dark }}
                      >
                        <div 
                          className="p-2 rounded-lg mr-3"
                          style={{ backgroundColor: `${categoryColor}15` }}
                        >
                          <IconComponent
                            size={18}
                            style={{ color: categoryColor }}
                          />
                        </div>
                        {category.name}
                      </Link>

                      {hasSubmenu && (
                        <ChevronDown 
                          size={18} 
                          style={{ 
                            color: categoryColor,
                            transform: mobileSubmenu === category.name ? 'rotate(180deg)' : 'rotate(0)',
                            transition: 'transform 0.3s ease'
                          }}
                        />
                      )}
                    </div>
                  )}

                  {/* Enhanced Mobile Submenu */}
                  {hasSubmenu && mobileSubmenu === category.name && (
                    <div
                      className="pl-4 pr-4 pb-3"
                      style={{ backgroundColor: `${categoryColor}05` }}
                    >
                      <div className="space-y-2">
                        {category.submenu.map((item) => {
                          const ItemIcon = item.icon;
                          const itemColor = item.color || categoryColor;
                          
                          return (
                            <div
                              key={item.name}
                              className="transform transition-transform duration-200 hover:translate-x-1"
                            >
                              <Link
                                to={item.path}
                                className="flex items-center p-3 rounded-lg bg-white shadow-sm border"
                                onClick={closeAllMenus}
                                style={{ 
                                  borderColor: `${itemColor}20`,
                                  color: colors.dark
                                }}
                              >
                                <ItemIcon
                                  size={16}
                                  className="mr-3"
                                  style={{ color: itemColor }}
                                />
                                <span className="font-medium">{item.name}</span>
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default UniversityMenu;