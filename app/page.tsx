'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronRight, Star, ArrowRight,
  ShoppingBag, Users, Award,
  Clock, Shield, Truck, Heart, Briefcase,
  Scissors, Crown, Gem, Palette, Globe, Zap, Play,
  GraduationCap
} from 'lucide-react'
import Counter from '@/components/ui/Counter'
import { useLanguage } from '@/contexts/LanguageContext'

const heroImages = ['/afi.jpeg','/afi2.jpeg','/afi3.jpeg','/afi4.jpeg','/afi5.jpeg','/afi6.jpeg','/afi7.jpeg']

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0)
  const [heroVisible, setHeroVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const interval = setInterval(() => setCurrentImage(p => (p + 1) % heroImages.length), 3500)
    setHeroVisible(true)
    return () => clearInterval(interval)
  }, [])

  const categories = [
    { name: "Sacs AFISAC", icon: Briefcase, href: "/shop?brand=afisac", color: "from-vert to-vertFonce", count: "24 modèles" },
    { name: "AFI COLLECTION", icon: Crown, href: "/shop?brand=afi-collection", color: "from-jaune to-jauneFonce", count: "18 modèles" },
    { name: "Formation Couture", icon: Scissors, href: "/formations/couture", color: "from-rouge to-rougeFonce", count: "3 mois" },
    { name: "Formation Coiffure", icon: Gem, href: "/formations/coiffure", color: "from-vert to-vertFonce", count: "2 mois" },
    { name: "Formation Tissage", icon: Palette, href: "/formations/tissage", color: "from-jaune to-jauneFonce", count: "1.5 mois" }
  ]

  const products = [
    { name: "Sac Macramé Élégance", brand: "AFISAC", price: 25000, badge: "Best Seller" },
    { name: "Tenue Faso Dan Fani", brand: "AFI COLLECTION", price: 45000, badge: "Nouveau" },
    { name: "Sac Bohème Tissé", brand: "AFISAC", price: 20000, badge: "Promo" },
    { name: "Ensemble Cérémonie", brand: "AFI COLLECTION", price: 65000, badge: "Exclusif" }
  ]

  const badgeColors: Record<string, string> = {
    'Best Seller': 'bg-vert text-blanc',
    'Nouveau': 'bg-jaune text-noir',
    'Promo': 'bg-rouge text-blanc',
    'Exclusif': 'bg-vertFonce text-blanc'
  }

  return (
    <>
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: heroVisible ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-noir"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={heroImages[currentImage]}
            alt="AFI Collection"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        
        <div className="absolute inset-0 bg-gradient-to-b from-noir/60 via-noir/40 to-noir/70" />
        
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blanc mb-4 leading-tight">
              L'art béninois,
              <span className="text-jaune block mt-1">tissé à la main.</span>
            </h1>

            <p className="text-sm md:text-base text-blanc/80 leading-relaxed mb-6 max-w-xl mx-auto" style={{ fontFamily: 'Calibri, sans-serif' }}>
              Sacs macramés, tenues traditionnelles et formations artisanales — 100% fait main, 100% béninois.
            </p>

            <div className="flex flex-wrap gap-3 justify-center mb-10">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/shop" className="inline-flex items-center gap-2 bg-rouge text-blanc px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-rougeFonce transition shadow-lg">
                  Découvrir la boutique <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/formations" className="inline-flex items-center gap-2 bg-jaune/10 backdrop-blur border border-jaune/30 text-blanc px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-jaune/20 transition">
                  <Play className="w-3.5 h-3.5" /> Nos formations
                </Link>
              </motion.div>
            </div>

            {/* Stats - CHIFFRES EN VERT */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="backdrop-blur-md bg-blanc/10 rounded-xl p-4 border border-blanc/20 shadow-2xl"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-vert">
                    <Counter end={35} suffix="+" />
                  </div>
                  <div className="text-[10px] text-blanc/70 uppercase tracking-wider mt-1">Années d'expertise</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-vert">
                    <Counter end={5000} suffix="+" />
                  </div>
                  <div className="text-[10px] text-blanc/70 uppercase tracking-wider mt-1">Personnes formées</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-vert">
                    <Counter end={1000} suffix="+" />
                  </div>
                  <div className="text-[10px] text-blanc/70 uppercase tracking-wider mt-1">Produits vendus</div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-2.5 h-2.5 fill-jaune text-jaune" />)}
                  </div>
                  <div className="text-[10px] text-blanc/70 uppercase tracking-wider mt-1">Note moyenne</div>
                  <div className="text-xs text-vert font-semibold">4.9/5</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 right-8 z-10 flex flex-col gap-2">
          {heroImages.map((_, idx) => (
            <button key={idx} onClick={() => setCurrentImage(idx)} className={`transition-all duration-500 rounded-full ${idx === currentImage ? 'h-8 w-1.5 bg-jaune' : 'h-4 w-1.5 bg-blanc/40 hover:bg-blanc/60'}`} />
          ))}
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <span className="text-blanc/40 text-xs font-mono tracking-wider">{String(currentImage + 1).padStart(2,'0')} / {String(heroImages.length).padStart(2,'0')}</span>
        </div>
      </motion.section>

      {/* NOS ATOUTS */}
      <section className="py-20 bg-blanc dark:bg-noir">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-noir dark:text-blanc mb-2">Nos atouts</h2>
            <p className="text-gray-500 text-sm">Pourquoi nous sommes reconnus</p>
          </div>
          <div className="flex flex-row flex-wrap justify-center gap-8 md:grid md:grid-cols-3 md:gap-8">
            <div className="text-center group flex-1 min-w-[120px]">
              <div className="w-20 h-20 bg-vert/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-vert group-hover:scale-110 transition-all duration-300">
                <GraduationCap className="w-8 h-8 text-vert group-hover:text-blanc transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-noir dark:text-blanc mb-2">Formation certifiante</h3>
              <p className="text-sm text-gray-500">Des programmes complets avec certificat reconnu</p>
            </div>
            <div className="text-center group flex-1 min-w-[120px]">
              <div className="w-20 h-20 bg-jaune/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-jaune group-hover:scale-110 transition-all duration-300">
                <Heart className="w-8 h-8 text-jauneFonce group-hover:text-noir transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-noir dark:text-blanc mb-2">Fait main avec passion</h3>
              <p className="text-sm text-gray-500">Chaque pièce est unique et réalisée par des artisans experts</p>
            </div>
            <div className="text-center group flex-1 min-w-[120px]">
              <div className="w-20 h-20 bg-rouge/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-rouge group-hover:scale-110 transition-all duration-300">
                <Globe className="w-8 h-8 text-rouge group-hover:text-blanc transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-noir dark:text-blanc mb-2">Rayonnement international</h3>
              <p className="text-sm text-gray-500">Des produits exportés dans plus de 10 pays</p>
            </div>
          </div>
        </div>
      </section>

      {/* CATÉGORIES */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-noir dark:text-blanc mb-2">Parcourir par catégorie</h2>
            <p className="text-gray-500 text-sm">Collections et formations au bout des doigts</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((cat, i) => {
              const Icon = cat.icon
              return (
                <motion.div key={cat.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                  <Link href={cat.href} className="group block">
                    <div className={`bg-gradient-to-br ${cat.color} rounded-2xl p-5 text-blanc text-center hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300`}>
                      <Icon className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="font-semibold text-sm mb-1">{cat.name}</h3>
                      <p className="text-xs opacity-80">{cat.count}</p>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* PRODUITS */}
      <section className="py-20 bg-blanc dark:bg-noir">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-noir dark:text-blanc">Produits phares</h2>
              <p className="text-gray-500 text-sm mt-1">Les créations les plus appréciées</p>
            </div>
            <Link href="/shop" className="text-sm text-gray-500 hover:text-vert flex items-center gap-1 group">
              Voir tout <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </Link>
          </div>
          <div className="grid md:grid-cols-4 gap-5">
            {products.map((product, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group cursor-pointer">
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-800">
                  <div className="h-44 bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 relative">
                    <div className="absolute top-3 left-3">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badgeColors[product.badge]}`}>{product.badge}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-vert font-medium mb-1">{product.brand}</p>
                    <h3 className="font-semibold text-noir dark:text-blanc text-sm mb-3">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <p className="text-base font-bold text-noir dark:text-blanc">{product.price.toLocaleString()} <span className="text-xs font-normal text-gray-400">FCFA</span></p>
                      <button className="w-8 h-8 bg-vert/10 rounded-lg flex items-center justify-center hover:bg-vert hover:text-blanc transition-all duration-200">
                        <ShoppingBag className="w-3.5 h-3.5 text-vert hover:text-blanc" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-noir dark:text-blanc mb-2">Services</h2>
            <p className="text-gray-500 text-sm">Une expérience client optimale</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Paiement sécurisé", desc: "Mobile Money & Cartes bancaires" },
              { icon: Truck, title: "Livraison rapide", desc: "48h à Cotonou" },
              { icon: Heart, title: "Qualité garantie", desc: "100% fait main" },
              { icon: Zap, title: "Support 7j/7", desc: "Toujours à votre écoute" }
            ].map((feature, i) => {
              const Icon = feature.icon
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center group">
                  <div className="w-14 h-14 bg-blanc dark:bg-noir rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:bg-vert group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 text-vert group-hover:text-blanc transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-noir dark:text-blanc text-sm mb-1">{feature.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{feature.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-vert">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-blanc/70 text-xs uppercase tracking-widest mb-3">Offre de bienvenue</p>
            <h2 className="text-3xl font-bold text-blanc mb-3">Prêt à découvrir nos créations ?</h2>
            <p className="text-blanc/80 text-sm mb-8 max-w-md mx-auto">Bénéficiez de 10% de réduction sur votre première commande avec le code <span className="font-bold text-jaune">AFI10</span></p>
            <Link href="/shop" className="inline-flex items-center gap-2 bg-jaune text-noir px-8 py-3 rounded-xl text-sm font-bold hover:bg-jauneFonce transition shadow-xl hover:-translate-y-0.5 duration-200">
              Commander maintenant <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
