'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Lock, LogIn, Eye, EyeOff, AlertCircle } from 'lucide-react'

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.email || !formData.password) { setError('Veuillez remplir tous les champs'); return }
    window.location.href = '/dashboard'
  }

  return (
    <div className="pt-16 min-h-screen bg-blanc dark:bg-noir py-12">
      <div className="max-w-md mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-vert/10 px-3 py-1.5 rounded-full mb-3"><LogIn className="w-4 h-4 text-vert" /><span className="text-xs font-medium text-vert">Connexion</span></div>
          <h1 className="text-2xl font-bold text-noir dark:text-blanc">Bon retour</h1>
          <p className="text-gray-500 text-sm mt-1">Connectez-vous à votre compte</p>
        </div>
        <div className="bg-blanc dark:bg-noir/90 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-6">
          {error && <div className="mb-4 p-3 bg-rouge/10 rounded-lg flex items-center gap-2"><AlertCircle className="w-4 h-4 text-rouge" /><p className="text-rouge text-xs">{error}</p></div>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div><label className="block text-sm font-medium text-noir dark:text-blanc mb-1">Email</label><div className="relative"><Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" /><input type="email" name="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="votre@email.com" className="w-full pl-10 pr-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg bg-blanc dark:bg-noir text-sm focus:outline-none focus:border-vert" /></div></div>
            <div><label className="block text-sm font-medium text-noir dark:text-blanc mb-1">Mot de passe</label><div className="relative"><Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" /><input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} placeholder="••••••••" className="w-full pl-10 pr-12 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg bg-blanc dark:bg-noir text-sm focus:outline-none focus:border-vert" /><button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2">{showPassword ? <EyeOff className="w-4 h-4 text-gray-400" /> : <Eye className="w-4 h-4 text-gray-400" />}</button></div></div>
            <div className="flex justify-end"><Link href="/forgot-password" className="text-xs text-vert hover:underline">Mot de passe oublié ?</Link></div>
            <button type="submit" className="w-full py-2.5 bg-vert text-blanc rounded-lg font-medium text-sm hover:bg-vertFonce transition flex items-center justify-center gap-2"><LogIn className="w-4 h-4" /> Se connecter</button>
          </form>
          <div className="mt-6 text-center"><p className="text-xs text-gray-500">Pas encore de compte ? <Link href="/register" className="text-vert font-medium hover:underline">Créer un compte</Link></p></div>
        </div>
      </div>
    </div>
  )
}
