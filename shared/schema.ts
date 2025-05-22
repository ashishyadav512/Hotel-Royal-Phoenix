import { pgTable, text, serial, integer, boolean, jsonb, real } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Hotel rooms schema
export const rooms = pgTable("rooms", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  price: integer("price").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  size: text("size").notNull(),
  bedType: text("bed_type").notNull(),
  view: text("view").notNull(),
  maxOccupancy: integer("max_occupancy").notNull(),
  features: jsonb("features").notNull(),
});

export const insertRoomSchema = createInsertSchema(rooms).omit({
  id: true,
});

export type InsertRoom = z.infer<typeof insertRoomSchema>;
export type Room = typeof rooms.$inferSelect;

// Packages schema
export const packages = pgTable("packages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  price: integer("price").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  features: jsonb("features").notNull(),
});

export const insertPackageSchema = createInsertSchema(packages).omit({
  id: true,
});

export type InsertPackage = z.infer<typeof insertPackageSchema>;
export type Package = typeof packages.$inferSelect;

// Restaurants schema
export const restaurants = pgTable("restaurants", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  type: text("type").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  hours: text("hours").notNull(),
  location: text("location").notNull(),
});

export const insertRestaurantSchema = createInsertSchema(restaurants).omit({
  id: true,
});

export type InsertRestaurant = z.infer<typeof insertRestaurantSchema>;
export type Restaurant = typeof restaurants.$inferSelect;

// Events schema
export const eventSpaces = pgTable("event_spaces", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  capacity: integer("capacity").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  eventTypes: jsonb("event_types").notNull(),
});

export const insertEventSpaceSchema = createInsertSchema(eventSpaces).omit({
  id: true,
});

export type InsertEventSpace = z.infer<typeof insertEventSpaceSchema>;
export type EventSpace = typeof eventSpaces.$inferSelect;

// For original user schema
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
