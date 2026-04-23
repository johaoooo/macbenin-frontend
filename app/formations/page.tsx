'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { 
  Clock, Users, Star, Award, CheckCircle,
  Calendar, BookOpen, Scissors, Gem, Palette,
  ChevronDown, ChevronUp, ArrowRight, GraduationCap,
  Phone, Mail, MapPin
} from 'lucide-react'

const formationsList = [
  {
    id: 1,
    title: "Couture professionnelle",
    icon: Scissors,
    color: "from-emerald-500 to-teal-500",
    duration: "3 mois",
    hours: "120 heures",
    price: 150000,
    students: 45,
    rating: 4.9,
    level: "Débutant à Expert",
    format: "Présentiel",
    schedule: "Lundi, Mercredi, Vendredi",
    image: "/afi5.jpeg",
    description: "Formation complète en couture traditionnelle et moderne. Maîtrisez les techniques de base jusqu'à la création de modèles complexes.",
    program: [
      "Introduction à la couture et au matériel",
      "Prise de mesures et création de patrons",
      "Techniques de coupe et assemblage",
      "Finition et retouches professionnelles",
      "Création de modèles traditionnels",
      "Customisation et broderie"
    ]
  },
  {
    id: 2,
    title: "Coiffure africaine",
    icon: Gem,
    color: "from-purple-500 to-pink-500",
    duration: "2 mois",
    hours: "80 heures",
    price: 120000,
    students: 32,
    rating: 4.8,
    level: "Tous niveaux",
    format: "Présentiel",
    schedule: "Mardi, Jeudi, Samedi",
    image: "/afi6.jpeg",
    description: "Apprenez l'art de la coiffure africaine traditionnelle et moderne. Tresses, tissages, coiffures de cérémonie.",
    program: [
      "Soins capillaires et diagnostic",
      "Techniques de tresses (corn rows, nattes)",
      "Tissages africains et extensions",
      "Coiffures de cérémonie",
      "Pose de perles et accessoires",
      "Entretien et conseils clients"
    ]
  },
  {
    id: 3,
    title: "Tissage macramé",
    icon: Palette,
    color: "from-rose-500 to-red-500",
    duration: "1.5 mois",
    hours: "60 heures",
    price: 100000,
    students: 28,
    rating: 4.9,
    level: "Intermédiaire",
    format: "Présentiel",
    schedule: "Lundi au Jeudi",
    image: "/afi7.jpeg",
    description: "Maîtrisez l'art du macramé pour créer des sacs, accessoires et décorations uniques.",
    program: [
      "Les nœuds fondamentaux",
      "Lecture de diagrammes",
      "Création de sacs macramés",
      "Bijoux et accessoires",
      "Décoration murale",
      "Finition et entretien"
    ]
  }
]

const avisList = [
  {
    name: "Aminata K.",
    formation: "Couture professionnelle",
    rating: 5,
    text: "Formation complète et professionnelle. Les formateurs sont passionnés et très pédagogues.",
    image: "/afi.jpeg"
  },
  {
    name: "Fatou S.",
    formation: "Coiffure africaine",
    rating: 5,
    text: "Je suis maintenant installée à mon compte. Merci MAC BENIN pour cette formation de qualité !",
    image: "/afi2.jpeg"
  },
  {
    name: "Mariam D.",
    formation: "Tissage macramé",
    rating: 5,
    text: "Une formation très enrichissante. J'ai appris toutes les techniques de base.",
    image: "/afi3.jpeg"
  }
]

export default function Formations() {
  const [openFormation, setOpenFormation] = useState<number | null>(null)
  const [showContact, setShowContact] = useState(false)

  return (
    <div className="pt-16 bg-white dark:bg-gray-900">
      
      {/* Hero avec image */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/afi4.jpeg" 
            alt="Formations MAC BENIN" 
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
              <GraduationCap className="w-4 h-4" />
              <span className="text-xs font-medium">Formations artisanales</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Devenez expert
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Des formations professionnelles dispensées par des artisans expérimentés
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 mb-8 text-center border border-gray-100 dark:border-gray-700"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Formez-vous aux métiers d'art</h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Que vous soyez débutant ou professionnel, nos formations vous accompagnent dans votre projet
          </p>
        </motion.div>

        {/* Liste des formations */}
        <div className="space-y-4 mb-8">
          {formationsList.map((formation, index) => (
            <motion.div
              key={formation.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              {/* En-tête de la formation */}
              <button
                onClick={() => setOpenFormation(openFormation === formation.id ? null : formation.id)}
                className="w-full p-5 flex items-center gap-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${formation.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <formation.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{formation.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {formation.duration}</span>
                    <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {formation.students} élèves</span>
                    <div className="flex items-center gap-0.5">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span>{formation.rating}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-primary">{formation.price.toLocaleString()} FCFA</div>
                  <div className="text-xs text-gray-400">TTC</div>
                </div>
                {openFormation === formation.id ? (
                  <ChevronUp className="w-4 h-4 text-gray-400" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                )}
              </button>

              {/* Détails déroulants */}
              {openFormation === formation.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-gray-100 dark:border-gray-700"
                >
                  <div className="grid md:grid-cols-2 gap-6 p-5">
                    <div>
                      <img 
                        src={formation.image} 
                        alt={formation.title}
                        className="w-full h-48 object-cover rounded-xl"
                      />
                      <div className="mt-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2 flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-primary" /> Programme
                        </h4>
                        <ul className="space-y-1.5">
                          {formation.program.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                              <CheckCircle className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 mb-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-3">Informations pratiques</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-500">Durée totale</span>
                            <span className="font-medium text-gray-900 dark:text-white">{formation.hours}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Niveau requis</span>
                            <span className="font-medium text-gray-900 dark:text-white">{formation.level}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Format</span>
                            <span className="font-medium text-gray-900 dark:text-white">{formation.format}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Horaires</span>
                            <span className="font-medium text-gray-900 dark:text-white">{formation.schedule}</span>
                          </div>
                        </div>
                      </div>
                      <Link
                        href="/contact"
                        className="w-full flex items-center justify-center gap-2 bg-primary text-white py-2.5 rounded-lg text-sm font-medium hover:bg-primaryDark transition"
                      >
                        S'inscrire maintenant <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Pourquoi nous choisir */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-6">Pourquoi choisir nos formations ?</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Users, title: "Petits groupes", desc: "Max 15 apprenants" },
              { icon: Award, title: "Certification", desc: "Reconnue" },
              { icon: Clock, title: "Horaires flexibles", desc: "Jour & soir" },
              { icon: Star, title: "Formateurs experts", desc: "Professionnels" }
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="text-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-xs">{item.title}</h4>
                  <p className="text-gray-500 text-[10px] mt-0.5">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Avis */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-6">Ce que disent nos apprenants</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {avisList.map((avis, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img src={avis.image} alt={avis.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{avis.name}</h4>
                    <p className="text-xs text-primary">{avis.formation}</p>
                  </div>
                </div>
                <div className="flex text-primary mb-2">
                  {[...Array(avis.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-xs italic">{avis.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Contact */}
        <div className="bg-gradient-to-r from-primary to-primaryDark rounded-2xl p-6 text-center text-white mb-8">
          <h3 className="text-xl font-bold mb-2">Une question sur nos formations ?</h3>
          <p className="text-white/80 text-sm mb-4">Notre équipe est à votre disposition</p>
          <button
            onClick={() => setShowContact(!showContact)}
            className="bg-white text-primary px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition inline-flex items-center gap-2"
          >
            <Phone className="w-3.5 h-3.5" /> Nous contacter
          </button>
          
          {showContact && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 pt-4 border-t border-white/20"
            >
              <div className="flex flex-col md:flex-row justify-center gap-4 text-sm">
                <a href="tel:+2290196062287" className="flex items-center justify-center gap-2 hover:underline">
                  <Phone className="w-3.5 h-3.5" /> +229 01 96 06 22 87
                </a>
                <a href="mailto:afiavitossa@gmail.com" className="flex items-center justify-center gap-2 hover:underline">
                  <Mail className="w-3.5 h-3.5" /> afiavitossa@gmail.com
                </a>
                <span className="flex items-center justify-center gap-2">
                  <MapPin className="w-3.5 h-3.5" /> Abomey-Calavi, Bénin
                </span>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
