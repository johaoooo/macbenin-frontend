'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronRight, Star, ArrowRight,
  ShoppingBag, Users, Award,
  Clock, Shield, Truck, Heart, Briefcase,
  Scissors, Crown, Gem, Palette, Globe, Zap, Play
} from 'lucide-react'

const heroImages = ['/afi.jpeg','/afi2.jpeg','/afi3.jpeg','/afi4.jpeg','/afi5.jpeg','/afi6.jpeg','/afi7.jpeg']

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setCurrentImage(p => (p + 1) % heroImages.length), 3500)
    return () => clearInterval(t)
  }, [])

  const categories = [
    { name: "Sacs AFISAC", icon: Briefcase, href: "/shop?brand=afisac", color: "from-primary/80 to-primary", count: "24 modèles" },
    { name: "AFI COLLECTION", icon: Crown, href: "/shop?brand=afi-collection", color: "from-secondary to-secondaryDark", count: "18 modèles" },
    { name: "Formation Couture", icon: Scissors, href: "/formations/couture", color: "from-accent to-accentDark", count: "3 mois" },
    { name: "Formation Coiffure", icon: Gem, href: "/formations/coiffure", color: "from-primary to-primaryDark", count: "2 mois" },
    { name: "Formation Tissage", icon: Palette, href: "/formations/tissage", color: "from-secondary to-secondaryDark", count: "1.5 mois" }
  ]

  const products = [
    { name: "Sac Macramé Élégance", brand: "AFISAC", price: 25000, badge: "Best Seller" },
    { name: "Tenue Faso Dan Fani", brand: "AFI COLLECTION", price: 45000, badge: "Nouveau" },
    { name: "Sac Bohème Tissé", brand: "AFISAC", price: 20000, badge: "Promo" },
    { name: "Ensemble Cérémonie", brand: "AFI COLLECTION", price: 65000, badge: "Exclusif" }
  ]

  const badgeColors: Record<string, string> = {
    'Best Seller': 'bg-primary text-white',
    'Nouveau': 'bg-secondary text-gray-900',
    'Promo': 'bg-accent text-white',
    'Exclusif': 'bg-primaryDark text-white'
  }

  const stats = [
    { value: "500+", label: "Élèves formés", icon: Users, trend: "+25%" },
    { value: "1000+", label: "Produits vendus", icon: ShoppingBag, trend: "+40%" },
    { value: "10+", label: "Pays touchés", icon: Globe, trend: "International" },
    { value: "8 ans", label: "D'excellence", icon: Award, trend: "Depuis 2015" }
  ]

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen flex items-center overflow-hidden bg-gray-950">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={heroImages[currentImage]}
            alt="Afi Collection"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="container-custom relative z-10 w-full">
          <div className="max-w-xl">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-extrabold text-white leading-[1.05] mb-4"
            >
              L'art béninois,
              <span className="block text-secondary mt-1">tissé à la main.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm text-white/70 leading-relaxed mb-8 max-w-sm"
            >
              Sacs macramés, tenues traditionnelles et formations artisanales — 
              100% fait main, 100% béninois.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <Link href="/shop" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-primaryDark transition shadow-lg hover:-translate-y-0.5 duration-200">
                Découvrir la boutique <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/formations" className="inline-flex items-center gap-2 bg-secondary/10 backdrop-blur border border-secondary/30 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-secondary/20 transition">
                <Play className="w-3.5 h-3.5" /> Nos formations
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-6 pt-6 border-t border-white/15"
            >
              {stats.slice(0,3).map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-xl font-bold text-white">{s.value}</div>
                  <div className="text-[10px] text-white/50 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
              <div className="ml-2 flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-secondary text-secondary" />)}
                </div>
                <span className="text-[11px] text-white/60">4.9/5</span>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 z-10 flex flex-col gap-2">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImage(idx)}
              className={`w-1.5 rounded-full transition-all duration-300 ${
                idx === currentImage ? 'h-8 bg-secondary' : 'h-1.5 bg-white/30'
              }`}
            />
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="py-10 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                    <div className="text-[10px] text-primary font-medium">{stat.trend}</div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-2">Parcourir par catégorie</h2>
            <p className="text-gray-500 text-sm">Collections et formations au bout des doigts</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((cat, i) => {
              const Icon = cat.icon
              return (
                <motion.div key={cat.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                  <Link href={cat.href} className="group block">
                    <div className={`bg-gradient-to-br ${cat.color} rounded-2xl p-5 text-white text-center hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300`}>
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
      <section className="py-20 bg-gray-50 dark:bg-gray-800/30">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">Produits phares</h2>
              <p className="text-gray-500 text-sm mt-1">Les créations les plus appréciées</p>
            </div>
            <Link href="/shop" className="text-sm text-gray-500 hover:text-primary flex items-center gap-1 group">
              Voir tout <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </Link>
          </div>
          <div className="grid md:grid-cols-4 gap-5">
            {products.map((product, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group cursor-pointer">
                <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-700">
                  <div className="h-44 bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800 relative">
                    <div className="absolute top-3 left-3">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badgeColors[product.badge]}`}>{product.badge}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-primary font-medium mb-1">{product.brand}</p>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-3">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <p className="text-base font-bold text-gray-900 dark:text-white">{product.price.toLocaleString()} <span className="text-xs font-normal text-gray-400">FCFA</span></p>
                      <button className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-200">
                        <ShoppingBag className="w-3.5 h-3.5 text-primary hover:text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* POURQUOI NOUS */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">Pourquoi nous choisir ?</h2>
            <p className="text-gray-500 text-sm mt-1">Qualité, savoir-faire et passion</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Paiement sécurisé", desc: "Mobile Money & Cartes bancaires" },
              { icon: Truck, title: "Livraison rapide", desc: "48h à Cotonou" },
              { icon: Heart, title: "Qualité garantie", desc: "100% fait main" },
              { icon: Zap, title: "Support 7j/7", desc: "Toujours à votre écoute" }
            ].map((feature, i) => {
              const Icon = feature.icon
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center group">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{feature.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{feature.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-white/70 text-xs uppercase tracking-widest mb-3">Offre de bienvenue</p>
            <h2 className="text-3xl font-bold text-white mb-3">Prêt à découvrir nos créations ?</h2>
            <p className="text-white/80 text-sm mb-8 max-w-md mx-auto">Bénéficiez de 10% de réduction sur votre première commande avec le code <span className="font-bold text-secondary">AFI10</span></p>
            <Link href="/shop" className="inline-flex items-center gap-2 bg-secondary text-gray-900 px-8 py-3 rounded-xl text-sm font-bold hover:bg-secondaryDark transition shadow-xl hover:-translate-y-0.5 duration-200">
              Commander maintenant <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
