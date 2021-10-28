import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return(
        <header id="header">
            <h1>
                <Link to="/" className="page__click">YOON.</Link>
            </h1>
            <div className="member">
                <ul>
                    <li><Link to="board/board.html" className="">Board</Link></li>
                    <li><Link to="/login" className="page__click">Login</Link></li>
                    <li><Link to="/join" className="page__click">Join</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;