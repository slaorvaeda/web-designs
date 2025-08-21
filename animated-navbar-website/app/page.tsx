"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Link } from "lucide-react"

export default function Home() {
  const [isNavVisible, setIsNavVisible] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isNavToggled, setIsNavToggled] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeMobileSection, setActiveMobileSection] = useState<"left" | "center" | "right">("center")

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false)
    }, 300)

    const navTimer = setTimeout(() => {
      setIsNavVisible(true)
    }, 600)

    const handleScroll = () => {
      const heroHeight = window.innerHeight
      const scrollY = window.scrollY
      const shouldHide = scrollY > heroHeight * 0.8
      setIsScrolled(shouldHide)

      if (shouldHide && isNavToggled) {
        setIsNavToggled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      clearTimeout(loadingTimer)
      clearTimeout(navTimer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isNavToggled])

  const toggleNav = () => {
    setIsNavToggled(!isNavToggled)
  }

  const handleMobileSectionClick = (section: "left" | "center" | "right") => {
    setActiveMobileSection(section)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Desktop Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-4 hidden md:block">
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative overflow-hidden transition-all duration-1000 ease-out ${
              isLoading ? "w-0 h-0 opacity-0" : isNavVisible ? "w-full h-16 opacity-100" : "w-0 h-0 opacity-0"
            }`}
          >
            <div
              className={`flex items-center justify-between relative transform transition-all duration-1000 ease-out h-full ${
                isLoading ? "scale-x-0 scale-y-0" : isNavVisible ? "scale-x-100 scale-y-100" : "scale-x-0 scale-y-0"
              }`}
              style={{ transformOrigin: "center center" }}
            >
              {/* Logo Section - Professional glass design */}
              <div className="logo-section relative z-30">
                <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl px-4 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/25 h-12 flex items-center">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">L</span>
                    </div>
                    <span className="ml-3 text-lg font-bold text-slate-800">Logo</span>
                  </div>
                </div>
              </div>

              {/* Navigation Links Section - Professional glass design */}
              <div
                className={`nav-links-section hidden md:flex transition-all duration-500 ease-in-out absolute left-1/2 transform z-20 -translate-x-1/2 ${
                  isScrolled && !isNavToggled ? "translate-x-[200%] opacity-0 pointer-events-none" : ""
                }`}
              >
                <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/25 h-12 flex items-center">
                  <div className="flex items-center space-x-6">
                    <a
                      href="#home"
                      className="text-slate-700 hover:text-blue-600 transition-all duration-200 font-medium px-3 py-1 rounded-xl hover:bg-white/30"
                    >
                      Home
                    </a>
                    <a
                      href="#about"
                      className="text-slate-700 hover:text-blue-600 transition-all duration-200 font-medium px-3 py-1 rounded-xl hover:bg-white/30"
                    >
                      About
                    </a>
                    <a
                      href="#services"
                      className="text-slate-700 hover:text-blue-600 transition-all duration-200 font-medium px-3 py-1 rounded-xl hover:bg-white/30"
                    >
                      Services
                    </a>
                    <a
                      href="#contact"
                      className="text-slate-700 hover:text-blue-600 transition-all duration-200 font-medium px-3 py-1 rounded-xl hover:bg-white/30"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>

              {/* Get Started Section - Professional glass design */}
              <div
                className={`get-started-section transition-all duration-700 ease-in-out delay-100 z-10 ${
                  isScrolled && !isNavToggled ? "transform translate-x-[200%] opacity-0 pointer-events-none" : ""
                }`}
              >
                <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-1 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/25 h-12 flex items-center">
                  <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-4 py-2 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg border-0 font-medium text-sm h-10">
                    Get Started
                  </Button>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <div className="bg-white/50 backdrop-blur-xl border border-white/30 rounded-2xl p-2 shadow-lg h-12 flex items-center">
                  <button
                    onClick={toggleNav}
                    className="text-slate-700 hover:text-blue-600 transition-colors duration-200 p-1"
                  >
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50  p-4  md:hidden ">
        <div className="max-w-[320px] mx-auto ">
          <div className="relative max-h-[65px] bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 ">
          <div className="w-full h-full absolute top-0 left-0 overflow-hidden rounded-3xl">
            <div
              className="absolute top-0 h-full transition-all duration-500 ease-in-out z-1 pointer-events-none"
              style={{
                left: activeMobileSection === "left" ? "11%" : activeMobileSection === "center" ? "53%" : "90%",
                transform: "translateX(-50%)",
                width: "140px",
                height: "150%",
                top: "-40px",
                background: "linear-gradient(135deg, rgba(245, 245, 255, 0.3), rgba(99, 102, 241, 0.2))",
                borderRadius: "24px",
                border: "1px solid rgba(255, 255, 255, 0.4)",
                clipPath: "ellipse(45px 45px at 50% 50%)",
              }}
            />
            </div>
            <div className="flex items-center justify-between relative z-10 -translate-y-5">
              <button
                onClick={() => handleMobileSectionClick("left")}
                className={`transition-all duration-500 hover:scale-105 rounded-2xl p-2 ${
                  activeMobileSection === "left" ? "transform -translate-y-3" : ""
                }`}
              >
                <div className="w-15 h-15 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">

                  <span className="text-white font-bold text-lg">S</span>
                </div>
              </button>

              <button
                onClick={() => handleMobileSectionClick("center")}
                className={`transition-all duration-500 hover:scale-105 rounded-2xl p-2 ${
                  activeMobileSection === "center" ? "transform -translate-y-3" : ""
                }`}
              >
                <div className="w-15 h-15 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                  <a href="#home">
                  <svg className="w-6 h-6 text-slate-700 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                </a>
                
                </div>
              </button>

              <button
                onClick={() => {
                  handleMobileSectionClick("right")
                  toggleMobileMenu()
                }}
                className={`transition-all scale-150 duration-500 hover:scale-105 rounded-2xl p-2 ${
                  activeMobileSection === "right" ? "transform -translate-y-3 " : ""
                }`}
              >
                <div className="bg-white/30 backdrop-blur-xl border border-white/40 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/40">
                  <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={toggleMobileMenu}></div>
          <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2">
            <div className="grid grid-cols-2 gap-4 p-4">
              {/* Home Button */}
              <button
                onClick={() => {
                  document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })
                  setIsMobileMenuOpen(false)
                }}
                className="bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/40 flex flex-col items-center justify-center w-20 h-20"
              >
                <svg className="w-6 h-6 text-slate-700 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span className="text-xs text-slate-700 font-medium">Home</span>
              </button>

              {/* About Button */}
              <button
                onClick={() => {
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                  setIsMobileMenuOpen(false)
                }}
                className="bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/40 flex flex-col items-center justify-center w-20 h-20"
              >
                <svg className="w-6 h-6 text-slate-700 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-xs text-slate-700 font-medium">About</span>
              </button>

              {/* Services Button */}
              <button
                onClick={() => {
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                  setIsMobileMenuOpen(false)
                }}
                className="bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/40 flex flex-col items-center justify-center w-20 h-20"
              >
                <svg className="w-6 h-6 text-slate-700 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <span className="text-xs text-slate-700 font-medium">Services</span>
              </button>

              {/* Contact Button */}
              <button
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  setIsMobileMenuOpen(false)
                }}
                className="bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/40 flex flex-col items-center justify-center w-20 h-20"
              >
                <svg className="w-6 h-6 text-slate-700 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7 7-7 7" />
                </svg>
                <span className="text-xs text-slate-700 font-medium">Contact</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {isScrolled && !isNavToggled && (
        <button
          onClick={toggleNav}
          className="fixed top-6 right-6 z-50 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/25 hover:scale-110 hidden md:block"
        >
          <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-24 md:pb-0 min-h-screen flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Welcome to Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Amazing Website
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Experience the smooth animations and beautiful glass morphism design that makes your journey unforgettable.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Explore Now
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">About Us</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We create beautiful, animated websites with smooth transitions and engaging glass morphism designs. Our
              navigation system demonstrates advanced CSS animations and responsive design principles.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/30 backdrop-blur-xl border border-white/30 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/40">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Web Design</h3>
                <p className="text-slate-600">Beautiful, responsive designs that engage your users.</p>
              </div>
              <div className="bg-white/30 backdrop-blur-xl border border-white/30 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/40">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Animation</h3>
                <p className="text-slate-600">Smooth animations that bring your website to life.</p>
              </div>
              <div className="bg-white/30 backdrop-blur-xl border border-white/30 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/40">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Development</h3>
                <p className="text-slate-600">Modern development practices for optimal performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 pb-32 md:pb-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Contact Us</h2>
            <p className="text-lg text-slate-600 mb-8">Ready to start your project? Get in touch with us today.</p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Contact Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
