'use client'
import { motion } from 'framer-motion'
import { Users, ShoppingBag, Globe, Award, TrendingUp } from 'lucide-react'
import Counter from '@/components/ui/Counter'

const stats = [
  {
    icon: Users,
    value: 500,
    suffix: '+',
    label: 'Élèves formés',
    color: 'text-emerald-500',
    delay: 0
  },
  {
    icon: ShoppingBag,
    value: 1000,
    suffix: '+',
    label: 'Produits vendus',
    color: 'text-blue-500',
    delay: 0.1
  },
  {
    icon: Globe,
    value: 10,
    suffix: '+',
    label: 'Pays touchés',
    color: 'text-purple-500',
    delay: 0.2
  },
  {
    icon: Award,
    value: 8,
    suffix: ' ans',
    label: "D'excellence",
    color: 'text-orange-500',
    delay: 0.3
  }
]

export default function StatsSection() {
  return (
    <div className="py-6 border-t border-gray-100 dark:border-gray-800 mt-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: stat.delay }}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition group"
            >
              <div className={`w-10 h-10 ${stat.color} bg-opacity-10 bg-current rounded-lg flex items-center justify-center group-hover:scale-110 transition`}>
                <Icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
