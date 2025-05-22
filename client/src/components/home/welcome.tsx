import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Utensils, Bath, ConciergeBell, Waves } from "lucide-react";
import { scrollToElement } from "@/lib/utils";

export function Welcome() {
  return (
    <section className="section py-16 bg-white text-gray-800">
      <Container>
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="image-container rounded-lg shadow-xl overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Luxury hotel lobby" 
                className="w-full h-auto"
              />
              <div className="overlay">
                <span className="text-white font-playfair text-xl">Discover Our Elegance</span>
                <div className="gold-separator"></div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 lg:pl-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-playfair text-3xl font-bold text-primary mb-4">Welcome to Royal Phoenix</h2>
            <div className="w-20 h-1 bg-accent mb-6"></div>
            <p className="text-gray-600 mb-6">
              Nestled in the heart of luxury, Hotel Royal Phoenix offers an unparalleled experience of opulence and comfort. 
              Our five-star establishment combines traditional elegance with modern sophistication, creating a haven for discerning travelers.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <ConciergeBell className="text-accent text-2xl mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-playfair font-semibold text-lg text-primary">Premium Service</h3>
                  <p className="text-gray-600">24/7 concierge and personalized assistance</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Bath className="text-accent text-2xl mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-playfair font-semibold text-lg text-primary">Wellness Center</h3>
                  <p className="text-gray-600">Luxury spa treatments and fitness facilities</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Utensils className="text-accent text-2xl mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-playfair font-semibold text-lg text-primary">Fine Dining</h3>
                  <p className="text-gray-600">Award-winning restaurants and chefs</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Waves className="text-accent text-2xl mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-playfair font-semibold text-lg text-primary">Infinity Pool</h3>
                  <p className="text-gray-600">Breathtaking views from our rooftop pools</p>
                </div>
              </div>
            </div>
            
            <Button 
              onClick={() => scrollToElement("rooms")}
              className="gold-btn bg-primary text-white px-8 py-3 rounded inline-flex items-center"
            >
              Explore Our Hotel
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
