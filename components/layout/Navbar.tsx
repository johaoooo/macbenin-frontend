'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Menu, X, Sun, Moon, 
  LayoutDashboard, ShoppingBag, Layers, GraduationCap, 
  Info, PhoneCall, User, LogIn, Globe
} from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()
  const { language, toggleLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: t('nav.home'), href: '/', icon: LayoutDashboard },
    { name: t('nav.shop'), href: '/shop', icon: ShoppingBag },
    { name: t('nav.sectors'), href: '/filieres', icon: Layers },
    { name: t('nav.trainings'), href: '/formations', icon: GraduationCap },
    { name: t('nav.about'), href: '/about', icon: Info },
    { name: t('nav.contact'), href: '/contact', icon: PhoneCall },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname?.startsWith(href + '/') || pathname === href
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-blanc/98 dark:bg-noir/98 backdrop-blur-md shadow-lg'
        : 'bg-blanc dark:bg-noir shadow-sm'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-vert via-jaune to-rouge rounded-lg blur opacity-0 group-hover:opacity-50 transition duration-500" />
            <img 
              src="/afic.png" 
              alt="AFI Collection Logo" 
              className="relative h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              onError={(e) => { e.currentTarget.style.display = 'none' }} 
            />
          </Link>

          {/* Desktop Menu - ESPACEMENT AUGMENTÉ */}
          <div className="hidden md:flex items-center gap-4">
            {menuItems.map((item) => {
              const Icon = item.icon
              const active = isActive(item.href)
              const isHovered = hoveredItem === item.name
              const showText = active || isHovered
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className={`relative px-4 py-2.5 rounded-xl transition-all duration-300 ${
                    active 
                      ? 'text-vert bg-vert/10 shadow-sm' 
                      : 'text-noir/60 dark:text-blanc/60 hover:text-vert hover:bg-vert/5'
                  }`}>
                    <div className="flex items-center gap-0 overflow-hidden transition-all duration-300">
                      <Icon className={`w-5 h-5 transition-all duration-300 ${showText ? 'scale-110' : ''}`} />
                      <span className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${
                        showText ? 'w-auto ml-2.5 opacity-100' : 'w-0 opacity-0'
                      }`}>
                        <span className={`text-sm font-medium ${active ? 'text-vert' : ''}`}>
                          {item.name}
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Traduction FR/EN */}
            <button 
              onClick={toggleLanguage}
              className="px-3 py-2 rounded-xl text-sm font-medium text-noir/70 dark:text-blanc/70 hover:text-vert hover:bg-vert/5 transition-all duration-300 flex items-center gap-1.5"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'fr' ? 'FR' : 'EN'}</span>
            </button>
            
            {/* Mode sombre/clair */}
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-xl text-noir/70 dark:text-blanc/70 hover:text-vert hover:bg-vert/5 transition-all duration-300"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            
            {/* Connexion */}
            <Link 
              href="/login" 
              className="px-4 py-2 rounded-xl text-sm font-medium text-noir/70 dark:text-blanc/70 hover:text-vert hover:bg-vert/5 transition-all duration-300"
            >
              {t('auth.login')}
            </Link>
            
            {/* Inscription */}
            <Link 
              href="/register" 
              className="px-4 py-2 rounded-xl text-sm font-medium bg-vert text-blanc hover:bg-vertFonce transition-all duration-300 shadow-md"
            >
              {t('auth.register')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button 
              onClick={toggleLanguage}
              className="p-2 rounded-xl text-noir/70 dark:text-blanc/70 hover:text-vert hover:bg-vert/10 transition-all duration-300"
            >
              <Globe className="w-4 h-4" />
            </button>
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-xl text-noir/70 dark:text-blanc/70 hover:text-vert hover:bg-vert/10 transition-all duration-300"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 rounded-xl text-noir/70 dark:text-blanc/70 hover:text-vert hover:bg-vert/10 transition-all duration-300"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 border-t border-gray-100 dark:border-gray-800 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon
              const active = isActive(item.href)
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all duration-300 ${
                    active 
                      ? 'text-vert font-semibold bg-vert/10' 
                      : 'text-noir/70 dark:text-blanc/70 hover:text-vert hover:bg-vert/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
            <div className="pt-3 mt-3 border-t border-gray-100 dark:border-gray-800">
              <Link 
                href="/login" 
                onClick={() => setIsOpen(false)} 
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-noir/70 dark:text-blanc/70 hover:text-vert hover:bg-vert/5 transition-all duration-300"
              >
                <LogIn className="w-4 h-4" />
                <span>{t('auth.login')}</span>
              </Link>
              <Link 
                href="/register" 
                onClick={() => setIsOpen(false)} 
                className="flex items-center justify-center gap-2 mt-2 mx-4 bg-vert text-blanc px-4 py-3 rounded-xl text-sm font-medium hover:bg-vertFonce transition-all duration-300"
              >
                <User className="w-4 h-4" />
                <span>{t('auth.register')}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
