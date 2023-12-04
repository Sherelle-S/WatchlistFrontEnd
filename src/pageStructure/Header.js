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
                <li className="add-entry">
                    <Link to="/add-entry" className="add-entry">Add Entry</Link>
                </li>
                <li className="show-watchlist">
                    <Link to="/show-watchlist" className="show-watchlist">Show List</Link>
                </li>
                <li className="organize-watchlist">
                    <Link to="/organize-watchlist" className="organize-watchlist">Organize Watchlist</Link>
                </li>
                <li className="update-entry">
                    <Link to="/update-entry" className="update-entry">Update Entry</Link>
                </li>
                <li className="delete-entry">
                    <Link to="/delete-entry" className="delete-entry">Delete Entry</Link>
                </li>
                <SearchByName />
            </ul>
        </div>
    )
}

export default Header;