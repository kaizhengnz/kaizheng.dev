# kaizheng.dev

A modern, responsive personal portfolio website built with React and TypeScript.

## 🚀 Features

- **Modern Stack**: Built with Vite, React, and TypeScript for optimal performance
- **Responsive Design**: Fully responsive layout that works on all devices
- **Beautiful UI**: Styled with Tailwind CSS for a clean and modern look
- **Smooth Animations**: Custom CSS animations and transitions
- **SEO Friendly**: Semantic HTML structure for better search engine optimization

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Package Manager**: npm

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/kaizhengnz/kaizheng.dev.git
cd kaizheng.dev
```

2. Install dependencies:
```bash
npm install
```

## 🏃 Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 🏗️ Build

Build the project for production:

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## 📁 Project Structure

```
kaizheng.dev/
├── src/
│   ├── components/      # React components
│   │   ├── Hero.tsx     # Hero section
│   │   ├── About.tsx    # About section
│   │   ├── Portfolio.tsx # Portfolio section
│   │   ├── Services.tsx # Services section
│   │   └── Contact.tsx  # Contact section
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## 🎨 Customization

### Colors

The color scheme can be customized in `tailwind.config.js`. The primary color is indigo (`indigo-600`).

### Content

Update the content in the respective component files:
- `src/components/Hero.tsx` - Hero section content
- `src/components/About.tsx` - About section content
- `src/components/Portfolio.tsx` - Portfolio projects
- `src/components/Services.tsx` - Services and pricing
- `src/components/Contact.tsx` - Contact information

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and configure the build settings

### Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### GitHub Pages

1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Deploy: `npm run deploy`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Kai Zheng**

- Website: [kaizheng.dev](https://kaizheng.dev)
- GitHub: [@kaizhengnz](https://github.com/kaizhengnz)
- LinkedIn: [kaizheng2020](https://www.linkedin.com/in/kaizheng2020/)
- Email: kaizhengnz@gmail.com

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/)
