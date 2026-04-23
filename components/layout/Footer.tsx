'use client'
import Link from 'next/link'
import { 
  Mail, Phone, MapPin, Send, Clock, Award, Shield, 
  Truck, Heart, Globe, CreditCard, Package
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container-custom py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Calibri, sans-serif' }}>Restez informé</h3>
              <p className="text-gray-400 text-sm" style={{ fontFamily: 'Calibri, sans-serif' }}>
                Recevez nos actualités et offres exclusives
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-primary text-sm"
                style={{ fontFamily: 'Calibri, sans-serif' }}
              />
              <button className="px-6 py-3 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primaryDark transition inline-flex items-center gap-2 justify-center">
                <Send className="w-4 h-4" /> S'abonner
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Colonne 1 - Logo et description */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center overflow-hidden">
                <img 
                  src="/logo.jpeg" 
                  alt="MAC BENIN Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-semibold text-white text-lg" style={{ fontFamily: 'Calibri, sans-serif' }}>MAC BENIN</span>
                <p className="text-xs text-gray-400" style={{ fontFamily: 'Calibri, sans-serif' }}>Maison Afi Collection</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed" style={{ fontFamily: 'Calibri, sans-serif' }}>
              L'excellence de l'artisanat béninois depuis 2015. Sacs macramés, tenues traditionnelles et formations artisanales.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition">
                <span className="text-gray-400 hover:text-white text-sm">f</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition">
                <span className="text-gray-400 hover:text-white text-sm">in</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition">
                <span className="text-gray-400 hover:text-white text-sm">x</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition">
                <span className="text-gray-400 hover:text-white text-sm">yt</span>
              </a>
            </div>
          </div>

          {/* Colonne 2 - Liens rapides */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide" style={{ fontFamily: 'Calibri, sans-serif' }}>Liens rapides</h4>
            <ul className="space-y-2">
              <li><Link href="/shop" className="text-gray-400 hover:text-primary text-sm transition flex items-center gap-2"><span className="text-primary">›</span> Boutique</Link></li>
              <li><Link href="/formations" className="text-gray-400 hover:text-primary text-sm transition flex items-center gap-2"><span className="text-primary">›</span> Formations</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-primary text-sm transition flex items-center gap-2"><span className="text-primary">›</span> À propos</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-primary text-sm transition flex items-center gap-2"><span className="text-primary">›</span> Contact</Link></li>
            </ul>
          </div>

          {/* Colonne 3 - Formations */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide" style={{ fontFamily: 'Calibri, sans-serif' }}>Nos formations</h4>
            <ul className="space-y-2">
              <li><Link href="/formations/couture" className="text-gray-400 hover:text-primary text-sm transition">Couture professionnelle</Link></li>
              <li><Link href="/formations/coiffure" className="text-gray-400 hover:text-primary text-sm transition">Coiffure africaine</Link></li>
              <li><Link href="/formations/tissage" className="text-gray-400 hover:text-primary text-sm transition">Tissage macramé</Link></li>
            </ul>
          </div>

          {/* Colonne 4 - Contact et infos */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide" style={{ fontFamily: 'Calibri, sans-serif' }}>Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-gray-400 text-sm" style={{ fontFamily: 'Calibri, sans-serif' }}>+229 01 96 06 22 87</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-gray-400 text-sm" style={{ fontFamily: 'Calibri, sans-serif' }}>afiavitossa@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-gray-400 text-sm" style={{ fontFamily: 'Calibri, sans-serif' }}>Zoundja, Abomey-Calavi, Bénin</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-gray-400 text-sm" style={{ fontFamily: 'Calibri, sans-serif' }}>Lun - Sam: 8h - 18h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Badges de confiance */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-gray-800">
          <div className="flex items-center gap-3">
            <Truck className="w-8 h-8 text-primary" />
            <div>
              <p className="text-sm font-medium text-white" style={{ fontFamily: 'Calibri, sans-serif' }}>Livraison rapide</p>
              <p className="text-xs text-gray-400" style={{ fontFamily: 'Calibri, sans-serif' }}>Partout au Bénin</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-primary" />
            <div>
              <p className="text-sm font-medium text-white" style={{ fontFamily: 'Calibri, sans-serif' }}>Paiement sécurisé</p>
              <p className="text-xs text-gray-400" style={{ fontFamily: 'Calibri, sans-serif' }}>Mobile Money & Cartes</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Award className="w-8 h-8 text-primary" />
            <div>
              <p className="text-sm font-medium text-white" style={{ fontFamily: 'Calibri, sans-serif' }}>Qualité garantie</p>
              <p className="text-xs text-gray-400" style={{ fontFamily: 'Calibri, sans-serif' }}>Fait main avec passion</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Heart className="w-8 h-8 text-primary" />
            <div>
              <p className="text-sm font-medium text-white" style={{ fontFamily: 'Calibri, sans-serif' }}>Support 7j/7</p>
              <p className="text-xs text-gray-400" style={{ fontFamily: 'Calibri, sans-serif' }}>À votre écoute</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-gray-400 text-xs" style={{ fontFamily: 'Calibri, sans-serif' }}>
              &copy; {new Date().getFullYear()} MAC BENIN - Maison Afi Collection. Tous droits réservés.
            </p>
            <div className="flex gap-4">
              <Link href="/mentions-legales" className="text-gray-400 hover:text-primary text-xs transition">Mentions légales</Link>
              <Link href="/cgv" className="text-gray-400 hover:text-primary text-xs transition">CGV</Link>
              <Link href="/confidentialite" className="text-gray-400 hover:text-primary text-xs transition">Confidentialité</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
