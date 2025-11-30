"use server";

import { connectToDatabase } from "@/database/mongoose";
import { Watchlist } from "@/database/models/watchlist.model";
import { checkAdminAccess } from "@/lib/admin/isAdmin";

export async function getAdminStats() {
  await checkAdminAccess();

  try {
    const mongoose = await connectToDatabase();
    const db = mongoose.connection.db;
    if (!db) throw new Error("MongoDB connection not found");

    // Stats utilisateurs
    const totalUsers = await db.collection("user").countDocuments();

    // Stats watchlist
    const totalWatchlistItems = await Watchlist.countDocuments();
    
    // Stocks les plus populaires
    const popularStocks = await Watchlist.aggregate([
      { $group: { _id: "$symbol", count: { $sum: 1 }, company: { $first: "$company" } } },
      { $sort: { count: -1 } },
      { $limit: 10 }
    ]);

    // Activité récente
    const recentActivity = await Watchlist.find()
      .sort({ addedAt: -1 })
      .limit(10)
      .lean();

    return {
      totalUsers,
      totalWatchlistItems,
      popularStocks: popularStocks.map(s => ({
        symbol: s._id,
        company: s.company,
        users: s.count
      })),
      recentActivity: recentActivity.map(a => ({
        symbol: a.symbol,
        company: a.company,
        addedAt: a.addedAt
      }))
    };
  } catch (error) {
    console.error("Error fetching admin stats:", error);
    throw new Error("Failed to fetch admin stats");
  }
}

export async function getAllUsers() {
  await checkAdminAccess();

  try {
    const mongoose = await connectToDatabase();
    const db = mongoose.connection.db;
    if (!db) throw new Error("MongoDB connection not found");

    const users = await db.collection("user")
      .find({}, { projection: { email: 1, name: 1, createdAt: 1, _id: 0 } })
      .sort({ createdAt: -1 })
      .toArray();

    return JSON.parse(JSON.stringify(users));
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Failed to fetch users");
  }
}
