import { Link } from "react-router-dom";

function NotFound() {
    return (
        <>
            <div className='notFound-container'>
                <h2 className='notFound-text'>You do not have an item in your watchlist with that name</h2>

                <ul className='notFound-list'>
                    <li> <Link to='/' className='notFound-redirect selection'> <i className="fa-solid fa-magnifying-glass"></i>Search Another Entry </Link></li>
                    <br />
                    <li><Link to='/GetWatchlist' className='notFound-redirect selection'> <i className=""></i>Show All Entries </Link></li>
                </ul>
            </div>
        </>
    )
}

export default NotFound;