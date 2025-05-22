import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";

const eventSpaces = [
  {
    id: 1,
    name: "Grand Ballroom",
    capacity: 400,
    description: "Our magnificent ballroom can accommodate up to 400 guests and features crystal chandeliers, state-of-the-art audio-visual equipment, and flexible layouts.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    eventTypes: ["Weddings", "Galas", "Conferences", "Corporate Events"]
  },
  {
    id: 2,
    name: "Phoenix Terrace",
    capacity: 120,
    description: "Our stunning outdoor terrace offers breathtaking views and a sophisticated setting for cocktail receptions, intimate weddings, and private celebrations.",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    eventTypes: ["Cocktail Receptions", "Intimate Weddings", "Private Parties"]
  }
];

export function Events() {
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
    <section id="events" className="section py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-playfair text-4xl font-bold text-primary mb-4">Events & Celebrations</h2>
            <div className="gold-separator"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From intimate gatherings to grand celebrations, our versatile venues provide 
              the perfect backdrop for your special occasions.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {eventSpaces.map((space) => (
            <motion.div key={space.id} className="event-card bg-white rounded-lg overflow-hidden shadow-lg" variants={item}>
              <div className="image-container h-72 relative">
                <img src={space.image} alt={space.name} className="w-full h-full object-cover" />
                <div className="overlay flex flex-col items-center">
                  <h3 className="font-playfair text-2xl font-bold text-white mb-2">{space.name}</h3>
                  <Button className="gold-btn bg-accent text-white px-6 py-2 rounded">View Details</Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold text-primary mb-2">{space.name}</h3>
                <p className="text-gray-600 mb-4">
                  {space.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {space.eventTypes.map((type, index) => (
                    <Badge key={index} variant="outline" className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                      {type}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 flex items-center">
                    <Users className="mr-1" size={16} /> Up to {space.capacity} guests
                  </span>
                  <a href="#event-inquiry" className="text-primary hover:text-accent transition-colors font-semibold">
                    Request Proposal
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button 
            className="gold-btn bg-primary text-white px-8 py-3 rounded"
          >
            Explore All Event Spaces
          </Button>
        </div>
      </Container>
    </section>
  );
}
