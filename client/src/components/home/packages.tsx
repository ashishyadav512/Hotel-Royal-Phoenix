import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const packages = [
  {
    id: 1,
    name: "Romantic Escape",
    price: 850,
    image: "https://images.unsplash.com/photo-1578774296842-c45e472b3028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Rekindle the romance with our special couples package including champagne, chocolates and a private dining experience.",
    features: [
      "Luxury accommodation",
      "Champagne & chocolate upon arrival",
      "Private dining experience",
      "Couples spa treatment"
    ]
  },
  {
    id: 2,
    name: "Wellness Retreat",
    price: 1200,
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Rejuvenate your mind, body and soul with our comprehensive wellness package designed for total relaxation.",
    features: [
      "Luxury accommodation",
      "Daily spa treatments",
      "Wellness consultation",
      "Healthy dining options"
    ]
  },
  {
    id: 3,
    name: "Family Adventure",
    price: 950,
    image: "https://images.unsplash.com/photo-1542359649-31e03cd4d909?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    description: "Create lasting memories with your loved ones with our family-friendly package featuring activities for all ages.",
    features: [
      "Family suite accommodation",
      "Kids club access",
      "Family excursion",
      "Child-friendly amenities"
    ]
  }
];

export function Packages() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="packages" className="section py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-playfair text-4xl font-bold text-primary mb-4">Stay Packages</h2>
            <div className="gold-separator"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Enjoy our carefully curated packages designed to provide an unforgettable experience
              during your stay at Hotel Royal Phoenix.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {packages.map((pkg) => (
            <motion.div 
              key={pkg.id} 
              className="package-card bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100"
              variants={item}
            >
              <div className="image-container h-48 relative">
                <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
                <div className="overlay">
                  <span className="text-white font-playfair text-xl">Explore Package</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold text-primary mb-3">{pkg.name}</h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <ul className="text-gray-600 mb-6 space-y-2">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="text-accent mr-2" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-accent font-semibold">From ${pkg.price}</span>
                  <Button className="gold-btn bg-accent text-white px-4 py-2 rounded">Book Now</Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
