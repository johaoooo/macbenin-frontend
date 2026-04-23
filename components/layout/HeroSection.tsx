'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const images = [
  '/afi.jpeg',
  '/afi2.jpeg',
  '/afi3.jpeg',
  '/afi4.jpeg',
  '/afi5.jpeg',
  '/afi6.jpeg',
  '/afi7.jpeg',
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative bg-gradient-to-r from-primary/10 to-secondary/10 overflow-hidden min-h-[90vh] flex items-center">
      <div className="container-custom py-20 md:py-32 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          <div className="flex-1 max-w-xl">
            <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">
              Maison Afi Collection
            </p>
            <h1 className="text-4xl md:text-5xl font-display font-light text-gray-800 dark:text-white mb-6 leading-snug">
              L'art béninois,<br />
              <span className="font-bold text-primary">tissé à la main</span>
            </h1>
            <p className="text-base text-gray-500 dark:text-gray-400 font-light mb-4 leading-relaxed">
              Maison Afi Collection est un atelier artisanal béninois spécialisé dans la création
              de sacs macramés, tenues traditionnelles et accessoires faits main. Chaque pièce
              raconte une histoire, celle d'un savoir-faire transmis avec passion.
            </p>
            <p className="text-base text-gray-500 dark:text-gray-400 font-light mb-8 leading-relaxed">
              Nous formons également la prochaine génération d'artisans à travers nos ateliers
              et formations aux métiers d'art au Bénin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/shop" className="btn-primary text-center">
                Découvrir la boutique
              </Link>
              <Link href="/formations" className="btn-outline text-center">
                Nos formations
              </Link>
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center">
            <div className="relative w-80 h-96 md:w-96 md:h-[480px]">
              {images.map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt={`Oeuvre Afi Collection ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl transition-opacity duration-1000 ${
                    index === current ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === current ? 'bg-primary w-6' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
