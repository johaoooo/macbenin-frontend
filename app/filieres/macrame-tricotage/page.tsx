'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Scissors, ShoppingBag, Shirt, Sofa, Lamp, Flower2,
  ChevronRight, ArrowRight
} from 'lucide-react'

const categories = [
  {
    title: "Mode & Accessoires",
    icon: ShoppingBag,
    products: ["Sacs macramé", "Chaussures", "Robes", "Chapeaux", "Corsages", "Bracelets"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Ameublement & Décoration",
    icon: Sofa,
    products: ["Lits", "Pots de fleurs", "Canapés", "Chaises", "Tables", "Rideaux", "Tapis"],
    color: "from-emerald-500 to-teal-500"
  }
]

export default function MacrameTricotagePage() {
  return (
    <div className="pt-16 bg-white dark:bg-gray-900 min-h-screen">
      
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/afi.jpeg" alt="Macramé-Tricotage" className="w-full h-full object-cover brightness-50" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <div className="relative z-10 text-center text-white px-4">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full mb-4">
            <Scissors className="w-4 h-4" />
            <span className="text-xs font-medium">Filière</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Macramé-Tricotage</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">L'art du fil, des créations uniques faites main</p>
        </div>
      </section>

      <div className="container-custom py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {categories.map((cat, i) => {
            const Icon = cat.icon
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                <div className={`bg-gradient-to-r ${cat.color} p-4 text-white`}>
                  <div className="flex items-center gap-2"><Icon className="w-5 h-5" /><h2 className="text-lg font-semibold">{cat.title}</h2></div>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-2 gap-2">
                    {cat.products.map((product, idx) => (
                      <Link key={idx} href={`/shop?product=${encodeURIComponent(product)}`}
                        className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary transition flex items-center gap-1 group">
                        <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition" /> {product}
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-6 text-center">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Formation Macramé-Tricotage</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Apprenez l'art du macramé et du tricotage avec nos artisans experts</p>
          <Link href="/formations" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition">En savoir plus <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </div>
    </div>
  )
}
