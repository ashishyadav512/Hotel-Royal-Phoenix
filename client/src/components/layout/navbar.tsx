import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { scrollToElement } from "@/lib/utils";

const navigationLinks = [
  { name: "Home", href: "home" },
  { name: "Rooms", href: "rooms" },
  { name: "Dining", href: "dining" },
  { name: "Packages", href: "packages" },
  { name: "Events", href: "events" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = (href: string) => {
    scrollToElement(href);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 bg-gradient-luxury backdrop-blur-md border-b border-accent/20 shadow-2xl transition-all duration-500 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <Container>
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-playfair text-accent font-bold text-shadow-gold">Hotel Royal Phoenix</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navigationLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavLinkClick(link.href)}
                className="nav-link text-white hover:text-accent transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>
          
          <div className="hidden md:flex items-center">
            <Button 
              onClick={() => handleNavLinkClick("booking")}
              className="gold-btn bg-accent text-white px-5 py-2 rounded shadow hover:shadow-lg"
            >
              Book Now
            </Button>
          </div>
          
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-royal border-t border-white/10 mt-2 py-4">
          <Container>
            <div className="flex flex-col space-y-4">
              {navigationLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavLinkClick(link.href)}
                  className="text-white hover:text-accent transition-colors py-2"
                >
                  {link.name}
                </button>
              ))}
              <Button 
                onClick={() => handleNavLinkClick("booking")}
                className="gold-btn bg-accent text-white w-full py-2 rounded shadow hover:shadow-lg mt-2"
              >
                Book Now
              </Button>
            </div>
          </Container>
        </div>
      )}
    </nav>
  );
}
