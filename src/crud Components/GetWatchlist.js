import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// import axios from "axios";

const Watchlist_API_Base_URL = "http://localhost:8080/watchlist/";

function GetWatchlist() {
    const [watchlistData, setWatchlistData] = useState([]);

    useEffect(() => {
        const fetchWatchlistData = async () => {
            try {
                const response = await fetch(Watchlist_API_Base_URL);
                if(!response.ok){
                    throw new Error("Internal system error.");
                }
                const data = await response.json();
                setWatchlistData(data);
            } catch (error) {
                console.error("Error fetching watchlist data:", error);
            }
        };
        fetchWatchlistData();
    }, []);
    // return <h1>Hello Babe</h1>;
    return (
        <div>
            <h2 className='text-center'>Watchlist</h2>
            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>UUID</th>
                            <th>Stock Name</th>
                            <th>Stock Symbol</th>
                            <th>Purchase Currency</th>
                            <th>Date Purchased</th>
                            <th>Requested Vol Stock</th>
                            <th>Currently Owned Vol Stock</th>
                            <th>Purchase Price</th>
                            <th>Current Price</th>
                            <th>Profit</th>
                            <th>Points Change</th>
                            <th>Open</th>
                            <th>Close</th>
                            <th>Intraday High</th>
                        </tr>
                    </thead>
                    <tbody>

                        {watchlistData.map(watchlist => (
                            <tr key={watchlist.uuid}>
                                <td>{watchlist.uuid}</td>
                                <td>{watchlist.stockName}</td>
                                <td>{watchlist.symbol}</td>
                                <td>{watchlist.currency}</td>
                                <td>{watchlist.datePurchased}</td>
                                <td>{watchlist.wantsVolStock}</td>
                                <td>{watchlist.ownsVolStock}</td>
                                <td>{watchlist.purchasePrice}</td>
                                <td>{watchlist.currentPrice}</td>
                                <td>{watchlist.profit}</td>
                                <td>{watchlist.pointsChange}</td>
                                <td>{watchlist.Open}</td>
                                <td>{watchlist.close}</td>
                                <td>{watchlist.intradayHigh}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default GetWatchlist;