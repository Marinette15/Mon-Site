import React, { useState } from 'react'
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  FileText,
  Calendar,
  MapPin,
  Clock,
  AlertCircle
} from 'lucide-react'
import Navbar from '../components/Navbar'

const Dashboard = () => {
  const [user] = useState({
    id: 1,
    name: 'Admin Municipal',
    email: 'admin@djouty.sn',
    role: 'Administrateur'
  })

  const stats = [
    {
      title: "Recettes du jour",
      value: "2,450,000 FCFA",
      change: "+12%",
      icon: <DollarSign className="w-6 h-6" />,
      color: "text-success-600",
      bgColor: "bg-success-50"
    },
    {
      title: "Transactions",
      value: "156",
      change: "+8%",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "text-primary-600",
      bgColor: "bg-primary-50"
    },
    {
      title: "Agents actifs",
      value: "24",
      change: "+2",
      icon: <Users className="w-6 h-6" />,
      color: "text-warning-600",
      bgColor: "bg-warning-50"
    },
    {
      title: "Rapports générés",
      value: "8",
      change: "+3",
      icon: <FileText className="w-6 h-6" />,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ]

  const recentTransactions = [
    {
      id: "TXN001",
      type: "Taxe de marché",
      amount: "15,000 FCFA",
      agent: "Fatou Diallo",
      time: "Il y a 5 min",
      status: "Confirmé"
    },
    {
      id: "TXN002",
      type: "Permis de construire",
      amount: "250,000 FCFA",
      agent: "Moussa Sow",
      time: "Il y a 12 min",
      status: "En attente"
    },
    {
      id: "TXN003",
      type: "Taxe foncière",
      amount: "85,000 FCFA",
      agent: "Aïcha Ndiaye",
      time: "Il y a 18 min",
      status: "Confirmé"
    }
  ]

  const alerts = [
    {
      type: "warning",
      message: "3 paiements en retard nécessitent un suivi",
      time: "Il y a 2h"
    },
    {
      type: "info",
      message: "Rapport mensuel prêt à être généré",
      time: "Il y a 4h"
    }
  ]

  const handleLogout = () => {
    // Logique de déconnexion
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar user={user} onLogout={handleLogout} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Tableau de bord
          </h1>
          <p className="text-gray-600">
            Vue d'ensemble de l'activité municipale - {new Date().toLocaleDateString('fr-FR')}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="card animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <p className={`text-sm ${stat.color} font-medium`}>
                    {stat.change} vs hier
                  </p>
                </div>
                <div className={`w-12 h-12 ${stat.bgColor} ${stat.color} rounded-lg flex items-center justify-center`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Transactions */}
          <div className="lg:col-span-2">
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Transactions récentes
                </h2>
                <button className="text-primary-600 hover:text-primary-700 font-medium">
                  Voir tout
                </button>
              </div>
              
              <div className="space-y-4">
                {recentTransactions.map((transaction, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                        <DollarSign className="w-5 h-5 text-primary-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{transaction.type}</p>
                        <p className="text-sm text-gray-600">
                          Par {transaction.agent} • {transaction.time}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">{transaction.amount}</p>
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                        transaction.status === 'Confirmé' 
                          ? 'bg-success-100 text-success-800' 
                          : 'bg-warning-100 text-warning-800'
                      }`}>
                        {transaction.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Actions rapides
              </h3>
              <div className="space-y-3">
                <button className="w-full btn-primary text-left flex items-center space-x-3">
                  <DollarSign className="w-5 h-5" />
                  <span>Nouvelle recette</span>
                </button>
                <button className="w-full btn-secondary text-left flex items-center space-x-3">
                  <FileText className="w-5 h-5" />
                  <span>Générer rapport</span>
                </button>
                <button className="w-full btn-secondary text-left flex items-center space-x-3">
                  <Users className="w-5 h-5" />
                  <span>Gérer agents</span>
                </button>
              </div>
            </div>

            {/* Alerts */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Alertes
              </h3>
              <div className="space-y-3">
                {alerts.map((alert, index) => (
                  <div key={index} className={`p-3 rounded-lg border-l-4 ${
                    alert.type === 'warning' 
                      ? 'bg-warning-50 border-warning-400' 
                      : 'bg-blue-50 border-blue-400'
                  }`}>
                    <div className="flex items-start space-x-3">
                      <AlertCircle className={`w-5 h-5 mt-0.5 ${
                        alert.type === 'warning' ? 'text-warning-600' : 'text-blue-600'
                      }`} />
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {alert.message}
                        </p>
                        <p className="text-xs text-gray-600 mt-1">
                          {alert.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Calendar Widget */}
            <div className="card">
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="w-5 h-5 text-primary-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Aujourd'hui
                </h3>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-3 text-sm">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">9h00 - Réunion équipe</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">14h00 - Visite terrain</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard