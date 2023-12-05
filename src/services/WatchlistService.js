import React, {useState, useEffect} from "react";
// import axios from "axios";

const Watchlist_API_Base_URL = "localhost:8080/watchlist";


function getWatchlist(){
    const[watchlistData, setWatchlistDate] = useState([]);

    useEffect(() => {
        fetch(Watchlist_API_Base_URL).then(response => response.json()).then(data => {
            setWatchlistData(data)
        })
        .catch(error=> {
            console.error("Error fetching watchlist data:", error);
        });
    }, []);

    return(
         <div>
            <h2>base</h2>
         </div>
    );
}

export default getWatchlist;