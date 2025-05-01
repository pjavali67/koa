"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { Button } from "../../components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
export default function NavigationBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "KOA Office",
      href: "/aboutus",
      subLinks: [
        { name: "About Us", href: "/aboutus" },
        { name: "Our Message", href: "/ourmessage" },
        { name: "Office Bearers", href: "/officebearers" },
        { name: "District Chapters", href: "/districtchapter"},
        { name: "Committees", href: "/committees" },
        { name: "Past Officers", href: "/pastofficers" },
        { name: "KOA ByLaws & Blue Book", href: "/bylaws-bluebook" },
        { name: "KAO Bulletin", href: "/koabulletin" },
        { name: "History Of Orthopaedics", href: "/historyofortho" },
      ],
    },
    {
      name: "Academics",
      href: "/academics",
      subLinks: [
        { name: "Academics Calendar", href: "#" },
        { name: "FellowShip", href: "/fellowship" },
        { name: "Books", href: "/books" },
      ],
    },

    { name: "News", href: "/news" },
    { name: "Events", href: "/events" },
    { name: "Blog", href: "/sblog" },
    
   
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center ">
            <a href="#" className="text-xl font-bold text-gray-900 dark:text-white hidden">
              YourLogo
            </a>
          </div>

          {/* Desktop Navigation */}
          {}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.subLinks ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                        {link.name}
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-52 mt-2">
                      {link.subLinks.map((subLink) => (
                        <DropdownMenuItem key={subLink.name} asChild>
                          <Link
                            href={subLink.href}
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                          >
                            {subLink.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={link.href}
                    className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
          <div className="justify-center items-center  flex space-x-2 hidden md:flex">
              <Link  className="btn bg-purple-500 md:inline-flex" href="/login">Login</Link>
              <Link  className="btn  md:inline-flex bg-purple-500" href="/membership">Join KOA</Link>
          </div>
         
        </div>
      
      </div>
     
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 pb-3 px-4">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.subLinks ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="w-full justify-between text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                        {link.name}
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-full">
                      {link.subLinks.map((subLink) => (
                        <DropdownMenuItem key={subLink.name} asChild>
                          <Link
                            href={subLink.href}
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                          >
                            {subLink.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={link.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="justify-center item-center  flex space-x-2 hidden md:flex">
            <Button variant={'koaread'} className=" md:inline-flex bg-purple-500">Login</Button>
            <Button variant={'koaread'} className="  md:inline-flex bg-purple-500">Join KOA</Button>
          </div>
        </div>
      )}
      
    </nav>
  );
}

