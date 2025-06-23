import React, { useState } from 'react'
import { Plus, Search, Filter, Download, Eye, Edit, Trash2 } from 'lucide-react'
import Navbar from '../components/Navbar'

const RecettesPage = () => {
  const [user] = useState({
    id: 1,
    name: 'Admin Municipal',
    email: 'admin@djouty.sn',
    role: 'Administrateur'
  })

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { value: 'all', label: 'Toutes les catégories' },
    { value: 'marche', label: 'Taxe de marché' },
    { value: 'foncier', label: 'Taxe foncière' },
    { value: 'permis', label: 'Permis et autorisations' },
    { value: 'stationnement', label: 'Stationnement' },
    { value: 'autres', label: 'Autres recettes' }
  ]

  const recettes = [
    {
      id: 'REC001',
      type: 'Taxe de marché',
      montant: '15,000',
      payeur: 'Aminata Diop',
      agent: 'Fatou Diallo',
      date: '2024-01-15',
      statut: 'Payé',
      reference: 'TXN001234'
    },
    {
      id: 'REC002',
      type: 'Permis de construire',
      montant: '250,000',
      payeur: 'Société BATIR SARL',
      agent: 'Moussa Sow',
      date: '2024-01-15',
      statut: 'En attente',
      reference: 'TXN001235'
    },
    {
      id: 'REC003',
      type: 'Taxe foncière',
      montant: '85,000',
      payeur: 'Mamadou Fall',
      agent: 'Aïcha Ndiaye',
      date: '2024-01-14',
      statut: 'Payé',
      reference: 'TXN001236'
    },
    {
      id: 'REC004',
      type: 'Stationnement',
      montant: '5,000',
      payeur: 'Ibrahima Sarr',
      agent: 'Omar Ba',
      date: '2024-01-14',
      statut: 'Payé',
      reference: 'TXN001237'
    }
  ]

  const handleLogout = () => {
    // Logique de déconnexion
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Payé':
        return 'bg-success-100 text-success-800'
      case 'En attente':
        return 'bg-warning-100 text-warning-800'
      case 'Annulé':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar user={user} onLogout={handleLogout} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Gestion des Recettes
            </h1>
            <p className="text-gray-600">
              Suivi et gestion de toutes les recettes municipales
            </p>
          </div>
          <button className="btn-primary flex items-center space-x-2 mt-4 sm:mt-0">
            <Plus className="w-5 h-5" />
            <span>Nouvelle recette</span>
          </button>
        </div>

        {/* Filters */}
        <div className="card mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-4">
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 flex-1">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Rechercher par payeur, référence..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input-field pl-10"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="input-field"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex space-x-3">
              <button className="btn-secondary flex items-center space-x-2">
                <Filter className="w-5 h-5" />
                <span>Filtres</span>
              </button>
              <button className="btn-secondary flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Exporter</span>
              </button>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-600 mb-1">Total du jour</p>
              <p className="text-2xl font-bold text-success-600">355,000 FCFA</p>
            </div>
          </div>
          <div className="card">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-600 mb-1">Transactions</p>
              <p className="text-2xl font-bold text-primary-600">4</p>
            </div>
          </div>
          <div className="card">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-600 mb-1">En attente</p>
              <p className="text-2xl font-bold text-warning-600">1</p>
            </div>
          </div>
          <div className="card">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-600 mb-1">Taux collecte</p>
              <p className="text-2xl font-bold text-gray-900">94%</p>
            </div>
          </div>
        </div>

        {/* Recettes Table */}
        <div className="card">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Référence
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type de recette
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Payeur
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Montant
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Agent
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Statut
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recettes.map((recette, index) => (
                  <tr key={recette.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {recette.reference}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {recette.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {recette.payeur}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                      {recette.montant} FCFA
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {recette.agent}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(recette.date).toLocaleDateString('fr-FR')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(recette.statut)}`}>
                        {recette.statut}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button className="text-primary-600 hover:text-primary-900">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-gray-600 hover:text-gray-900">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecettesPage