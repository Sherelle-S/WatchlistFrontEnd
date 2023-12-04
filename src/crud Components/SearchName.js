import React from "react";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
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
                }

                if (!response.ok) {
                    setError(true);
                    throw new Error('Oops, something went wrong');
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
            <h2>Hello</h2>
        </>
    );
}

export default SearchName;
