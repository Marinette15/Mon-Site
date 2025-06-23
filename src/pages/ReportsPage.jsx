import React, { useState } from 'react'
import { Download, Calendar, BarChart3, PieChart, TrendingUp, FileText } from 'lucide-react'
import Navbar from '../components/Navbar'

const ReportsPage = () => {
  const [user] = useState({
    id: 1,
    name: 'Admin Municipal',
    email: 'admin@djouty.sn',
    role: 'Administrateur'
  })

  const [selectedPeriod, setSelectedPeriod] = useState('month')
  const [selectedReport, setSelectedReport] = useState('revenue')

  const reportTypes = [
    { value: 'revenue', label: 'Rapport des recettes', icon: <BarChart3 className="w-5 h-5" /> },
    { value: 'agents', label: 'Performance des agents', icon: <TrendingUp className="w-5 h-5" /> },
    { value: 'categories', label: 'Répartition par catégorie', icon: <PieChart className="w-5 h-5" /> },
    { value: 'transactions', label: 'Détail des transactions', icon: <FileText className="w-5 h-5" /> }
  ]

  const periods = [
    { value: 'today', label: "Aujourd'hui" },
    { value: 'week', label: 'Cette semaine' },
    { value: 'month', label: 'Ce mois' },
    { value: 'quarter', label: 'Ce trimestre' },
    { value: 'year', label: 'Cette année' },
    { value: 'custom', label: 'Période personnalisée' }
  ]

  const revenueData = [
    { category: 'Taxe de marché', amount: 1250000, percentage: 35, transactions: 156 },
    { category: 'Taxe foncière', amount: 980000, percentage: 28, transactions: 89 },
    { category: 'Permis et autorisations', amount: 750000, percentage: 21, transactions: 34 },
    { category: 'Stationnement', amount: 320000, percentage: 9, transactions: 245 },
    { category: 'Autres recettes', amount: 200000, percentage: 7, transactions: 67 }
  ]

  const agentPerformance = [
    { name: 'Fatou Diallo', zone: 'Marché Central', collections: 45, amount: 675000, efficiency: 94 },
    { name: 'Moussa Sow', zone: 'Zone Industrielle', collections: 38, amount: 890000, efficiency: 91 },
    { name: 'Aïcha Ndiaye', zone: 'Centre-ville', collections: 52, amount: 520000, efficiency: 88 },
    { name: 'Omar Ba', zone: 'Résidentiel', collections: 29, amount: 415000, efficiency: 85 }
  ]

  const handleLogout = () => {
    // Logique de déconnexion
  }

  const handleExport = (format) => {
    console.log(`Exporting ${selectedReport} report as ${format}`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar user={user} onLogout={handleLogout} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Rapports et Analyses
            </h1>
            <p className="text-gray-600">
              Visualisation et export des données financières
            </p>
          </div>
          <div className="flex space-x-3 mt-4 sm:mt-0">
            <button 
              onClick={() => handleExport('pdf')}
              className="btn-secondary flex items-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>PDF</span>
            </button>
            <button 
              onClick={() => handleExport('excel')}
              className="btn-primary flex items-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>Excel</span>
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="card mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type de rapport
              </label>
              <select
                value={selectedReport}
                onChange={(e) => setSelectedReport(e.target.value)}
                className="input-field"
              >
                {reportTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Période
              </label>
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="input-field"
              >
                {periods.map((period) => (
                  <option key={period.value} value={period.value}>
                    {period.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Format d'export
              </label>
              <div className="flex space-x-2">
                <button className="btn-secondary flex-1">PDF</button>
                <button className="btn-secondary flex-1">Excel</button>
                <button className="btn-secondary flex-1">CSV</button>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-600 mb-1">Total recettes</p>
              <p className="text-2xl font-bold text-success-600">3,500,000 FCFA</p>
              <p className="text-sm text-success-600">+12% vs mois dernier</p>
            </div>
          </div>
          <div className="card">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-600 mb-1">Transactions</p>
              <p className="text-2xl font-bold text-primary-600">591</p>
              <p className="text-sm text-primary-600">+8% vs mois dernier</p>
            </div>
          </div>
          <div className="card">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-600 mb-1">Taux de collecte</p>
              <p className="text-2xl font-bold text-warning-600">94%</p>
              <p className="text-sm text-warning-600">+2% vs mois dernier</p>
            </div>
          </div>
          <div className="card">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-600 mb-1">Agents actifs</p>
              <p className="text-2xl font-bold text-gray-900">18</p>
              <p className="text-sm text-gray-600">Stable</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Revenue Breakdown */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Répartition des recettes
              </h2>
              <PieChart className="w-6 h-6 text-primary-600" />
            </div>
            
            <div className="space-y-4">
              {revenueData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-900">
                        {item.category}
                      </span>
                      <span className="text-sm text-gray-600">
                        {item.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary-600 h-2 rounded-full" 
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs text-gray-500">
                        {item.transactions} transactions
                      </span>
                      <span className="text-sm font-semibold text-gray-900">
                        {item.amount.toLocaleString()} FCFA
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Agent Performance */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Performance des agents
              </h2>
              <TrendingUp className="w-6 h-6 text-success-600" />
            </div>
            
            <div className="space-y-4">
              {agentPerformance.map((agent, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-medium text-gray-900">{agent.name}</p>
                      <p className="text-sm text-gray-600">{agent.zone}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">
                        {agent.amount.toLocaleString()} FCFA
                      </p>
                      <p className="text-sm text-gray-600">
                        {agent.collections} collectes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Efficacité</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            agent.efficiency >= 90 ? 'bg-success-600' : 
                            agent.efficiency >= 80 ? 'bg-warning-600' : 'bg-red-600'
                          }`}
                          style={{ width: `${agent.efficiency}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">
                        {agent.efficiency}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Reports */}
        <div className="card mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Rapports rapides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {reportTypes.map((type, index) => (
              <button
                key={index}
                className="p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 text-left"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <div className="text-primary-600">
                    {type.icon}
                  </div>
                  <span className="font-medium text-gray-900">
                    {type.label}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Générer et télécharger
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReportsPage