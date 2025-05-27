import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function BookingCTA() {
  return (
    <section id="booking" className="section py-32 bg-gradient-luxury text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-accent/15 to-transparent rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-secondary/15 to-transparent rounded-full blur-3xl floating-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-primary/15 to-transparent rounded-full blur-3xl floating-animation" style={{animationDelay: '4s'}}></div>
      </div>
      
      <Container className="text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="shimmer-effect"
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-8 text-shadow-gold">Experience Luxury Beyond Compare</h2>
          <div className="gold-separator glow-effect"></div>
          <p className="text-gray-200 max-w-4xl mx-auto mb-12 text-xl leading-relaxed">
            Book your stay directly with us to enjoy exclusive benefits, preferential rates, 
            and personalized service that will make your experience truly unforgettable.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <Button 
              className="gold-btn text-black font-bold px-12 py-5 rounded-xl text-xl glow-effect"
            >
              Book Your Stay
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-black transition-all duration-300 px-12 py-5 rounded-xl text-xl font-bold backdrop-blur-sm"
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
