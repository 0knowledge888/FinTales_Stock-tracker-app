import { checkAdminAccess } from "@/lib/admin/isAdmin";
import { getAdminStats, getAllUsers } from "@/lib/actions/admin.actions";

export default async function AdminPage() {
  await checkAdminAccess();

  const stats = await getAdminStats();
  const users = await getAllUsers();

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-gray-400 text-sm mb-2">Total Utilisateurs</h3>
          <p className="text-3xl font-bold">{stats.totalUsers}</p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-gray-400 text-sm mb-2">Actions en Watchlist</h3>
          <p className="text-3xl font-bold">{stats.totalWatchlistItems}</p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-gray-400 text-sm mb-2">Moyenne/Utilisateur</h3>
          <p className="text-3xl font-bold">
            {(stats.totalWatchlistItems / stats.totalUsers).toFixed(1)}
          </p>
        </div>
      </div>

      {/* Popular Stocks */}
      <div className="bg-gray-800 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-bold mb-4">Stocks les plus populaires</h2>
        <div className="space-y-3">
          {stats.popularStocks.map((stock) => (
            <div key={stock.symbol} className="flex justify-between items-center">
              <div>
                <span className="font-bold">{stock.symbol}</span>
                <span className="text-gray-400 ml-2">{stock.company}</span>
              </div>
              <span className="bg-blue-600 px-3 py-1 rounded">
                {stock.users} utilisateurs
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Users List */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Utilisateurs inscrits</h2>
        <div className="space-y-2">
          {users.map((user: any, idx: number) => (
            <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-700">
              <div>
                <p className="font-medium">{user.name || "Sans nom"}</p>
                <p className="text-sm text-gray-400">{user.email}</p>
              </div>
              <p className="text-sm text-gray-400">
                {new Date(user.createdAt).toLocaleDateString('fr-FR')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
