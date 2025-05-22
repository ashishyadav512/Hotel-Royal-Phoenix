# Hotel Royal Phoenix Website Project

## Overview

This project is a modern hotel website for the fictional "Hotel Royal Phoenix" built with a React frontend and Express.js backend. The application showcases hotel rooms, dining options, special packages, and event spaces with a luxury aesthetic. The architecture follows a client-server model with a React frontend styled using Tailwind CSS and shadcn/ui components, and an Express.js API backend with Drizzle ORM for database interactions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

The frontend is built with React and uses the following key technologies:

1. **React**: Core UI library
2. **Tailwind CSS**: Utility-first CSS framework with a custom theme focused on luxury hotel aesthetics
3. **shadcn/ui**: Component library built on Radix UI primitives
4. **Framer Motion**: Animation library used for smooth transitions and visual effects
5. **React Query**: Data fetching and state management
6. **Wouter**: Lightweight router for navigation

The frontend follows a component-based architecture with reusable UI components and page-specific components. It uses a custom color palette centered around royal blue and gold to maintain the luxury hotel branding.

### Backend Architecture

The backend is built with:

1. **Express.js**: Web server framework
2. **Drizzle ORM**: Database ORM for working with PostgreSQL
3. **Zod**: Schema validation

The API endpoints follow RESTful conventions, serving JSON data for hotel information, rooms, packages, and other resources.

### Database Design

The database schema is defined in `shared/schema.ts` using Drizzle ORM, with tables for:

1. **Rooms**: Hotel room offerings with details like price, description, features
2. **Packages**: Special hotel packages and offers
3. **Restaurants**: Dining options within the hotel

### Data Flow

1. **Frontend Requests**: React components use React Query to fetch data from API endpoints
2. **API Routes**: Express routes handle requests and return JSON responses
3. **Database Interactions**: API routes use Drizzle ORM to query and mutate data
4. **State Management**: Query results are cached and managed by React Query

## Key Components

### Frontend Components

1. **Layout Components**: 
   - `Navbar`: Navigation bar with links to different sections
   - `Footer`: Contact information and additional navigation links

2. **Page Components**:
   - `HomePage`: Main landing page showing all hotel sections
   - `NotFound`: 404 error page

3. **Feature Components**:
   - `Hero`: Main landing section with call-to-action buttons
   - `Rooms`: Display of available hotel rooms
   - `Dining`: Hotel restaurants and food options
   - `Packages`: Special package offerings
   - `Events`: Event spaces and services
   - `BookingCTA`: Call-to-action for booking

4. **UI Components**:
   - Extensive set of shadcn/ui components (buttons, cards, forms, etc.)
   - Custom container and utility components

### Backend Components

1. **API Routes**: Defined in `server/routes.ts`, providing endpoints for hotel information, rooms, packages, etc.
2. **Storage Interface**: Defined in `server/storage.ts` with an in-memory implementation
3. **Vite Integration**: Server-side rendering and development support

## External Dependencies

### Production Dependencies

1. **UI Components**: Radix UI primitives, Framer Motion, shadcn/ui
2. **Data Management**: React Query, Zod for validation
3. **Database**: Drizzle ORM, ready for PostgreSQL integration
4. **Server**: Express.js

### Development Dependencies

1. **Build Tools**: Vite, TypeScript, ESBuild
2. **Styling**: Tailwind CSS, PostCSS

## Deployment Strategy

The application is configured for deployment on Replit with:

1. **Build Process**: 
   - `npm run build`: Builds both client and server code
   - Vite is used to bundle the frontend
   - ESBuild is used to bundle the server

2. **Runtime Configuration**:
   - The server listens on port 5000
   - Environment variables control database connections and other configuration

3. **Database**:
   - The project is set up to use PostgreSQL via the Replit PostgreSQL module
   - Drizzle ORM is used for database schema definition and queries
   - Schema migrations can be applied with `npm run db:push`

## Development Workflow

1. **Local Development**:
   - Run `npm run dev` to start the development server
   - This starts both the backend API and the frontend development server with HMR

2. **Database Schema Updates**:
   - Modify schemas in `shared/schema.ts`
   - Run `npm run db:push` to apply changes to the database

3. **Adding New Features**:
   - Frontend: Add components in the appropriate directories, then import them into pages
   - Backend: Add routes to `server/routes.ts` and corresponding data schemas as needed

## Next Steps

1. **Database Setup**: Complete the PostgreSQL integration using the provided Drizzle schema
2. **Authentication**: Implement user authentication for bookings and accounts
3. **Booking System**: Develop a complete booking system with calendar integration
4. **Admin Panel**: Create an admin interface for managing hotel content
5. **Payment Processing**: Integrate a payment gateway for bookings

The application is structured to be easily extendable with these additional features while maintaining a clean separation of concerns.