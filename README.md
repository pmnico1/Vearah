# Vearah

A modern, interactive website for Vearah - a design and development agency that helps visionary companies design the future. Built with Next.js 15, React 19, and cutting-edge web technologies.

## 🚀 Features

- **Interactive 3D Hero Section** - Built with Three.js and React Three Fiber
- **Smooth Scrolling** - Powered by Lenis for buttery smooth scroll experience
- **Portfolio Showcase** - Interactive project gallery with scroll navigation
- **Process Visualization** - Animated process steps (Discover, Strategy, Design, Build)
- **Team Section** - Meet the team behind Vearah
- **Contact Form** - Get in touch with the agency
- **FAQ Section** - Common questions and answers
- **Responsive Design** - Optimized for all devices
- **Modern Animations** - GSAP-powered animations throughout

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Animations**: GSAP, Motion
- **Physics**: Matter.js
- **Smooth Scrolling**: Lenis
- **Icons**: Lucide React
- **Linting**: ESLint

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/vearah.git
cd vearah
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── assets/                # Static assets
│   └── svgs/              # SVG components
├── components/            # React components
│   ├── Contact/           # Contact form
│   ├── FAQ/               # FAQ section
│   ├── Footer/            # Site footer
│   ├── Header/            # Navigation header
│   ├── Hero/              # 3D hero section
│   ├── Intro/             # Introduction section
│   ├── Portfolio/         # Project showcase
│   ├── Process/           # Process visualization
│   ├── Promotion/         # Promotional content
│   ├── Service/           # Services section
│   └── Team/              # Team members
└── public/                # Static files
    └── images/            # Image assets
```

## 🎨 Key Components

### Hero Section

- Interactive 3D scene with Three.js
- Floating menu with smooth animations
- Keyboard interaction effects
- Orbit controls for 3D navigation

### Portfolio Section

- Scroll-based project navigation
- Intersection observer for animations
- Project cards with hover effects
- Client logos showcase
- Statistics frames

### Process Section

- Four-step process visualization
- Animated text effects
- Interactive process cards

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Performance Features

- **Next.js 15** - Latest performance optimizations
- **React 19** - Enhanced rendering performance
- **Tailwind CSS 4** - Optimized CSS framework
- **Code Splitting** - Automatic route-based splitting
- **Image Optimization** - Next.js Image component
- **Smooth Scrolling** - Hardware-accelerated animations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary to Vearah.

## 📞 Contact

For questions about this project, please contact the Vearah team through the contact form on the website.

---

Built with ❤️ by the Vearah team
