'use client'
import { createContext, useContext, useState, useEffect } from 'react'

type Language = 'fr' | 'en'

interface Translations {
  [key: string]: {
    fr: string
    en: string
  }
}

const translations: Translations = {
  // Navbar
  'nav.home': { fr: 'Accueil', en: 'Home' },
  'nav.shop': { fr: 'Boutique', en: 'Shop' },
  'nav.sectors': { fr: 'Nos filières', en: 'Our sectors' },
  'nav.trainings': { fr: 'Formations', en: 'Trainings' },
  'nav.about': { fr: 'À propos', en: 'About' },
  'nav.contact': { fr: 'Contact', en: 'Contact' },
  
  // Auth
  'auth.login': { fr: 'Connexion', en: 'Login' },
  'auth.register': { fr: 'S\'inscrire', en: 'Sign up' },
  'auth.logout': { fr: 'Déconnexion', en: 'Logout' },
  'auth.email': { fr: 'Email', en: 'Email' },
  'auth.password': { fr: 'Mot de passe', en: 'Password' },
  'auth.confirm_password': { fr: 'Confirmer le mot de passe', en: 'Confirm password' },
  'auth.forgot_password': { fr: 'Mot de passe oublié ?', en: 'Forgot password?' },
  'auth.no_account': { fr: 'Pas encore de compte ?', en: 'No account yet?' },
  'auth.have_account': { fr: 'Déjà un compte ?', en: 'Already have an account?' },
  
  // Hero
  'hero.title': { fr: 'L\'art béninois, tissé à la main.', en: 'Beninese art, handwoven.' },
  'hero.subtitle': { fr: 'Sacs macramés, tenues traditionnelles et formations artisanales — 100% fait main, 100% béninois.', en: 'Macrame bags, traditional outfits and craft training — 100% handmade, 100% Beninese.' },
  'hero.shop': { fr: 'Découvrir la boutique', en: 'Discover the shop' },
  'hero.trainings': { fr: 'Nos formations', en: 'Our trainings' },
  
  // Stats
  'stats.years': { fr: 'Années d\'expertise', en: 'Years of expertise' },
  'stats.students': { fr: 'Personnes formées', en: 'People trained' },
  'stats.products': { fr: 'Produits vendus', en: 'Products sold' },
  'stats.rating': { fr: 'Note moyenne', en: 'Average rating' },
  
  // Sections
  'sections.assets': { fr: 'Nos atouts', en: 'Our assets' },
  'sections.why': { fr: 'Pourquoi nous sommes reconnus', en: 'Why we are recognized' },
  'sections.categories': { fr: 'Parcourir par catégorie', en: 'Browse by category' },
  'sections.categories_desc': { fr: 'Collections et formations au bout des doigts', en: 'Collections and trainings at your fingertips' },
  'sections.products': { fr: 'Produits phares', en: 'Featured products' },
  'sections.products_desc': { fr: 'Les créations les plus appréciées', en: 'The most appreciated creations' },
  'sections.services': { fr: 'Services', en: 'Services' },
  'sections.services_desc': { fr: 'Une expérience client optimale', en: 'An optimal customer experience' },
  
  // Features
  'features.certified': { fr: 'Formation certifiante', en: 'Certified training' },
  'features.certified_desc': { fr: 'Des programmes complets avec certificat reconnu', en: 'Complete programs with recognized certificate' },
  'features.handmade': { fr: 'Fait main avec passion', en: 'Handmade with passion' },
  'features.handmade_desc': { fr: 'Chaque pièce est unique et réalisée par des artisans experts', en: 'Each piece is unique and made by expert artisans' },
  'features.international': { fr: 'Rayonnement international', en: 'International reach' },
  'features.international_desc': { fr: 'Des produits exportés dans plus de 10 pays', en: 'Products exported to more than 10 countries' },
  
  // Services
  'services.secure': { fr: 'Paiement sécurisé', en: 'Secure payment' },
  'services.secure_desc': { fr: 'Mobile Money & Cartes bancaires', en: 'Mobile Money & Bank cards' },
  'services.delivery': { fr: 'Livraison rapide', en: 'Fast delivery' },
  'services.delivery_desc': { fr: '48h à Cotonou', en: '48h in Cotonou' },
  'services.quality': { fr: 'Qualité garantie', en: 'Guaranteed quality' },
  'services.quality_desc': { fr: '100% fait main', en: '100% handmade' },
  'services.support': { fr: 'Support 7j/7', en: '7/7 Support' },
  'services.support_desc': { fr: 'Toujours à votre écoute', en: 'Always listening to you' },
  
  // CTA
  'cta.welcome': { fr: 'Offre de bienvenue', en: 'Welcome offer' },
  'cta.title': { fr: 'Prêt à découvrir nos créations ?', en: 'Ready to discover our creations?' },
  'cta.discount': { fr: 'Bénéficiez de 10% de réduction sur votre première commande avec le code', en: 'Get 10% off your first order with code' },
  'cta.button': { fr: 'Commander maintenant', en: 'Order now' },
  
  // Footer
  'footer.stay_informed': { fr: 'Restez informé', en: 'Stay informed' },
  'footer.newsletter': { fr: 'Recevez nos actualités et offres exclusives', en: 'Receive our news and exclusive offers' },
  'footer.email': { fr: 'Votre adresse email', en: 'Your email address' },
  'footer.subscribe': { fr: 'S\'abonner', en: 'Subscribe' },
  'footer.quick_links': { fr: 'Liens rapides', en: 'Quick links' },
  'footer.trainings': { fr: 'Formations', en: 'Trainings' },
  'footer.contact': { fr: 'Contact', en: 'Contact' },
  'footer.address': { fr: 'Abomey-Calavi, Bénin', en: 'Abomey-Calavi, Benin' },
  'footer.hours': { fr: 'Lun - Sam: 8h - 18h', en: 'Mon - Sat: 8am - 6pm' },
  'footer.rights': { fr: 'Tous droits réservés', en: 'All rights reserved' },
  'footer.legal': { fr: 'Mentions légales', en: 'Legal notices' },
  'footer.terms': { fr: 'CGV', en: 'Terms' },
  'footer.privacy': { fr: 'Confidentialité', en: 'Privacy' },
}

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  const toggleLanguage = () => {
    const newLanguage = language === 'fr' ? 'en' : 'fr'
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
  }

  const t = (key: string): string => {
    return translations[key]?.[language] || key
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
