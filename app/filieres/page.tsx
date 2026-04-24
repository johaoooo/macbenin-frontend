'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Scissors, Palette, Wheat, Bean, ArrowRight } from 'lucide-react'

const filieres = [
  {
    id: 'macrame-tricotage',
    name: 'Macramé-Tricotage',
    icon: Scissors,
    description: 'Sacs, vêtements, accessoires et décoration faits main',
    color: 'from-purple-500 to-pink-500',
    image: '/afi.jpeg',
    products: ['Sacs', 'Vêtements', 'Accessoires', 'Décoration intérieure']
  },
  {
    id: 'teinture-pagne',
    name: 'Teinture de Pagne',
    icon: Palette,
    description: 'Pagnes teints, tenues traditionnelles et revêtements',
    color: 'from-amber-500 to-orange-500',
    image: '/afi2.jpeg',
    products: ['Pagnes', 'Tenues', 'Revêtements', 'Accessoires']
  },
  {
    id: 'sesame',
    name: 'Filière Sésame',
    icon: Wheat,
    description: 'Sauce, bouillie, chips et épices artisanales',
    color: 'from-emerald-500 to-teal-500',
    image: '/afi3.jpeg',
    products: ['Sauce', 'Bouillie', 'Chips', 'Épices']
  },
  {
    id: 'soja',
    name: 'Filière Soja',
    icon: Bean,
    description: 'Bouillie, chips, sauce et épices naturelles',
    color: 'from-blue-500 to-cyan-500',
    image: '/afi4.jpeg',
    products: ['Bouillie', 'Chips', 'Sauce', 'Épices']
  }
]

export default function FilieresPage() {
  return (
    <div className="pt-16 bg-white dark:bg-gray-900 min-h-screen">
      
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-900">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Nos filières
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Découvrez l'excellence de notre savoir-faire à travers nos 4 filières d'excellence
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {filieres.map((filiere, i) => {
              const Icon = filiere.icon
              return (
                <motion.div
                  key={filiere.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <Link href={`/filieres/${filiere.id}`}>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className={`h-48 bg-gradient-to-r ${filiere.color} relative`}>
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
                        <div className="absolute bottom-4 left-4 flex items-center gap-2">
                          <Icon className="w-6 h-6 text-white" />
                          <span className="text-white font-semibold">{filiere.name}</span>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{filiere.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {filiere.products.map((product, idx) => (
                            <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full">
                              {product}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                          Découvrir <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
