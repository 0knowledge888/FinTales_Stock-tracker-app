import { Star } from "lucide-react";
import { searchStocks } from "@/lib/actions/finnhub.actions";
import SearchCommand from "@/components/SearchCommand";
import { getWatchlistWithData } from "@/lib/actions/watchlist.actions";
import { WatchlistTable } from "@/components/WatchlistTable";

const Watchlist = async () => {
  const watchlist = await getWatchlistWithData();
  const initialStocks = await searchStocks();

  // Empty state
  if (watchlist.length === 0) {
    return (
      <section className="flex watchlist-empty-container">
        <div className="watchlist-empty">
          <Star className="watchlist-star" />
          <h2 className="empty-title">Votre Watchlist est vide</h2>
          <p className="empty-description">
            Commencer à créer votre watchlist !
          </p>
        </div>
        <SearchCommand initialStocks={initialStocks} />
      </section>
    );
  }

  return (
    <section className="watchlist">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="watchlist-title">Watchlist</h2>
          <SearchCommand initialStocks={initialStocks} />
        </div>
        <WatchlistTable watchlist={watchlist} />
      </div>
    </section>
  );
};

export default Watchlist;
