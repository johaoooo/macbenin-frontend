'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Menu, X, Sun, Moon, 
  Home, Store, BookOpen, Info, Phone, Layers
} from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Accueil', href: '/', icon: Home },
    { name: 'Boutique', href: '/shop', icon: Store },
    { name: 'Nos filières', href: '/filieres', icon: Layers },
    { name: 'Formations', href: '/formations', icon: BookOpen },
    { name: 'À propos', href: '/about', icon: Info },
    { name: 'Contact', href: '/contact', icon: Phone },
  ]

  const isActive = (href: string) => pathname === href || pathname?.startsWith(href + '/')

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-blanc/95 dark:bg-noir/95 backdrop-blur-md shadow-sm'
        : 'bg-blanc dark:bg-noir'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">

          {/* Logo uniquement */}
          <Link href="/" className="flex items-center">
            <img 
              src="/afic.png" 
              alt="AFI Collection Logo" 
              className="h-12 w-auto object-contain" 
              onError={(e) => { e.currentTarget.style.display = 'none' }} 
            />
          </Link>

          <div className="hidden md:flex items-center gap-5">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <Link key={item.name} href={item.href} className={`flex items-center gap-1.5 text-sm transition ${
                  isActive(item.href) ? 'text-vert font-medium' : 'text-noir/70 dark:text-blanc/70 hover:text-vert'
                }`}>
                  <Icon className="w-3.5 h-3.5" /><span>{item.name}</span>
                </Link>
              )
            })}
          </div>

          {/* Right Actions - Panier supprimé */}
          <div className="hidden md:flex items-center gap-3">
            {/* Mode sombre/clair */}
            <button onClick={toggleTheme} className="text-noir/70 dark:text-blanc/70 hover:text-vert transition p-2 rounded-lg hover:bg-vert/10">
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            
            {/* Connexion */}
            <Link href="/login" className="text-sm text-noir/70 dark:text-blanc/70 hover:text-vert transition px-3 py-1.5">
              Connexion
            </Link>
            
            {/* Inscription */}
            <Link href="/register" className="text-sm bg-vert text-blanc px-4 py-1.5 rounded-lg hover:bg-vertFonce transition">
              S'inscrire
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button onClick={toggleTheme} className="text-noir/70 dark:text-blanc/70 p-2 rounded-lg hover:bg-vert/10">
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg text-noir/70 dark:text-blanc/70 hover:bg-vert/10">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 dark:border-gray-800">
            <div className="flex flex-col space-y-3">
              <div className="flex items-center gap-3 px-3 py-2 mb-2 border-b border-gray-100 dark:border-gray-800">
                <img src="/afic.png" alt="AFI Collection Logo" className="h-10 w-auto object-contain" />
              </div>
              {menuItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)} className={`flex items-center gap-2 px-3 py-2 text-sm ${
                    isActive(item.href) ? 'text-vert font-medium bg-vert/5 rounded-lg' : 'text-noir/70 dark:text-blanc/70'
                  }`}>
                    <Icon className="w-4 h-4" /><span>{item.name}</span>
                  </Link>
                )
              })}
              <hr className="border-gray-100 dark:border-gray-800 my-2" />
              <Link href="/login" onClick={() => setIsOpen(false)} className="px-3 py-2 text-sm text-noir/70 dark:text-blanc/70">Connexion</Link>
              <Link href="/register" onClick={() => setIsOpen(false)} className="mx-3 mt-2 bg-vert text-blanc px-4 py-2 rounded-lg text-sm text-center">S'inscrire</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
