import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { scrollToElement } from "@/lib/utils";

const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
    price: 350,
    description: "Our spacious Deluxe Rooms offer beautiful city views and premium amenities for the discerning traveler.",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    features: ["42 m²", "King Bed", "City View", "Free WiFi"]
  },
  {
    id: 2,
    name: "Grand Suite",
    price: 650,
    description: "Experience unparalleled luxury in our Grand Suites featuring separate living areas and premium amenities.",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    features: ["76 m²", "King Bed", "Panoramic View", "Living Area"]
  },
  {
    id: 3,
    name: "Royal Phoenix Suite",
    price: 1200,
    description: "Our flagship suite offers uncompromised luxury with butler service, private terrace, and exclusive amenities.",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    features: ["140 m²", "Master Bedroom", "Private Terrace", "Butler Service"]
  }
];

export function Rooms() {
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
    <section id="rooms" className="section py-24 bg-gradient-to-b from-muted to-background">
      <Container>
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="shimmer-effect"
          >
            <h2 className="font-playfair text-5xl font-bold text-accent mb-6 text-shadow-gold">Rooms & Suites</h2>
            <div className="gold-separator glow-effect"></div>
            <p className="text-muted-foreground max-w-4xl mx-auto text-lg leading-relaxed">
              Immerse yourself in the epitome of luxury with our meticulously designed accommodations.
              Each room and suite offers a unique blend of comfort, elegance, and modern amenities.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {rooms.map((room) => (
            <motion.div key={room.id} className="room-card luxury-card rounded-xl overflow-hidden shadow-2xl glow-effect" variants={item}>
              <div className="image-container h-72 relative">
                <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
                <div className="overlay">
                  <Button className="gold-btn text-black font-semibold px-8 py-3 rounded-lg">View Details</Button>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-playfair text-2xl font-bold text-accent">{room.name}</h3>
                  <span className="text-accent font-bold text-xl">${room.price} <span className="text-muted-foreground text-base">/night</span></span>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{room.description}</p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {room.features.map((feature, index) => (
                    <Badge key={index} variant="outline" className="bg-accent/10 text-accent border-accent/30 px-4 py-2 rounded-full font-medium">
                      {feature}
                    </Badge>
                  ))}
                </div>
                <Button 
                  onClick={() => scrollToElement("booking")}
                  className="gold-btn text-black font-semibold flex items-center justify-center rounded-lg py-3 w-full text-lg"
                >
                  Book Now <ArrowRight className="ml-2" size={18} />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <Button 
            className="gold-btn text-black font-semibold px-12 py-4 text-lg rounded-lg glow-effect"
          >
            View All Accommodations
          </Button>
        </div>
      </Container>
    </section>
  );
}
