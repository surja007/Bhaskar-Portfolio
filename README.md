# Bhaskar Talukder - Portfolio

Modern full-stack developer portfolio featuring a custom Material Design 3-inspired dark theme, smooth animations, and dynamic content sections.

## Tech Stack

- **React 19** - Latest React with modern hooks
- **Vite 8** - Lightning-fast build tool
- **Tailwind CSS 4** - Custom design system with Material Design tokens
- **Framer Motion** - Smooth animations and transitions
- **EmailJS** - Serverless contact form integration

## Features

- 🎨 Custom dark theme with glass morphism effects
- ✨ Animated sections with scroll-based triggers
- 📱 Fully responsive design
- 📧 Working contact form with EmailJS
- 🚀 Optimized production builds
- 🎯 SEO-friendly meta tags

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/surja007/portfolio.git
cd portfolio

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

### Environment Variables

Create a `.env` file with your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Get your credentials from [EmailJS Dashboard](https://www.emailjs.com/).

### Development

```bash
npm run dev
```

Visit `http://localhost:5173` to view the site.

### Production Build

```bash
npm run build
npm run preview
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables in project settings
4. Deploy automatically on push

### Netlify

1. Connect your repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add environment variables

### Required Environment Variables

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

## Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── ...
│   ├── data/           # Static data files
│   │   ├── projects.js
│   │   ├── skills.js
│   │   ├── experience.js
│   │   └── certifications.js
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles & theme
├── .env                # Environment variables
├── vercel.json         # Vercel configuration
└── package.json        # Dependencies
```

## Customization

### Update Personal Information

Edit the data files in `src/data/`:
- `projects.js` - Your projects
- `skills.js` - Tech stack and skills
- `experience.js` - Work experience
- `certifications.js` - Certifications and achievements

### Update Components

Modify components in `src/components/` to change layout or content.

### Theme Customization

Edit `src/index.css` to modify colors, fonts, and design tokens:

```css
@theme {
  --color-primary: #a3a6ff;
  --color-secondary: #a28efc;
  --font-headline: 'Inter', sans-serif;
  /* ... */
}
```

## License

MIT License - feel free to use this template for your own portfolio.

## Contact

- 🌐 Portfolio: https://bhaskar-talukder.vercel.app
- 📧 Email: surjagaming0@gmail.com
- 💼 LinkedIn: [bhaskar-talukder](https://www.linkedin.com/in/bhaskar-talukder-0714792a2)
- 👨‍💻 GitHub: [@surja007](https://github.com/surja007)
