import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Send
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-gray-300 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-playfair text-xl text-white font-semibold mb-4">Hotel Royal Phoenix</h3>
            <p className="mb-6">
              123 Luxury Avenue<br />
              Downtown, City 10001<br />
              Country
            </p>
            <div className="space-y-2">
              <p className="flex items-center">
                <Phone size={16} className="mr-2 text-accent" />
                +1 (123) 456-7890
              </p>
              <p className="flex items-center">
                <Mail size={16} className="mr-2 text-accent" />
                info@royalphoenix.com
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="font-playfair text-xl text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#rooms" className="hover:text-accent transition-colors">Accommodations</a></li>
              <li><a href="#dining" className="hover:text-accent transition-colors">Dining</a></li>
              <li><a href="#packages" className="hover:text-accent transition-colors">Special Offers</a></li>
              <li><a href="#events" className="hover:text-accent transition-colors">Events</a></li>
              <li><a href="#spa" className="hover:text-accent transition-colors">Spa & Wellness</a></li>
              <li><a href="#gallery" className="hover:text-accent transition-colors">Gallery</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair text-xl text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#concierge" className="hover:text-accent transition-colors">Concierge Service</a></li>
              <li><a href="#airport" className="hover:text-accent transition-colors">Airport Transfer</a></li>
              <li><a href="#business" className="hover:text-accent transition-colors">Business Center</a></li>
              <li><a href="#childcare" className="hover:text-accent transition-colors">Childcare</a></li>
              <li><a href="#tours" className="hover:text-accent transition-colors">Guided Tours</a></li>
              <li><a href="#parking" className="hover:text-accent transition-colors">Valet Parking</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-playfair text-xl text-white font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to receive special offers and updates.</p>
            <form className="mb-4">
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="rounded-r-none text-foreground focus-visible:ring-accent"
                />
                <Button type="submit" className="bg-accent text-white rounded-l-none hover:bg-accent/90">
                  <Send size={16} />
                </Button>
              </div>
            </form>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <Separator className="bg-gray-700" />
        
        <div className="pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2023 Hotel Royal Phoenix. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#privacy" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#sitemap" className="hover:text-accent transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
