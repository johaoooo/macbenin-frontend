'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Menu, X, ShoppingBag, User, Sun, Moon, 
  Home, Store, BookOpen, Info, Phone
} from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Accueil', href: '/', icon: Home },
    { name: 'Boutique', href: '/shop', icon: Store },
    { name: 'Formations', href: '/formations', icon: BookOpen },
    { name: 'À propos', href: '/about', icon: Info },
    { name: 'Contact', href: '/contact', icon: Phone },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 dark:bg-gray-800/95 backdrop-blur-md shadow-sm' 
        : 'bg-white dark:bg-gray-800'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <img 
              src="/logo.png" 
              alt="MAC BENIN Logo" 
              className="w-28 h-28 object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-5">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-1.5 text-sm transition ${
                    isActive(item.href)
                      ? 'text-primary font-medium'
                      : 'text-gray-600 dark:text-gray-300 hover:text-primary'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>

          {/* Right Actions - Icônes supprimées */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="text-gray-500 hover:text-primary transition p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            
            <Link href="/cart" className="text-gray-500 hover:text-primary transition relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              <ShoppingBag size={18} />
              <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-primary rounded-full text-[8px] text-white flex items-center justify-center">0</span>
            </Link>
            
            <Link href="/login" className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary transition px-3 py-1.5">
              Connexion
            </Link>
            
            <Link
              href="/register"
              className="text-sm bg-primary text-white px-4 py-1.5 rounded-lg hover:bg-primaryDark transition"
            >
              S'inscrire
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button 
              onClick={toggleTheme} 
              className="text-gray-500 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 dark:border-gray-800">
            <div className="flex flex-col space-y-3">
              <div className="flex items-center gap-3 px-3 py-2 mb-2 border-b border-gray-100 dark:border-gray-800">
                <img 
                  src="/logo.png" 
                  alt="MAC BENIN Logo" 
                  className="w-28 h-28 object-contain"
                />
              </div>
              {menuItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-2 px-3 py-2 text-sm ${
                      isActive(item.href)
                        ? 'text-primary font-medium bg-primary/5 rounded-lg'
                        : 'text-gray-600 dark:text-gray-300'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
              <hr className="border-gray-100 dark:border-gray-800 my-2" />
              <Link href="/login" onClick={() => setIsOpen(false)} className="px-3 py-2 text-sm text-gray-600">
                Connexion
              </Link>
              <Link href="/register" onClick={() => setIsOpen(false)} className="mx-3 mt-2 bg-primary text-white px-4 py-2 rounded-lg text-sm text-center">
                S'inscrire
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
