# GenLayer Prediction Market

A modern, futuristic website showcasing GenLayer's AI-powered prediction market platform. Built with React, TypeScript, and Tailwind CSS.

## Overview

GenLayer brings intelligent contracts to prediction markets by integrating Large Language Models (LLMs) directly into blockchain consensus. This website demonstrates the core concepts of GenLayer's Optimistic Democracy consensus mechanism and how it enables real-time market resolution without centralized oracles.

## Features

- **AI-Powered Resolution**: Outcomes resolved through multi-LLM validation and Optimistic Democracy consensus
- **Real-Time Markets**: Markets self-settle by fetching and verifying outcomes directly from primary sources
- **Subjectivity Native**: Handle subjective outcomes with AI-native consensus for qualitative events
- **Modern UI**: Futuristic design with glowing borders, floating cards, and smooth animations
- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop

## Design Philosophy

The website follows a **Futuristic AI-Native** design aesthetic featuring:

- **Color Palette**: Deep indigo (#0F1419) background with cyan (#00D9FF) and purple (#8B5CF6) accents
- **Typography**: Space Grotesk for headlines (bold, geometric) and Inter for body text (clean, readable)
- **Visual Elements**: Glowing borders, floating cards, neon text effects, and smooth animations
- **Interactions**: Hover effects reveal additional information, animations respond to user intent

## Tech Stack

- **Frontend Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4 with custom animations
- **UI Components**: shadcn/ui component library
- **Build Tool**: Vite
- **Routing**: Wouter (lightweight client-side routing)
- **Icons**: Lucide React

## Project Structure

```
client/
├── public/           # Static configuration files
├── src/
│   ├── components/   # Reusable UI components
│   ├── pages/        # Page-level components
│   ├── contexts/     # React contexts
│   ├── lib/          # Utility helpers
│   ├── App.tsx       # Main app component with routing
│   ├── main.tsx      # React entry point
│   └── index.css     # Global styles and design tokens
├── index.html        # HTML template
└── package.json      # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

The development server will start at `http://localhost:3000`

## Pages

### Home Page

The main landing page featuring:

- **Hero Section**: Eye-catching headline with gradient text and call-to-action buttons
- **Features Section**: Three key features of GenLayer's intelligent contracts
- **How It Works**: Step-by-step explanation of the market creation and resolution process
- **Benefits Section**: Four key advantages of the platform
- **CTA Section**: Final call-to-action to launch the application
- **Footer**: Navigation links and company information

## Customization

### Color Scheme

Edit the CSS variables in `client/src/index.css`:

```css
:root {
  --primary: #00D9FF;           /* Cyan accent */
  --secondary: #8B5CF6;         /* Purple accent */
  --accent: #00D9FF;            /* Cyan highlight */
  --background: #0F1419;        /* Deep indigo */
  --foreground: #E8E8E8;        /* Light text */
}
```

### Typography

Fonts are loaded from Google Fonts in `client/index.html`:

- **Headlines**: Space Grotesk (bold, geometric)
- **Body**: Inter (clean, readable)

### Animations

Custom animations are defined in `client/src/index.css`:

- `.fade-in-up`: Fade in with upward movement
- `.slide-in`: Slide in from left
- `.pulse-glow`: Pulsing glow effect
- `.floating-card`: Hover effect with lift animation

## Performance Optimization

- Images are optimized and served from CDN
- CSS is minified and tree-shaken by Tailwind
- JavaScript is code-split by Vite
- No external API calls required for static content

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see LICENSE file for details

## Resources

- [GenLayer Official Website](https://www.genlayer.com)
- [GenLayer Documentation](https://docs.genlayer.com)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [shadcn/ui Components](https://ui.shadcn.com)

## Support

For questions or issues related to GenLayer, visit:

- [GenLayer Portal](https://portal.genlayer.foundation)
- [GenLayer Discord](https://discord.gg/genlayer)
- [GenLayer GitHub](https://github.com/genlayer)

---

Built with ❤️ for the GenLayer ecosystem
