import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.get("/api/hotel-info", (req, res) => {
    res.json({
      name: "Hotel Royal Phoenix",
      location: "Dubai, UAE",
      description: "Experience unparalleled luxury at Hotel Royal Phoenix, where elegance meets excellence in hospitality.",
      rating: 5,
      phone: "+1 (123) 456-7890",
      email: "info@royalphoenix.com",
      address: "123 Luxury Avenue, Downtown, Dubai, UAE"
    });
  });

  app.get("/api/rooms", (req, res) => {
    res.json([
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
    ]);
  });

  app.get("/api/packages", (req, res) => {
    res.json([
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
    ]);
  });

  const httpServer = createServer(app);

  return httpServer;
}
