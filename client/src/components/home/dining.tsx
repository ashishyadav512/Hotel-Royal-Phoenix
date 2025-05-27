import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Clock, MapPin } from "lucide-react";

const restaurants = [
  {
    id: 1,
    name: "Sapphire",
    type: "Fine Contemporary Cuisine",
    description: "Our signature restaurant offers a refined dining experience with international cuisine and an extensive wine collection.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    hours: "6:00 PM - 11:00 PM",
    location: "Lobby Level"
  },
  {
    id: 2,
    name: "Koi",
    type: "Asian Fusion & Sushi",
    description: "Experience the harmony of traditional Asian flavors with modern techniques in our elegant and intimate setting.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    hours: "12:00 PM - 10:30 PM",
    location: "Lower Level"
  },
  {
    id: 3,
    name: "Horizon",
    type: "Rooftop Bar & Lounge",
    description: "Indulge in handcrafted cocktails and gourmet small plates while enjoying breathtaking panoramic views of the city skyline.",
    image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    hours: "4:00 PM - 1:00 AM",
    location: "45th Floor"
  }
];

export function Dining() {
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
    <section id="dining" className="section py-24 bg-gradient-luxury text-white relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-accent/10 to-transparent rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-secondary/10 to-transparent rounded-full blur-3xl floating-animation" style={{animationDelay: '3s'}}></div>
      </div>
      
      <Container className="relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="shimmer-effect"
          >
            <h2 className="font-playfair text-5xl font-bold mb-6 text-shadow-gold">Exceptional Gastronomy</h2>
            <div className="gold-separator glow-effect"></div>
            <p className="max-w-4xl mx-auto text-gray-200 text-lg leading-relaxed">
              Embark on a culinary journey through our award-winning restaurants, 
              serving the finest cuisine crafted by world-renowned chefs.
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
          {restaurants.map((restaurant) => (
            <motion.div 
              key={restaurant.id} 
              className="dining-card luxury-card rounded-xl overflow-hidden shadow-2xl glow-effect backdrop-blur-sm"
              variants={item}
            >
              <div className="image-container h-72 relative">
                <img src={restaurant.image} alt={restaurant.name} className="w-full h-full object-cover" />
                <div className="overlay">
                  <Button className="gold-btn text-black font-semibold px-8 py-3 rounded-lg">View Menu</Button>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-playfair text-2xl font-bold text-accent mb-3">{restaurant.name}</h3>
                <p className="text-accent font-cormorant italic mb-6 text-lg">{restaurant.type}</p>
                <p className="text-gray-200 mb-6 leading-relaxed">
                  {restaurant.description}
                </p>
                <div className="flex flex-col gap-3">
                  <span className="text-gray-300 flex items-center">
                    <Clock className="mr-2 text-accent" size={18} /> {restaurant.hours}
                  </span>
                  <span className="text-gray-300 flex items-center">
                    <MapPin className="mr-2 text-accent" size={18} /> {restaurant.location}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <Button 
            variant="outline"
            className="border-2 border-accent text-accent hover:bg-accent hover:text-black transition-all duration-300 px-12 py-4 text-lg rounded-lg backdrop-blur-sm font-semibold"
          >
            Explore All Dining Options
          </Button>
        </div>
      </Container>
    </section>
  );
}
