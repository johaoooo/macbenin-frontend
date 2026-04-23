'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Search, Filter, Grid3x3, LayoutGrid, 
  ChevronDown, ChevronUp, Star, ShoppingBag,
  Heart, X, Phone, Mail, MapPin
} from 'lucide-react'

const allProducts = [
  { id: 1, name: "Sac Macramé Élégance", brand: "AFISAC", price: 25000, oldPrice: null, rating: 4.8, reviews: 124, badge: "Best Seller", image: "/afi.jpeg", category: "sacs", stock: true },
  { id: 2, name: "Tenue Faso Dan Fani", brand: "AFI COLLECTION", price: 45000, oldPrice: 55000, rating: 4.9, reviews: 89, badge: "Nouveau", image: "/afi2.jpeg", category: "tenues", stock: true },
  { id: 3, name: "Sac Bohème Tissé", brand: "AFISAC", price: 20000, oldPrice: null, rating: 4.7, reviews: 56, badge: "Promo", image: "/afi3.jpeg", category: "sacs", stock: true },
  { id: 4, name: "Ensemble Cérémonie", brand: "AFI COLLECTION", price: 65000, oldPrice: 75000, rating: 5.0, reviews: 203, badge: "Exclusif", image: "/afi4.jpeg", category: "tenues", stock: true },
  { id: 5, name: "Sac Macramé Royal", brand: "AFISAC", price: 35000, oldPrice: null, rating: 4.9, reviews: 78, badge: null, image: "/afi5.jpeg", category: "sacs", stock: true },
  { id: 6, name: "Tenue Africaine Prestige", brand: "AFI COLLECTION", price: 85000, oldPrice: 95000, rating: 4.8, reviews: 112, badge: null, image: "/afi6.jpeg", category: "tenues", stock: false },
  { id: 7, name: "Sac Mini Macramé", brand: "AFISAC", price: 15000, oldPrice: null, rating: 4.6, reviews: 45, badge: null, image: "/afi7.jpeg", category: "sacs", stock: true },
  { id: 8, name: "Tenue Traditionnelle Deluxe", brand: "AFI COLLECTION", price: 55000, oldPrice: null, rating: 4.9, reviews: 67, badge: "Best Seller", image: "/afi.jpeg", category: "tenues", stock: true }
]

const categories = [
  { name: "Tous", value: "all", count: 8 },
  { name: "Sacs AFISAC", value: "sacs", count: 4 },
  { name: "AFI COLLECTION", value: "tenues", count: 4 }
]

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 100000])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [showContact, setShowContact] = useState(false)

  const brands = ["AFISAC", "AFI COLLECTION"]

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    )
  }

  const filteredProducts = allProducts.filter(product => {
    if (selectedCategory !== "all" && product.category !== selectedCategory) return false
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) return false
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) return false
    return true
  })

  return (
    <div className="pt-16 bg-white dark:bg-gray-900 min-h-screen">
      
      {/* Hero avec image */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/afi2.jpeg" 
            alt="Boutique MAC BENIN" 
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
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Notre boutique</h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Découvrez nos collections de sacs macramés et tenues traditionnelles
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        
        {/* Barre de recherche et filtres */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un produit..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-sm focus:outline-none focus:border-primary"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-sm hover:border-primary transition"
            >
              <Filter className="w-4 h-4" />
              Filtres
              {selectedBrands.length > 0 && (
                <span className="bg-primary text-white text-xs px-1.5 py-0.5 rounded-full">
                  {selectedBrands.length}
                </span>
              )}
            </button>
            <div className="flex rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 ${viewMode === "grid" ? "bg-primary text-white" : "bg-white dark:bg-gray-800"}`}
              >
                <Grid3x3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 ${viewMode === "list" ? "bg-primary text-white" : "bg-white dark:bg-gray-800"}`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Filtres déroulants */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700"
            >
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Catégories</h4>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(cat => (
                      <button
                        key={cat.value}
                        onClick={() => setSelectedCategory(cat.value)}
                        className={`px-3 py-1 text-xs rounded-full transition ${
                          selectedCategory === cat.value
                            ? 'bg-primary text-white'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-primary/20'
                        }`}
                      >
                        {cat.name} ({cat.count})
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Marques</h4>
                  {brands.map(brand => (
                    <label key={brand} className="flex items-center gap-2 mb-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleBrand(brand)}
                        className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{brand}</span>
                    </label>
                  ))}
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Prix (FCFA)</h4>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      className="w-24 px-2 py-1 border border-gray-200 dark:border-gray-700 rounded-lg text-sm"
                    />
                    <span>-</span>
                    <input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="w-24 px-2 py-1 border border-gray-200 dark:border-gray-700 rounded-lg text-sm"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Résultats */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-gray-500">{filteredProducts.length} produits</p>
        </div>

        {/* Grille produits */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {filteredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  {product.badge && (
                    <span className={`absolute top-3 left-3 text-xs font-medium px-2 py-1 rounded-full ${
                      product.badge === 'Best Seller' ? 'bg-primary text-white' :
                      product.badge === 'Nouveau' ? 'bg-blue-500 text-white' :
                      product.badge === 'Promo' ? 'bg-orange-500 text-white' : 'bg-purple-500 text-white'
                    }`}>
                      {product.badge}
                    </span>
                  )}
                  {!product.stock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="text-white text-sm font-medium px-3 py-1 bg-red-500 rounded-full">Rupture</span>
                    </div>
                  )}
                  <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <Heart className="w-4 h-4 text-gray-500 hover:text-red-500" />
                  </button>
                </div>
                <div className="p-4">
                  <p className="text-xs text-primary mb-1">{product.brand}</p>
                  <h3 className="font-medium text-gray-900 dark:text-white text-sm mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex text-primary">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">({product.reviews})</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-lg font-bold text-gray-900 dark:text-white">{product.price.toLocaleString()} FCFA</span>
                      {product.oldPrice && (
                        <span className="text-xs text-gray-400 line-through ml-2">{product.oldPrice.toLocaleString()} FCFA</span>
                      )}
                    </div>
                    <button className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary transition">
                      <ShoppingBag className="w-4 h-4 text-primary hover:text-white" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-4 mb-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md flex gap-4">
                <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-primary">{product.brand}</p>
                  <h3 className="font-medium text-gray-900 dark:text-white">{product.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex text-primary">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">({product.reviews})</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-900 dark:text-white">{product.price.toLocaleString()} FCFA</div>
                  {product.oldPrice && <div className="text-xs text-gray-400 line-through">{product.oldPrice.toLocaleString()} FCFA</div>}
                  <button className="mt-2 px-3 py-1 bg-primary text-white rounded-lg text-xs hover:bg-primaryDark transition">Ajouter</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pas de résultats */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Aucun produit trouvé</p>
          </div>
        )}

        {/* CTA Contact */}
        <div className="bg-gradient-to-r from-primary to-primaryDark rounded-2xl p-6 text-center text-white mb-8">
          <h3 className="text-xl font-bold mb-2">Besoin d'aide pour votre commande ?</h3>
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
