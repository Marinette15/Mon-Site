import React, { useState } from 'react'
import { Plus, Search, Filter, UserPlus, Shield, Edit, Trash2 } from 'lucide-react'
import Navbar from '../components/Navbar'

const UsersPage = () => {
  const [user] = useState({
    id: 1,
    name: 'Admin Municipal',
    email: 'admin@djouty.sn',
    role: 'Administrateur'
  })

  const users = [
    {
      id: 1,
      name: 'Fatou Diallo',
      email: 'fatou.diallo@djouty.sn',
      role: 'Agent Collecteur',
      zone: 'Marché Central',
      status: 'Actif',
      lastLogin: '2024-01-15 09:30'
    },
    {
      id: 2,
      name: 'Moussa Sow',
      email: 'moussa.sow@djouty.sn',
      role: 'Agent Collecteur',
      zone: 'Zone Industrielle',
      status: 'Actif',
      lastLogin: '2024-01-15 08:45'
    },
    {
      id: 3,
      name: 'Aïcha Ndiaye',
      email: 'aicha.ndiaye@djouty.sn',
      role: 'Superviseur',
      zone: 'Toutes zones',
      status: 'Actif',
      lastLogin: '2024-01-15 10:15'
    },
    {
      id: 4,
      name: 'Omar Ba',
      email: 'omar.ba@djouty.sn',
      role: 'Agent Collecteur',
      zone: 'Centre-ville',
      status: 'Inactif',
      lastLogin: '2024-01-12 16:20'
    }
  ]

  const handleLogout = () => {
    // Logique de déconnexion
  }

  const getRoleColor = (role) => {
    switch (role) {
      case 'Administrateur':
        return 'bg-red-100 text-red-800'
      case 'Superviseur':
        return 'bg-blue-100 text-blue-800'
      case 'Agent Collecteur':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusColor = (status) => {
    return status === 'Actif' 
      ? 'bg-success-100 text-success-800' 
      : 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar user={user} onLogout={handleLogout} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Gestion des Utilisateurs
            </h1>
            <p className="text-gray-600">
              Administration des comptes et permissions
            </p>
          </div>
          <button className="btn-primary flex items-center space-x-2 mt-4 sm:mt-0">
            <UserPlus className="w-5 h-5" />
            <span>Nouvel utilisateur</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-600 mb-1">Total utilisateurs</p>
              <p className="text-2xl font-bold text-gray-900">24</p>
            </div>
          </div>
          <div className="card">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-600 mb-1">Agents actifs</p>
              <p className="text-2xl font-bold text-success-600">18</p>
            </div>
          </div>
          <div className="card">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-600 mb-1">Superviseurs</p>
              <p className="text-2xl font-bold text-primary-600">4</p>
            </div>
          </div>
          <div className="card">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-600 mb-1">Administrateurs</p>
              <p className="text-2xl font-bold text-warning-600">2</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="card mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-4">
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 flex-1">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Rechercher par nom, email..."
                  className="input-field pl-10"
                />
              </div>
              <select className="input-field">
                <option value="">Tous les rôles</option>
                <option value="admin">Administrateur</option>
                <option value="supervisor">Superviseur</option>
                <option value="agent">Agent Collecteur</option>
              </select>
              <select className="input-field">
                <option value="">Tous les statuts</option>
                <option value="active">Actif</option>
                <option value="inactive">Inactif</option>
              </select>
            </div>
            <button className="btn-secondary flex items-center space-x-2">
              <Filter className="w-5 h-5" />
              <span>Filtres avancés</span>
            </button>
          </div>
        </div>

        {/* Users Table */}
        <div className="card">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Utilisateur
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rôle
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Zone assignée
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Statut
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Dernière connexion
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user, index) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                          <span className="text-primary-600 font-medium text-sm">
                            {user.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {user.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {user.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getRoleColor(user.role)}`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.zone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(user.status)}`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(user.lastLogin).toLocaleString('fr-FR')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button className="text-primary-600 hover:text-primary-900">
                          <Shield className="w-4 h-4" />
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

export default UsersPage