# Oasis Pets - Pet Adoption Website

A clean, Microsoft-style pet adoption website built with React.js and Vite.

## Features

- **Clean Microsoft-style Design**: Professional, minimalist interface with proper typography and spacing
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Pet Gallery**: Interactive grid showing adoptable pets with filtering options
- **Category Filters**: Filter pets by type (All, Dogs, Cats)
- **Modern Components**: Built with React functional components and hooks
- **Optimized Images**: All pet images are organized and optimized for web

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header with logo and menu
│   ├── Hero.jsx            # Hero section with main call-to-action
│   ├── PetGrid.jsx         # Pet gallery with filtering
│   ├── PetCard.jsx         # Individual pet card component
│   └── Footer.jsx          # Footer with links and newsletter signup
├── App.jsx                 # Main app component
├── App.css                 # Main styles with Microsoft design system
└── index.css               # Base styles and resets

public/
└── images/                 # All pet images organized here
    ├── Bacolod-1.png
    ├── Bacolod-2.png
    ├── Bacolod-3.png
    ├── Bacolod-4.png
    ├── Bacolod-5.png
    ├── image 1.png
    ├── image 2.png
    ├── image 3.png
    ├── image 4.png
    ├── image 5.png
    ├── image 6.png
    └── 24799567.png
```

## Getting Started

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Start development server**:

   ```bash
   npm run dev
   ```

3. **Open your browser** and visit the local development URL (usually `http://localhost:5173`)

## Design Features

- **Microsoft Fluent Design**: Clean typography using Segoe UI font family
- **Consistent Color Palette**: Professional grays, blues, and accent colors
- **Proper Spacing**: 8px grid system for consistent spacing
- **Hover Effects**: Subtle animations and transitions
- **Accessibility**: Proper focus states and semantic HTML
- **Mobile-First**: Responsive design that works on all screen sizes

## Pet Data

The website includes 12 adoptable pets with:

- Names and photos
- Age and breed information
- Type classification (dog/cat)
- Interactive "Adopt Me" buttons

## Customization

To add more pets or modify the design:

1. **Add new pets**: Edit the `pets` array in `PetGrid.jsx`
2. **Change colors**: Modify CSS custom properties in `App.css`
3. **Update content**: Edit text content in individual component files
4. **Add new images**: Place images in `public/images/` and reference them in the pet data

## Technologies Used

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **CSS3**: Modern styling with Flexbox and Grid
- **Responsive Design**: Mobile-first approach

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

Built with ❤️ for pet adoption awareness
