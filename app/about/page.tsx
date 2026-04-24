'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Heart, Award, Users, Clock, MapPin, 
  Star, Quote, ChevronDown, ChevronUp,
  Scissors, Gem, Crown
} from 'lucide-react'

export default function About() {
  const [isHistoireOpen, setIsHistoireOpen] = useState(true)
  const [isValeursOpen, setIsValeursOpen] = useState(true)

  const valeurs = [
    { icon: Heart, title: "Passion", desc: "Chaque création est faite avec amour et dévotion", color: "from-vert to-vertFonce" },
    { icon: Award, title: "Excellence", desc: "Des produits de qualité supérieure", color: "from-jaune to-jauneFonce" },
    { icon: Users, title: "Communauté", desc: "Plus de 500 artisans formés", color: "from-vert to-vertFonce" },
    { icon: Crown, title: "Authenticité", desc: "Des créations 100% béninoises", color: "from-rouge to-rougeFonce" }
  ]

  const stats = [
    { value: "8+", label: "Années d'expertise", icon: Clock },
    { value: "500+", label: "Élèves formés", icon: Users },
    { value: "1000+", label: "Produits vendus", icon: Star },
    { value: "10+", label: "Pays touchés", icon: MapPin }
  ]

  return (
    <div className="pt-16 bg-blanc dark:bg-noir">
      
      {/* NOUVEAU HERO - Épuré et élégant */}
      <section className="relative py-24 bg-gradient-to-br from-vert/5 via-jaune/5 to-rouge/5">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-vert/10 px-3 py-1.5 rounded-full mb-4">
              <Heart className="w-3 h-3 text-vert" />
              <span className="text-xs font-medium text-vert">Notre histoire</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-noir dark:text-blanc mb-4">
              L'Art du Fait-Main,
              <span className="text-vert font-semibold block mt-2">l'Âme du Bénin</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Depuis 2015, nous valorisons le savoir-faire artisanal béninois 
              à travers des créations uniques et des formations professionnelles.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-blanc dark:bg-noir/90 rounded-2xl shadow-xl p-6 md:p-8 mb-8 border border-gray-100 dark:border-gray-800">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-24 h-24 bg-vert rounded-full flex items-center justify-center flex-shrink-0">
              <Heart className="w-10 h-10 text-blanc" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-noir dark:text-blanc mb-2">AFI Collection</h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                <span className="font-semibold text-vert">AFI Collection</span> est la rencontre entre la tradition artisanale béninoise et la modernité. 
                Nos collections <span className="font-semibold">AFISAC</span> (sacs macramés) et{' '}
                <span className="font-semibold">AFI COLLECTION</span> (tenues traditionnelles) incarnent l'élégance et le savoir-faire de nos artisans.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <div key={i} className="bg-blanc dark:bg-noir/90 rounded-xl p-4 text-center shadow-md border border-gray-100 dark:border-gray-800">
                <Icon className="w-6 h-6 text-vert mx-auto mb-2" />
                <div className="text-2xl font-bold text-noir dark:text-blanc">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            )
          })}
        </div>

        <div className="mb-6">
          <button onClick={() => setIsHistoireOpen(!isHistoireOpen)} className="w-full flex items-center justify-between p-5 bg-blanc dark:bg-noir/90 rounded-xl shadow-md border border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-3"><div className="w-10 h-10 bg-vert rounded-lg flex items-center justify-center"><Clock className="w-4 h-4 text-blanc" /></div><span className="font-semibold text-noir dark:text-blanc">Notre histoire</span></div>
            {isHistoireOpen ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
          </button>
          {isHistoireOpen && (
            <div className="mt-3 bg-blanc dark:bg-noir/90 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-800">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-6">
                  <div className="space-y-4">
                    {[{ year: "2015", title: "Création", desc: "Fondation de la Maison Afi Collection" },{ year: "2017", title: "Lancement AFISAC", desc: "Première collection de sacs macramés" },{ year: "2019", title: "AFI COLLECTION", desc: "Collection de tenues traditionnelles" },{ year: "2024", title: "Expansion", desc: "Présence dans 10+ pays" }].map((item, i) => (
                      <div key={i} className="flex gap-3"><div className="w-12 h-12 bg-vert/10 rounded-full flex items-center justify-center"><span className="text-vert font-bold text-sm">{item.year}</span></div><div><h4 className="font-semibold text-noir dark:text-blanc text-sm">{item.title}</h4><p className="text-gray-500 text-xs mt-0.5">{item.desc}</p></div></div>
                    ))}
                  </div>
                </div>
                <div className="h-64 md:h-auto bg-gradient-to-r from-vert/20 to-vert/5" />
              </div>
            </div>
          )}
        </div>

        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {valeurs.map((valeur, i) => {
              const Icon = valeur.icon
              return (
                <div key={i} className={`bg-gradient-to-r ${valeur.color} rounded-xl p-5 text-blanc shadow-lg`}>
                  <div className="flex items-start gap-3"><div className="w-10 h-10 bg-blanc/20 rounded-full flex items-center justify-center"><Icon className="w-4 h-4 text-blanc" /></div><div><h3 className="font-semibold text-blanc text-base">{valeur.title}</h3><p className="text-blanc/80 text-xs mt-1">{valeur.desc}</p></div></div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="bg-rouge/10 rounded-2xl p-6 text-center border border-rouge/20">
          <Quote className="w-8 h-8 text-rouge opacity-50 mx-auto mb-3" />
          <p className="text-base text-noir dark:text-blanc italic leading-relaxed">"Le véritable artisanat est celui qui transmet une âme. Chaque création AFI Collection raconte l'histoire passionnée de nos artisans."</p>
          <p className="text-sm text-vert mt-4 font-medium">— Mme TOSSA Afiavi Gbèssito Honorine</p>
          <p className="text-xs text-gray-400 mt-1">Fondatrice de AFI Collection</p>
        </div>
      </div>
    </div>
  )
}
