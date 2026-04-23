'use client'
import Link from 'next/link'
import { GraduationCap, Clock, Users } from 'lucide-react'

const formations = [
  { id: 1, title: 'Couture professionnelle', description: 'Apprenez les techniques de couture traditionnelle et moderne', duration: '3 mois', students: 45, price: 150000 },
  { id: 2, title: 'Coiffure africaine', description: 'Maîtrisez les coiffures traditionnelles et contemporaines', duration: '2 mois', students: 32, price: 120000 },
  { id: 3, title: 'Tissage macramé', description: 'Créez des sacs et accessoires en macramé', duration: '1.5 mois', students: 28, price: 100000 }
]

export default function FeaturedFormations() {
  return (
    <section className="bg-gradient-to-r from-primary/5 to-secondary/5 py-16">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-display font-bold">Formations populaires</h2>
          <Link href="/formations" className="text-primary hover:underline">Voir toutes les formations →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {formations.map((formation) => (
            <div key={formation.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-primary/10 p-6">
                <GraduationCap className="text-primary" size={48} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-bold mb-2">{formation.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{formation.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2"><Clock size={16} /> {formation.duration}</div>
                  <div className="flex items-center gap-2"><Users size={16} /> {formation.students} apprenants</div>
                </div>
                <div className="mt-4"><span className="text-2xl font-bold text-primary">{formation.price.toLocaleString()} FCFA</span></div>
                <Link href={`/formations/${formation.id}`} className="btn-primary w-full text-center block mt-4 !py-2">S'inscrire maintenant</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
