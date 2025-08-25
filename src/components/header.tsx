import { useState } from "react";
import { Globe, Menu, ArrowRight, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleJoinWaitlist = () => {
    const element = document.getElementById("experience");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className="bg-white sticky top-0 z-30 py-6 border-b"
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center" data-testid="logo">
              <div className="w-16 h-16 md:w-22 md:h-22 mr-3">
                <Image
                  src="/images/logo.svg"
                  alt="logo"
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <h1 className="font-semibold text-black">Afribbean Air</h1>
                <p className="text-[10px] text-gray">
                  Caribbean • Africa • South America
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8" data-testid="navigation">
            <button
              onClick={() => scrollToSection("problem")}
              className="text-gray hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
              data-testid="nav-problem"
            >
              Problem
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-gray hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
              data-testid="nav-benefits"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection("network")}
              className="text-gray hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
              data-testid="nav-network"
            >
              Network
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-gray hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
              data-testid="nav-experience"
            >
              Experience
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button
              onClick={handleJoinWaitlist}
              className="bg-primary-color hover:bg-primary-color-hover text-white px-3 py-5 
              rounded-full transition-colors flex items-center cursor-pointer"
              data-testid="button-join-waitlist-header"
            >
              Join Waitlist
              <span className="bg-white text-black p-1 rounded-full">
                <MoveRight strokeWidth={1} className="h-1 w-1" />
              </span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray hover:text-gray-900 cursor-pointer"
              data-testid="button-mobile-menu"
            >
              <Menu className="h-8 w-9" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 bg-white py-6 border-b ease-in-out absolute top-28 left-0 right-0
            ${mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}
          data-testid="mobile-menu"
        >
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => {
                scrollToSection("problem");
                setMobileMenuOpen(false);
              }}
              className="text-gray hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors text-left cursor-pointer"
              data-testid="mobile-nav-problem"
            >
              Problem
            </button>
            <button
              onClick={() => {
                scrollToSection("benefits");
                setMobileMenuOpen(false);
              }}
              className="text-gray hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors text-left cursor-pointer"
              data-testid="mobile-nav-benefits"
            >
              Benefits
            </button>
            <button
              onClick={() => {
                scrollToSection("network");
                setMobileMenuOpen(false);
              }}
              className="text-gray hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors text-left cursor-pointer"
              data-testid="mobile-nav-network"
            >
              Network
            </button>
            <button
              onClick={() => {
                scrollToSection("experience");
                setMobileMenuOpen(false);
              }}
              className="text-gray hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors text-left cursor-pointer"
              data-testid="mobile-nav-experience"
            >
              Experience
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
