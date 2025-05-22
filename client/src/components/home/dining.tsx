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
    <section id="dining" className="section py-20 bg-gradient-royal text-white">
      <Container>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-playfair text-4xl font-bold mb-4">Exceptional Gastronomy</h2>
            <div className="gold-separator"></div>
            <p className="max-w-3xl mx-auto text-gray-300">
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
              className="dining-card bg-white rounded-lg overflow-hidden shadow-lg text-gray-800"
              variants={item}
            >
              <div className="image-container h-64 relative">
                <img src={restaurant.image} alt={restaurant.name} className="w-full h-full object-cover" />
                <div className="overlay">
                  <Button className="gold-btn bg-accent text-white px-6 py-2 rounded">View Menu</Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold text-primary mb-2">{restaurant.name}</h3>
                <p className="text-accent font-cormorant italic mb-4">{restaurant.type}</p>
                <p className="text-gray-600 mb-4">
                  {restaurant.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 flex items-center">
                    <Clock className="mr-1" size={16} /> {restaurant.hours}
                  </span>
                  <span className="text-gray-600 flex items-center">
                    <MapPin className="mr-1" size={16} /> {restaurant.location}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-primary transition-colors px-8 py-3 rounded"
          >
            Explore All Dining Options
          </Button>
        </div>
      </Container>
    </section>
  );
}
