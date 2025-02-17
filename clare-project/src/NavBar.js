import React from 'react';
import './styles/NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <div className="logo">claré</div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Our Products</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Skin Analysis</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;

