import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-dom";

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
                    placeholder="Search Stock Item"
                    onChange={(e) => {
                        setStock(e.target.value);
                    }}
                />
                <button className="search-stock button">
                </button>
            </form>
        </div>
    )
}
export default SearchByName;