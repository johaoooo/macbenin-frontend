'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle, User, AtSign } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const contactInfo = [
    { icon: Phone, title: "Téléphone", details: "+229 01 96 06 22 87", link: "tel:+2290196062287" },
    { icon: Mail, title: "Email", details: "afiavitossa@gmail.com", link: "mailto:afiavitossa@gmail.com" },
    { icon: MapPin, title: "Adresse", details: "Abomey-Calavi, Bénin", link: null },
    { icon: Clock, title: "Horaires", details: "Lun - Sam: 8h - 18h", link: null }
  ]

  return (
    <div className="pt-16 bg-blanc dark:bg-noir min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-vert/10 px-3 py-1.5 rounded-full mb-3"><MessageCircle className="w-4 h-4 text-vert" /><span className="text-xs font-medium text-vert">Contact</span></div>
          <h1 className="text-3xl font-bold text-noir dark:text-blanc">Contactez-nous</h1>
          <p className="text-gray-500 text-sm mt-1">Une question ? Notre équipe vous répond dans les 24h</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {contactInfo.map((info, i) => {
              const Icon = info.icon
              return (
                <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700">
                  <div className="w-10 h-10 bg-vert/10 rounded-full flex items-center justify-center"><Icon className="w-4 h-4 text-vert" /></div>
                  <div><p className="text-xs text-gray-400">{info.title}</p>{info.link ? <a href={info.link} className="text-sm text-noir dark:text-blanc hover:text-vert transition">{info.details}</a> : <p className="text-sm text-noir dark:text-blanc">{info.details}</p>}</div>
                </div>
              )
            })}
          </div>

          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-noir dark:text-blanc mb-4">Envoyez-nous un message</h2>
            {isSubmitted && <div className="mb-4 p-3 bg-vert/10 rounded-lg flex items-center gap-2"><CheckCircle className="w-4 h-4 text-vert" /><p className="text-sm text-vert">Message envoyé !</p></div>}
            <form onSubmit={handleSubmit} className="space-y-3">
              <input type="text" name="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Votre nom" className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg bg-blanc dark:bg-noir text-sm focus:outline-none focus:border-vert" />
              <input type="email" name="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="Votre email" className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg bg-blanc dark:bg-noir text-sm focus:outline-none focus:border-vert" />
              <textarea name="message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows={4} placeholder="Votre message" className="w-full px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg bg-blanc dark:bg-noir text-sm focus:outline-none focus:border-vert resize-none" />
              <button type="submit" disabled={isLoading} className="w-full py-2.5 bg-vert text-blanc rounded-lg font-medium text-sm hover:bg-vertFonce transition flex items-center justify-center gap-2">{isLoading ? "Envoi..." : <><Send className="w-4 h-4" /> Envoyer</>}</button>
            </form>
          </div>
        </div>

        <div className="mt-8 bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden h-[300px]">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126913.5978567047!2d2.3652831!3d6.4966515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1020856b7b4d1f9d%3A0x4e7f2c5a8f6e3b5a!2sAbomey-Calavi%2C%20Benin!5e0!3m2!1sfr!2sfr!4v1699999999999!5m2!1sfr!2sfr" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy" title="MAC BENIN - Localisation"></iframe>
        </div>
      </div>
    </div>
  )
}
