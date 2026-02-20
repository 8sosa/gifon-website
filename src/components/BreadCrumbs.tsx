"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaChevronRight, FaHome } from "react-icons/fa";

export default function Breadcrumbs() {
  const pathname = usePathname();

  // 1. Don't show breadcrumbs on the homepage
  // if (pathname === "/") return null;

  // 2. Split path into segments (remove empty strings)
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  return (
    <nav aria-label="Breadcrumb" className="w-full bg-gray-50 border-b border-gray-100 py-2 z-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2">
          
          {/* Home Link */}
          <li>
            <Link href="/" className="text-gray-400 hover:text-green-700 transition-colors">
              <FaHome size={14} />
              <span className="sr-only">Home</span>
            </Link>
          </li>

          {/* Dynamic Segments */}
          {pathSegments.map((segment, index) => {
            // Build the URL for this segment
            const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
            
            // Check if it's the last segment (current page)
            const isLast = index === pathSegments.length - 1;

            // Format the text (remove hyphens, capitalize)
            const label = segment.replace(/-/g, " ").toUpperCase(); 

            return (
              <li key={href} className="flex items-center">
                <FaChevronRight className="text-gray-300 mx-2" size={10} />
                
                {isLast ? (
                  <span className="text-xs font-bold text-green-800 bellefair tracking-wide" aria-current="page">
                    {label}
                  </span>
                ) : (
                  <Link 
                    href={href} 
                    className="text-xs font-medium text-gray-500 hover:text-green-700 transition-colors bellefair tracking-wide"
                  >
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}