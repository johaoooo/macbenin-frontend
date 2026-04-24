'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Wheat, Soup, Cookie, Coffee, ChevronRight, ArrowRight, Sparkles } from 'lucide-react'

const products = [
  { name: "Sauce sésame", icon: Soup, desc: "Sauce traditionnelle riche en saveurs" },
  { name: "Bouillie de sésame", icon: Coffee, desc: "Boisson nutritive et énergétique" },
  { name: "Chips de sésame", icon: Cookie, desc: "Snack croustillant et sain" },
  { name: "Épices sésame", icon: Sparkles, desc: "Mélange d'épices authentique" }
]

export default function SesamePage() {
  return (
    <div className="pt-16 bg-white dark:bg-gray-900 min-h-screen">
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0"><img src="/afi3.jpeg" alt="Sésame" className="w-full h-full object-cover brightness-50" /></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        <div className="relative z-10 text-center text-white px-4">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full mb-4"><Wheat className="w-4 h-4" /><span className="text-xs font-medium">Filière</span></div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Sésame</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">Produits naturels et authentiques du Bénin</p>
        </div>
      </section>
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, i) => {
            const Icon = product.icon
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"><Icon className="w-8 h-8 text-primary" /></div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{product.desc}</p>
                <Link href={`/shop?product=${encodeURIComponent(product.name)}`} className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition">Découvrir <ChevronRight className="w-3 h-3" /></Link>
              </motion.div>
            )
          })}
        </div>
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-6 text-center">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Transformation du Sésame</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">De la graine au produit fini, un savoir-faire maîtrisé</p>
        </div>
      </div>
    </div>
  )
}
