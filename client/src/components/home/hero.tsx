import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { scrollToElement } from "@/lib/utils";

export function Hero() {
  return (
    <section id="home" className="hero-section bg-gradient-luxury relative flex flex-col justify-center items-center text-center pt-20 min-h-[100vh] overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-accent/20 to-transparent rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-secondary/20 to-transparent rounded-full blur-3xl floating-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-primary/20 to-transparent rounded-full blur-3xl floating-animation" style={{animationDelay: '4s'}}></div>
      </div>
      
      <Container className="z-10 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="shimmer-effect"
        >
          <motion.h1 
            className="font-playfair text-5xl md:text-7xl font-bold mb-6 text-white text-shadow-gold"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            Hotel Royal Phoenix
          </motion.h1>
          <div className="gold-separator glow-effect"></div>
          <motion.p 
            className="font-cormorant text-2xl md:text-3xl text-accent mb-10 max-w-3xl mx-auto text-shadow font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Luxury & Brilliance Redefined<br />
            <span className="text-white text-xl">Experience the height of sophistication in Dubai's iconic skyline</span>
          </motion.p>
          
          <motion.div 
            className="flex flex-col md:flex-row justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button 
              onClick={() => scrollToElement("booking")}
              className="gold-btn text-black font-semibold px-10 py-4 text-lg rounded-lg glow-effect"
            >
              Book Your Stay
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToElement("tour")}
              className="border-2 border-accent text-accent px-10 py-4 text-lg rounded-lg hover:bg-accent hover:text-black transition-all duration-300 backdrop-blur-sm"
            >
              Virtual Tour
            </Button>
          </motion.div>
        </motion.div>
      </Container>
      
      <div className="absolute bottom-0 w-full overflow-hidden leading-0">
        <svg className="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-white"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-white"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
}
