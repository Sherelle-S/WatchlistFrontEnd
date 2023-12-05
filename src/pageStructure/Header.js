import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchByName from "../components/SearchByName";

function Header(){
    const[watchlist, setWatchlist] = useState(true)
    function selectAPI(){
        setWatchlist(prevState => !prevState)
    }

    return(
        <div className="nav-container">
            <ul className="header">
                <li className="addEntry">
                    <Link to="/addEntry" className="addEntry page-links">Add Entry</Link>
                </li>
                <li className="show-watchlist">
                    <Link to="/" className="show-watchlist page-links">Show List</Link>
                </li>
                <li className="sortedWatchlist">
                    <Link to="/sortedWatchlist" className="sortedWatchlist page-links">Sorted Watchlist</Link>
                </li>
                <li className="updateEntry">
                    <Link to="/updateEntry" className="updateEntry page-links">Update Entry</Link>
                </li>
                <li className="deleteEntry">
                    <Link to="/deleteEntry" className="deleteEntry page-links">Delete Entry</Link>
                </li>
                <SearchByName />
            </ul>
        </div>
    )
}

export default Header;