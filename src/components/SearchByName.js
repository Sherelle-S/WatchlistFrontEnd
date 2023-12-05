import React from "react";
import { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";


function SearchByName() {

    const [stockName, setStock] = useState("");
    console.log(stockName);

    const navigate = useNavigate();
    return (
        <div>
            <form onSubmit={() => {
                navigate(`/searchName/${stockName}`, { replace: true })
            }}>
                <input className="search-bar"
                    type="text"
                    placeholder="Search Stock Name"
                    onChange={(e) => {
                        setStock(e.target.value);
                    }}
                />
                <button className="search-stock button"><i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
        </div>
    )
}
export default SearchByName;