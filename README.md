# 3D Book Slider

A stunning 3D interactive book slider built with React Three Fiber, featuring realistic page-turning animations and immersive 3D effects. This project showcases advanced 3D web development techniques with smooth animations and responsive design.

## ✨ Features

- **3D Book Animation**: Realistic page-turning effects with bone-based skeletal animation
- **Interactive Navigation**: Click on pages or use navigation buttons to flip through the book
- **Responsive Design**: Optimized for desktop and mobile devices
- **Audio Feedback**: Page-flip sound effects for enhanced user experience
- **Smooth Transitions**: Eased animations with customizable timing and curves
- **Dynamic Lighting**: Professional lighting setup with shadows and environment mapping
- **Floating Animation**: Subtle floating motion for added visual appeal

## 🚀 Technologies Used

- **React** - Frontend framework
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Jotai** - Primitive and flexible state management
- **Vite** - Fast build tool and development server

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/AliyanJabbar/3D-Book-Slider.git
cd 3d-book-slider
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── App.tsx          # Main application component
│   ├── Experience.tsx   # 3D scene setup with lighting and controls
│   ├── Book.tsx         # 3D book component with page animations
│   ├── UI.tsx           # User interface overlay with navigation
│   ├── Pictures.ts      # Image configuration and page mapping
│   └── Atom.ts          # State management atoms
├── public/
│   ├── textures/        # Book page textures and images
│   ├── audios/          # Sound effects
│   └── images/          # UI assets
└── ...
```

## 🎮 Usage

### Navigation Controls
- **Cover Button**: Jump to the book cover
- **Prev/Next Buttons**: Navigate through pages sequentially
- **Back Cover Button**: Jump to the back cover
- **Direct Page Click**: Click on any visible page to navigate to it
- **Mouse Controls**: Orbit around the book using mouse drag

### Customization

#### Adding New Pages
1. Add your images to the `public/textures/` directory
2. Update the `pictures` array in `src/components/Pictures.ts`:

```typescript:src/components/Pictures.ts
export const pictures = [
  "P1", "P2", "P3", // Add your image names here
  "your-new-image",
  // ...
];
```

#### Adjusting Animation Settings
Modify the animation parameters in `src/components/Book.tsx`:

```typescript:src/components/Book.tsx
const easingFactor = 0.5; // Page turning speed
const insideCurveStrength = 0.18; // Inner curve intensity
const outsideCurveStrength = 0.05; // Outer curve intensity
```

#### Customizing UI Styles
The UI uses Tailwind CSS classes. Modify styles in `src/components/UI.tsx` or extend the Tailwind configuration in `tailwind.config.js`.

## 🎨 Features Breakdown

### 3D Book Rendering
- **Skeletal Animation**: Each page uses bone-based animation for realistic bending
- **Multi-material Support**: Different materials for covers, pages, and textures
- **Dynamic Geometry**: Procedurally generated page geometry with proper UV mapping

### Interactive Elements
- **Hover Effects**: Pages glow when hovered
- **Click Handlers**: Intuitive page navigation through direct interaction
- **Cursor Changes**: Visual feedback for interactive elements

### Performance Optimizations
- **Texture Preloading**: All textures are preloaded for smooth experience
- **Frustum Culling**: Disabled for pages to prevent rendering issues
- **Efficient State Management**: Minimal re-renders with Jotai atoms

## 🔧 Configuration

### Camera Settings
Adjust camera position and field of view in `src/App.tsx`:

```typescript:src/App.tsx
<Canvas shadows camera={{
  position: [-0.5, 1, window.innerWidth > 800 ? 4 : 9],
  fov: 45,
}}>
```

### Lighting Setup
Modify lighting in `src/components/Experience.tsx`:

```typescript:src/components/Experience.tsx
<directionalLight
  position={[2, 5, 2]}
  intensity={2.5}
  castShadow
/>
```

## 📱 Responsive Design

The application is fully responsive with:
- Adaptive camera positioning based on screen size
- Responsive UI elements with Tailwind breakpoints
- Optimized text sizing for different devices
- Touch-friendly navigation controls

## 🎵 Audio Integration

Page-flip sound effects are automatically played when navigating between pages. Audio files should be placed in the `public/audios/` directory.

## 🚀 Deployment

Build the project for production:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 Open Source

This project is open source and available for all developers just clone this repo and you are free to use it.

## 🙏 Acknowledgments

- Three.js community for excellent 3D web graphics
- React Three Fiber team for the amazing React integration
- Tailwind CSS for the utility-first CSS framework

---

**Built with ❤️ by [Aliyan Jabbar](https://aliyan-jabbar-portfolio.vercel.app/)**
