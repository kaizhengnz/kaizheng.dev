import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-indigo-600">
              kaizheng.dev
            </div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-indigo-600 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-indigo-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-gray-700 hover:text-indigo-600 transition-colors"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-indigo-600 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-indigo-600 transition-colors"
              >
                Contact
              </button>
            </div>
            <button className="md:hidden text-gray-700">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 kaizheng.dev. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

