# Hotel Royal Phoenix - Luxury Hotel Website

A stunning, premium hotel website built with modern web technologies, featuring a rich dark theme with royal colors, smooth animations, and luxurious visual effects.

## 🌟 Features

### Design & Aesthetics
- **Luxury Dark Theme**: Rich royal navy, purple, and gold color palette
- **Premium Typography**: Elegant fonts including Playfair Display and Cormorant Garamond
- **Stunning Visual Effects**: Glow effects, shimmer animations, and floating elements
- **Responsive Design**: Optimized for all devices from mobile to desktop

### Interactive Elements
- **Smooth Animations**: Framer Motion powered transitions and hover effects
- **Dynamic Navigation**: Sticky navbar with smooth scrolling to sections
- **Image Overlays**: Beautiful hover effects on all images
- **Premium Buttons**: Golden gradient buttons with hover animations

### Sections
- **Hero Section**: Full-screen welcome with animated background elements
- **Welcome**: Hotel introduction with feature highlights
- **Rooms & Suites**: Showcase of luxury accommodations
- **Dining**: Restaurant and culinary offerings
- **Packages**: Special stay packages and offers
- **Events**: Event spaces and celebration venues
- **Booking CTA**: Call-to-action for reservations

## 🚀 Technology Stack

### Frontend
- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework with custom luxury theme
- **Framer Motion**: Professional animations and transitions
- **Wouter**: Lightweight React router
- **React Query**: Data fetching and state management
- **Lucide React**: Beautiful icon library

### Backend
- **Express.js**: Node.js web framework
- **TypeScript**: Full-stack type safety
- **Drizzle ORM**: Modern TypeSQL ORM
- **Zod**: Schema validation

### Development Tools
- **Vite**: Fast build tool and development server
- **ESBuild**: Fast JavaScript bundler
- **PostCSS**: CSS processing
- **shadcn/ui**: High-quality component library

## 🎨 Design System

### Color Palette
- **Primary**: Deep royal navy (`240 75% 15%`)
- **Secondary**: Royal purple (`280 60% 20%`)
- **Accent**: Brilliant gold (`45 95% 65%`)
- **Background**: Rich dark (`16 24% 8%`)
- **Foreground**: Warm white (`45 100% 95%`)

### Custom CSS Classes
- `.bg-gradient-luxury`: Multi-color luxury gradient
- `.text-shadow-gold`: Golden text shadow effect
- `.glow-effect`: Subtle golden glow
- `.luxury-card`: Premium card styling with blur effects
- `.floating-animation`: Smooth floating animation

## 📱 Responsive Features

- **Mobile Navigation**: Collapsible menu with smooth transitions
- **Adaptive Layouts**: Grid systems that adapt to screen size
- **Touch-Friendly**: Optimized button sizes and touch targets
- **Performance**: Optimized images and lazy loading

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 20+ 
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd hotel-royal-phoenix

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production
```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## 🗂️ Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── home/       # Home page sections
│   │   │   ├── layout/     # Layout components (navbar, footer)
│   │   │   └── ui/         # shadcn/ui components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions and configurations
│   │   ├── pages/          # Page components
│   │   ├── providers/      # React context providers
│   │   └── index.css       # Global styles and custom CSS
│   └── index.html          # HTML entry point
├── server/                 # Backend Express application
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Data storage interface
│   └── vite.ts            # Vite integration
├── shared/                 # Shared types and schemas
│   └── schema.ts          # Database schemas and types
└── package.json           # Project dependencies and scripts
```

## 🎯 Key Components

### Hero Section
- Full-screen luxury experience
- Animated background elements
- Call-to-action buttons
- Smooth scroll integration

### Luxury Cards
- Glass morphism effect
- Hover animations
- Golden accents
- Premium typography

### Navigation
- Sticky header with backdrop blur
- Smooth scroll to sections
- Mobile-responsive menu
- Golden hover effects

## 🎨 Customization

### Colors
Modify the color palette in `client/src/index.css`:
```css
:root {
  --primary: 240 75% 15%;      /* Deep royal blue */
  --secondary: 280 60% 20%;    /* Royal purple */
  --accent: 45 95% 65%;        /* Brilliant gold */
  /* ... */
}
```

### Animations
Customize animations in the CSS components section:
```css
.floating-animation {
  animation: float 6s ease-in-out infinite;
}
```

### Typography
Font families are loaded dynamically in `client/src/pages/home.tsx`

## 🚀 Deployment

The project is optimized for deployment on modern platforms:

- **Replit**: Ready for instant deployment
- **Vercel**: Zero-config deployment
- **Netlify**: Static site deployment
- **Railway**: Full-stack deployment

## 📄 API Endpoints

- `GET /api/hotel-info` - Hotel information
- `GET /api/rooms` - Available rooms and suites
- `GET /api/packages` - Special packages and offers

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📝 Development Notes

### Performance Optimizations
- Image optimization with proper sizing
- Lazy loading for images
- CSS-in-JS with Tailwind for optimal bundle size
- Component code splitting

### Accessibility
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Proper color contrast ratios

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/luxury-enhancement`)
3. Commit your changes (`git commit -m 'Add luxury enhancement'`)
4. Push to the branch (`git push origin feature/luxury-enhancement`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Design inspiration from luxury hotel websites
- Icons by Lucide React
- Fonts from Google Fonts
- Images from Unsplash

---

**Hotel Royal Phoenix** - Where Luxury Meets Excellence ✨