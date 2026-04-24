'use client'
import Link from 'next/link'
import { Mail, Phone, MapPin, Send, Clock, Award, Shield, Truck, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-noir text-blanc">
      <div className="border-b border-gray-800">
        <div className="container-custom py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Restez informé</h3>
              <p className="text-gray-400 text-sm">Recevez nos actualités et offres exclusives</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input type="email" placeholder="Votre adresse email" className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-blanc placeholder-gray-500 focus:outline-none focus:border-vert text-sm" />
              <button className="px-6 py-3 bg-vert text-blanc rounded-lg text-sm font-medium hover:bg-vertFonce transition inline-flex items-center gap-2 justify-center">
                <Send className="w-4 h-4" /> S'abonner
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img src="/afic.png" alt="AFI Collection Logo" className="h-10 w-auto object-contain" />
              <span className="font-bold text-lg text-blanc">AFI Collection</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              L'excellence de l'artisanat béninois depuis 2015. Sacs macramés, tenues traditionnelles et formations artisanales.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-blanc mb-4 text-sm uppercase tracking-wide">Liens rapides</h4>
            <ul className="space-y-2">
              <li><Link href="/shop" className="text-gray-400 hover:text-jaune text-sm transition">Boutique</Link></li>
              <li><Link href="/filieres" className="text-gray-400 hover:text-jaune text-sm transition">Nos filières</Link></li>
              <li><Link href="/formations" className="text-gray-400 hover:text-jaune text-sm transition">Formations</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-jaune text-sm transition">À propos</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-blanc mb-4 text-sm uppercase tracking-wide">Formations</h4>
            <ul className="space-y-2">
              <li><Link href="/formations/couture" className="text-gray-400 hover:text-jaune text-sm transition">Couture professionnelle</Link></li>
              <li><Link href="/formations/coiffure" className="text-gray-400 hover:text-jaune text-sm transition">Coiffure africaine</Link></li>
              <li><Link href="/formations/tissage" className="text-gray-400 hover:text-jaune text-sm transition">Tissage macramé</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-blanc mb-4 text-sm uppercase tracking-wide">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3"><Phone className="w-4 h-4 text-vert mt-0.5" /><span className="text-gray-400 text-sm">+229 01 96 06 22 87</span></li>
              <li className="flex items-start gap-3"><Mail className="w-4 h-4 text-vert mt-0.5" /><span className="text-gray-400 text-sm">afiavitossa@gmail.com</span></li>
              <li className="flex items-start gap-3"><MapPin className="w-4 h-4 text-vert mt-0.5" /><span className="text-gray-400 text-sm">Abomey-Calavi, Bénin</span></li>
              <li className="flex items-start gap-3"><Clock className="w-4 h-4 text-vert mt-0.5" /><span className="text-gray-400 text-sm">Lun - Sam: 8h - 18h</span></li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-gray-800">
          <div className="flex items-center gap-3"><Truck className="w-8 h-8 text-vert" /><div><p className="text-sm font-medium text-blanc">Livraison rapide</p><p className="text-xs text-gray-400">Partout au Bénin</p></div></div>
          <div className="flex items-center gap-3"><Shield className="w-8 h-8 text-vert" /><div><p className="text-sm font-medium text-blanc">Paiement sécurisé</p><p className="text-xs text-gray-400">Mobile Money & Cartes</p></div></div>
          <div className="flex items-center gap-3"><Award className="w-8 h-8 text-vert" /><div><p className="text-sm font-medium text-blanc">Qualité garantie</p><p className="text-xs text-gray-400">Fait main avec passion</p></div></div>
          <div className="flex items-center gap-3"><Heart className="w-8 h-8 text-vert" /><div><p className="text-sm font-medium text-blanc">Support 7j/7</p><p className="text-xs text-gray-400">À votre écoute</p></div></div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-gray-400 text-xs">&copy; {new Date().getFullYear()} AFI Collection - Maison Afi Collection. Tous droits réservés.</p>
            <div className="flex gap-4">
              <Link href="/mentions-legales" className="text-gray-400 hover:text-jaune text-xs transition">Mentions légales</Link>
              <Link href="/cgv" className="text-gray-400 hover:text-jaune text-xs transition">CGV</Link>
              <Link href="/confidentialite" className="text-gray-400 hover:text-jaune text-xs transition">Confidentialité</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
