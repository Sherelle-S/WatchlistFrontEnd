import React from "react";

function Footer() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    return (
        <div className="footer">
            <ul className="socials">
                <li className="selection">
                    <a href="https://sherellescott.dev">
                        <i className="fa-solid fa-globe"> </i> sherellescott.dev</a>
                </li>
                <li className="selection">
                    <a href="https://www.linkedin.com/in/sherelle-scott"><i className="fa-brands fa-linkedin"></i></a>
                </li>
                <li className="selection">
                    <a href="https://github.com/Sherelle-S"><i className="fa-brands fa-square-github"></i></a>
                </li>
                <li className="selection">
                    <a href="https://twitter.com/sherellie1"><i className="fa-brands fa-square-twitter"></i></a>
                </li>
                <li className="Selection"><h6> Sherelle Copyright {`${year}`}</h6></li>
            </ul>
        </div>
    )
}

export default Footer;