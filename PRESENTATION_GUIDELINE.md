# Oasis Pets - Website Presentation Guideline

## 🎯 Project Overview

**Oasis Pets** is a modern, responsive pet adoption website built with React.js and Vite, featuring a clean Microsoft-style design system. The website connects rescued animals with loving families while promoting animal welfare awareness.

---

## 🚀 How to Run the Website

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Setup Instructions

1. **Navigate to project directory:**

   ```bash
   cd pet-adoption
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start development server:**

   ```bash
   npm run dev
   ```

4. **Access the website:**
   - Open your browser
   - Go to `http://localhost:5173/`
   - The website will auto-reload when you make changes

---

## 📱 Website Features & Pages

### 1. **Home Page** (`/`)

**Key Elements to Highlight:**

- **Hero Section**: Compelling tagline "You can't buy love, but you can rescue it"
- **Animated Statistics**: 500+ Pets Rescued, 300+ Happy Adoptions, 50+ Volunteers
- **Call-to-Action Buttons**: "Bring Home Love" and "Learn more of us"
- **About Preview**: Mission statement and organization story
- **Pet Gallery**: Featured adoptable pets with filtering

**Demo Points:**

- Show the animated counters
- Demonstrate the responsive design (resize browser window)
- Click through the CTA buttons

### 2. **Our Story Page** (`/story`)

**Key Elements to Highlight:**

- **Hero Section**: "50 abandoned animals. Left behind, forgotten. What would you do?"
- **Mission Statement**: Rescue, rehabilitate, and rehome abandoned animals
- **Vision**: A future where every animal has a loving home
- **Problem Statement**: Scale of animal abandonment
- **What We Do**: 6 key activities (Rescue, Medical Care, Love, Find Homes, Build Community, Educate)
- **How You Can Help**: 5 ways to contribute

**Demo Points:**

- Scroll through the story sections
- Show the emotional impact of the content
- Highlight the call-to-action buttons

### 3. **Adopt Page** (`/adopt`)

**Key Elements to Highlight:**

- **Pet Gallery**: 12 adoptable pets (Dogs and Cats)
- **Filter System**: Filter by "All", "Dogs", or "Cats"
- **Pet Cards**: Each showing name, age, breed, and type
- **Interactive Features**: Hover effects and smooth transitions

**Demo Points:**

- Show the filtering functionality
- Click through different pet cards
- Demonstrate the responsive grid layout

### 4. **Navigation & User Experience**

**Key Elements to Highlight:**

- **Header**: Clean logo, navigation menu, Donate and Sign Up buttons
- **Mobile Menu**: Hamburger menu for mobile devices
- **Footer**: Contact info, social links, newsletter signup
- **Modals**: Donation modal and authentication modal

**Demo Points:**

- Show desktop navigation
- Demonstrate mobile menu (resize to mobile view)
- Test the donation modal
- Show footer links and newsletter signup

---

## 🎨 Design & Technical Features

### Design System

- **Microsoft Fluent Design**: Clean, professional aesthetic
- **Typography**: Segoe UI font family
- **Color Scheme**: Professional blues, whites, and accent colors
- **Spacing**: Consistent padding and margins
- **Icons**: Emoji-based icons for accessibility

### Technical Implementation

- **React.js**: Modern component-based architecture
- **React Router**: Client-side routing
- **Vite**: Fast development server and build tool
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **Responsive Design**: Mobile-first approach
- **Accessibility**: ARIA labels and semantic HTML

### Performance Features

- **Optimized Images**: All images are web-optimized
- **Fast Loading**: Vite's development server for quick reloads
- **Smooth Animations**: CSS transitions and React CountUp for statistics
- **Mobile Optimization**: Touch-friendly interface

---

## 🔧 Troubleshooting Guide

### Common Issues & Solutions

**Website won't start:**

- Ensure Node.js is installed: `node --version`
- Check if dependencies are installed: `npm install`
- Try clearing npm cache: `npm cache clean --force`

**Port already in use:**

- Kill process on port 5173: `npx kill-port 5173`
- Or use different port: `npm run dev -- --port 3000`

**Images not loading:**

- Ensure images are in the `public/images/` folder
- Check file names match exactly (case-sensitive)
- Verify image paths in components

**Styling issues:**

- Clear browser cache (Ctrl+F5)
- Check browser developer tools for CSS errors
- Ensure all CSS files are properly imported

---

## 📊 Key Metrics to Mention

- **12 Adoptable Pets** currently featured
- **3 Main Pages** (Home, Story, Adopt)
- **Responsive Design** for all device sizes
- **Modern Tech Stack** (React.js, Vite, CSS3)
- **Accessibility Compliant** with ARIA labels
- **Fast Performance** with optimized assets
