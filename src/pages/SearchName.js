import React from "react";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Header from "../pageStructure/Header";
import Footer from "../pageStructure/Footer";
import NotFound from "./NotFound";

import ReactDOM from "react-dom";

// import { } from "react-router-dom";

function SearchName() {
    const [watchlist, setWatchlist] = useState('');
    const [stockName, setStock] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const [error, setError] = useState(false);
    let { search } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/watchlist/searchName/${search}`);
                if (response.status === 404) {
                    setNotFound(true);
                } else if (response.status === 401) {
                    navigate('/#');
                } else if (response.status === 500) {
                    setError(true);
                } else if (response.ok) {
                    const data = await response.json();
                    setWatchlist(data);
                } else {
                    setError(true);
                    throw new Error("Oops, something went wrong.")
                }
            } catch (error) {
                setError(true);
                console.error("Error", error);
            }
        };
        fetchData();
    }, [search, navigate]);

    return (
        <>
            <Header />
            {error && <p>Error fetching data</p>}
            {notFound && <p>Not found</p>}
            {watchlist && (
                <div>
                    <p>Stock Name: {watchlist.stockName}</p>
                </div>
            )}
            <Footer />
        </>
    );
}

export default SearchName;
