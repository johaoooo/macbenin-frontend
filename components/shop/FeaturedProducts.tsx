'use client'
import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'

const products = [
  { id: 1, name: 'Sac Macramé Élégance', brand: 'AFISAC', price: 25000 },
  { id: 2, name: 'Tenue Traditionnelle Faso Dan Fani', brand: 'AFI COLLECTION', price: 45000 },
  { id: 3, name: 'Sac Macramé Bohème', brand: 'AFISAC', price: 20000 },
  { id: 4, name: 'Ensemble Cérémonie', brand: 'AFI COLLECTION', price: 65000 }
]

export default function FeaturedProducts() {
  return (
    <section className="container-custom py-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-display font-bold">Produits phares</h2>
        <Link href="/shop" className="text-primary hover:underline">Voir tout →</Link>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <span className="text-primary font-semibold">Photo {product.id}</span>
            </div>
            <div className="p-4">
              <span className="text-xs text-primary font-semibold">{product.brand}</span>
              <h3 className="font-semibold text-lg mt-1">{product.name}</h3>
              <p className="text-secondary font-bold mt-2">{product.price.toLocaleString()} FCFA</p>
              <button className="mt-4 w-full btn-primary !py-2 text-center flex items-center justify-center gap-2">
                <ShoppingBag size={18} /> Ajouter au panier
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
