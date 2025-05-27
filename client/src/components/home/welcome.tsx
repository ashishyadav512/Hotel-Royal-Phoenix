import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Utensils, Bath, ConciergeBell, Waves } from "lucide-react";
import { scrollToElement } from "@/lib/utils";

export function Welcome() {
  return (
    <section className="section py-20 bg-gradient-to-b from-background to-muted text-foreground">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="image-container rounded-xl shadow-2xl overflow-hidden relative luxury-card glow-effect">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Luxury hotel lobby" 
                className="w-full h-auto"
              />
              <div className="overlay">
                <span className="text-white font-playfair text-2xl text-shadow-gold">Discover Our Elegance</span>
                <div className="gold-separator glow-effect"></div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 lg:pl-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-playfair text-4xl font-bold text-accent mb-6 text-shadow-gold">Welcome to Royal Phoenix</h2>
            <div className="gold-separator glow-effect mb-8"></div>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Nestled in the heart of luxury, Hotel Royal Phoenix offers an unparalleled experience of opulence and comfort. 
              Our five-star establishment combines traditional elegance with modern sophistication, creating a haven for discerning travelers.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <motion.div 
                className="flex items-start luxury-card p-4 rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <ConciergeBell className="text-accent text-3xl mr-4 mt-1 flex-shrink-0 glow-effect" />
                <div>
                  <h3 className="font-playfair font-semibold text-xl text-accent mb-2">Premium Service</h3>
                  <p className="text-muted-foreground">24/7 concierge and personalized assistance</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start luxury-card p-4 rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Bath className="text-accent text-3xl mr-4 mt-1 flex-shrink-0 glow-effect" />
                <div>
                  <h3 className="font-playfair font-semibold text-xl text-accent mb-2">Wellness Center</h3>
                  <p className="text-muted-foreground">Luxury spa treatments and fitness facilities</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start luxury-card p-4 rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Utensils className="text-accent text-3xl mr-4 mt-1 flex-shrink-0 glow-effect" />
                <div>
                  <h3 className="font-playfair font-semibold text-xl text-accent mb-2">Fine Dining</h3>
                  <p className="text-muted-foreground">Award-winning restaurants and chefs</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start luxury-card p-4 rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Waves className="text-accent text-3xl mr-4 mt-1 flex-shrink-0 glow-effect" />
                <div>
                  <h3 className="font-playfair font-semibold text-xl text-accent mb-2">Infinity Pool</h3>
                  <p className="text-muted-foreground">Breathtaking views from our rooftop pools</p>
                </div>
              </motion.div>
            </div>
            
            <Button 
              onClick={() => scrollToElement("rooms")}
              className="gold-btn text-black font-semibold px-10 py-4 text-lg rounded-lg inline-flex items-center glow-effect"
            >
              Explore Our Hotel
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
