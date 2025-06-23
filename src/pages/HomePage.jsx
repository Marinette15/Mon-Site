import React, { useState } from 'react'
import { 
  Shield, 
  TrendingUp, 
  Users, 
  FileText, 
  Smartphone, 
  CheckCircle,
  ArrowRight,
  BarChart3,
  Clock,
  MapPin
} from 'lucide-react'
import LoginForm from '../components/LoginForm'

const HomePage = () => {
  const [user, setUser] = useState(null)

  const handleLogin = (userData) => {
    setUser(userData)
  }

  const features = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Suivi en temps réel",
      description: "Monitoring instantané de toutes les recettes municipales avec des tableaux de bord interactifs."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sécurité renforcée",
      description: "Protection des données avec authentification sécurisée et gestion des permissions."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Rapports automatisés",
      description: "Génération automatique de rapports financiers détaillés et personnalisables."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Interface mobile",
      description: "Application mobile pour les agents collecteurs avec fonctionnalités hors-ligne."
    }
  ]

  const benefits = [
    "Réduction des erreurs de saisie de 90%",
    "Amélioration de la transparence financière",
    "Accélération des processus de collecte",
    "Traçabilité complète des transactions",
    "Notifications automatiques aux citoyens",
    "Intégration avec les services de paiement mobile"
  ]

  const stats = [
    { number: "50+", label: "Municipalités", icon: <MapPin className="w-6 h-6" /> },
    { number: "10M+", label: "FCFA collectés", icon: <BarChart3 className="w-6 h-6" /> },
    { number: "24/7", label: "Support", icon: <Clock className="w-6 h-6" /> },
    { number: "99.9%", label: "Disponibilité", icon: <CheckCircle className="w-6 h-6" /> }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">Djouty</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-primary-600 font-medium">
                Fonctionnalités
              </a>
              <a href="#benefits" className="text-gray-700 hover:text-primary-600 font-medium">
                Avantages
              </a>
              <a href="#contact" className="text-gray-700 hover:text-primary-600 font-medium">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Modernisez la gestion de vos
                <span className="text-transparent bg-clip-text gradient-primary"> recettes municipales</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Djouty révolutionne la collecte et le suivi des recettes municipales avec une plateforme 
                numérique sécurisée, transparente et efficace.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="btn-primary flex items-center justify-center space-x-2">
                  <span>Découvrir la démo</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="btn-secondary">
                  Demander une présentation
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center animate-bounce-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="flex items-center justify-center mb-2 text-primary-600">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Login Form */}
            <div className="flex justify-center lg:justify-end">
              <LoginForm onLogin={handleLogin} />
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 right-0 -z-10 opacity-20">
          <div className="w-96 h-96 bg-primary-200 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 -z-10 opacity-20">
          <div className="w-96 h-96 bg-success-200 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Fonctionnalités avancées
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une suite complète d'outils pour optimiser la gestion financière de votre municipalité
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="card card-hover text-center animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Pourquoi choisir Djouty ?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Une solution éprouvée qui transforme la gestion municipale avec des résultats mesurables.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-3 animate-slide-up"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <CheckCircle className="w-6 h-6 text-success-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 gradient-success rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Tableau de bord</h3>
                  <p className="text-gray-600">Vue d'ensemble en temps réel</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Recettes du jour</span>
                    <span className="font-bold text-success-600">2,450,000 FCFA</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Transactions</span>
                    <span className="font-bold text-primary-600">156</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Taux de collecte</span>
                    <span className="font-bold text-warning-600">94%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à moderniser votre municipalité ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Rejoignez les municipalités qui ont déjà fait confiance à Djouty pour optimiser leurs recettes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-4 px-8 rounded-lg transition-all duration-200 shadow-lg">
              Commencer l'essai gratuit
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-4 px-8 rounded-lg transition-all duration-200">
              Planifier une démo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">D</span>
                </div>
                <span className="text-2xl font-bold">Djouty</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                La solution de référence pour la digitalisation des recettes municipales en Afrique de l'Ouest.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                  <Users className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p>+221 77 123 45 67</p>
                <p>contact@djouty.sn</p>
                <p>Dakar, Sénégal</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Documentation
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Formation
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Assistance technique
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Djouty. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage