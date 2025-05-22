import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function BookingCTA() {
  return (
    <section id="booking" className="section py-24 bg-gradient-royal text-white relative">
      <Container className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Experience Luxury Beyond Compare</h2>
          <div className="gold-separator"></div>
          <p className="text-gray-300 max-w-3xl mx-auto mb-10 text-lg">
            Book your stay directly with us to enjoy exclusive benefits, preferential rates, 
            and personalized service that will make your experience truly unforgettable.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Button 
              className="gold-btn bg-accent text-white px-10 py-4 rounded-lg text-lg font-semibold"
            >
              Book Your Stay
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary transition-colors px-10 py-4 rounded-lg text-lg font-semibold"
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
