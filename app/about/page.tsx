'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { 
  Heart, Award, Users, Clock, MapPin, 
  Star, Quote, ChevronDown, ChevronUp,
  Scissors, Gem, Palette, Crown, Leaf
} from 'lucide-react'

export default function About() {
  const [isHistoireOpen, setIsHistoireOpen] = useState(true)
  const [isValeursOpen, setIsValeursOpen] = useState(true)

  const valeurs = [
    { icon: Heart, title: "Passion", desc: "Chaque création est faite avec amour et dévotion", color: "from-rose-500 to-pink-500" },
    { icon: Award, title: "Excellence", desc: "Des produits de qualité supérieure", color: "from-amber-500 to-orange-500" },
    { icon: Users, title: "Communauté", desc: "Plus de 500 artisans formés", color: "from-blue-500 to-cyan-500" },
    { icon: Crown, title: "Authenticité", desc: "Des créations 100% béninoises", color: "from-purple-500 to-indigo-500" }
  ]

  const stats = [
    { value: "8+", label: "Années d'expertise", icon: Clock },
    { value: "500+", label: "Élèves formés", icon: Users },
    { value: "1000+", label: "Produits vendus", icon: Star },
    { value: "10+", label: "Pays touchés", icon: MapPin }
  ]

  return (
    <div className="pt-16 bg-white dark:bg-gray-900">
      
      {/* Hero avec image */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/afi.jpeg" 
            alt="Artisanat MAC BENIN" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full mb-4">
              <Heart className="w-4 h-4" />
              <span className="text-xs font-medium">Maison Afi Collection</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              L'Art du Fait-Main
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Depuis 2015, nous valorisons le savoir-faire artisanal béninois
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        
        {/* Carte de présentation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 mb-8 border border-gray-100 dark:border-gray-700"
        >
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-primaryDark rounded-full flex items-center justify-center flex-shrink-0">
              <Leaf className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">MAC BENIN</h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                <span className="font-semibold text-primary">Maison Afi Collection</span> est bien plus qu'une marque. 
                C'est la rencontre entre la tradition artisanale béninoise et la modernité. 
                Nos collections <span className="font-semibold">AFISAC</span> (sacs macramés) et{' '}
                <span className="font-semibold">AFI COLLECTION</span> (tenues traditionnelles) 
                incarnent l'élégance et le savoir-faire de nos artisans.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Statistiques avec icônes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 text-center shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>

        {/* Histoire - avec image */}
        <div className="mb-6">
          <button
            onClick={() => setIsHistoireOpen(!isHistoireOpen)}
            className="w-full flex items-center justify-between p-5 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-primaryDark rounded-lg flex items-center justify-center">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-gray-900 dark:text-white">Notre histoire</span>
            </div>
            {isHistoireOpen ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
          </button>

          {isHistoireOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-3 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-6">
                  <div className="space-y-4">
                    {[
                      { year: "2015", title: "Création", desc: "Fondation de la Maison Afi Collection" },
                      { year: "2017", title: "Lancement AFISAC", desc: "Première collection de sacs macramés" },
                      { year: "2019", title: "AFI COLLECTION", desc: "Collection de tenues traditionnelles" },
                      { year: "2021", title: "Formations", desc: "Début des formations artisanales" },
                      { year: "2024", title: "Expansion", desc: "Présence dans 10+ pays" }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-bold text-sm">{item.year}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{item.title}</h4>
                          <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="h-64 md:h-auto relative">
                  <img 
                    src="/afi4.jpeg" 
                    alt="Histoire MAC BENIN" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Nos valeurs - avec images */}
        <div className="mb-8">
          <button
            onClick={() => setIsValeursOpen(!isValeursOpen)}
            className="w-full flex items-center justify-between p-5 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-primaryDark rounded-lg flex items-center justify-center">
                <Star className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-gray-900 dark:text-white">Nos valeurs</span>
            </div>
            {isValeursOpen ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
          </button>

          {isValeursOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-3"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {valeurs.map((valeur, i) => {
                  const Icon = valeur.icon
                  return (
                    <div key={i} className={`bg-gradient-to-br ${valeur.color} rounded-xl p-5 text-white shadow-lg`}>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white text-base">{valeur.title}</h3>
                          <p className="text-white/80 text-xs mt-1">{valeur.desc}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          )}
        </div>

        {/* Collections - avec images */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
            <div className="h-48 relative">
              <img 
                src="/afi2.jpeg" 
                alt="AFISAC Collection" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <Scissors className="w-8 h-8 text-white mb-1" />
                <h3 className="text-xl font-bold text-white">AFISAC</h3>
                <p className="text-white/80 text-sm">Sacs macramés faits main</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-amber-600 to-orange-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
            <div className="h-48 relative">
              <img 
                src="/afi3.jpeg" 
                alt="AFI COLLECTION" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <Gem className="w-8 h-8 text-white mb-1" />
                <h3 className="text-xl font-bold text-white">AFI COLLECTION</h3>
                <p className="text-white/80 text-sm">Tenues traditionnelles</p>
              </div>
            </div>
          </div>
        </div>

        {/* Équipe */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 mb-8 text-center border border-gray-100 dark:border-gray-700">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-primaryDark rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Notre engagement</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed max-w-2xl mx-auto">
            Chaque création MAC BENIN est le fruit d'un travail minutieux, réalisé avec des matériaux nobles 
            et une passion inébranlable. Nous nous engageons à vous offrir le meilleur de l'artisanat béninois.
          </p>
        </div>

        {/* Citation */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-2xl p-6 text-center">
          <Quote className="w-8 h-8 text-primary opacity-50 mx-auto mb-3" />
          <p className="text-base text-gray-700 dark:text-gray-300 italic leading-relaxed">
            "Le véritable artisanat est celui qui transmet une âme. 
            Chaque création MAC BENIN raconte l'histoire passionnée de nos artisans."
          </p>
          <p className="text-sm text-primary mt-4 font-medium">— Mme TOSSA Afiavi Gbèssito Honorine</p>
          <p className="text-xs text-gray-400 mt-1">Fondatrice de MAC BENIN</p>
        </div>
      </div>
    </div>
  )
}
