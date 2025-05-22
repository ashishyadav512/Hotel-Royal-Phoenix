import { useEffect } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { Welcome } from "@/components/home/welcome";
import { Rooms } from "@/components/home/rooms";
import { Packages } from "@/components/home/packages";
import { Dining } from "@/components/home/dining";
import { Events } from "@/components/home/events";
import { BookingCTA } from "@/components/home/booking-cta";
import { Helmet } from "react-helmet";
import { setupSectionObserver } from "@/lib/utils";

export default function HomePage() {
  useEffect(() => {
    // Load fonts
    const playfairDisplay = document.createElement("link");
    playfairDisplay.rel = "stylesheet";
    playfairDisplay.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap";
    document.head.appendChild(playfairDisplay);

    const montserrat = document.createElement("link");
    montserrat.rel = "stylesheet";
    montserrat.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap";
    document.head.appendChild(montserrat);

    const cormorantGaramond = document.createElement("link");
    cormorantGaramond.rel = "stylesheet";
    cormorantGaramond.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&display=swap";
    document.head.appendChild(cormorantGaramond);

    // Set up section observers for animations
    setupSectionObserver();

    return () => {
      // Clean up font links when component unmounts
      document.head.removeChild(playfairDisplay);
      document.head.removeChild(montserrat);
      document.head.removeChild(cormorantGaramond);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Hotel Royal Phoenix - Luxury Accommodations</title>
        <meta name="description" content="Experience unparalleled luxury at Hotel Royal Phoenix. Our 5-star accommodations offer elegant rooms, fine dining, and exceptional service in a stunning setting." />
        <meta property="og:title" content="Hotel Royal Phoenix - Luxury Accommodations" />
        <meta property="og:description" content="Experience unparalleled luxury at Hotel Royal Phoenix with world-class amenities and exceptional service." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <Navbar />
      <main className="font-montserrat text-gray-800">
        <Hero />
        <Welcome />
        <Rooms />
        <Packages />
        <Dining />
        <Events />
        <BookingCTA />
      </main>
      <Footer />
    </>
  );
}
