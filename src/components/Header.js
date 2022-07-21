// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import './Header.css';

const Header = ({title,subtitle}) => {
    return <div class="header center">
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
        <hr/>
    </div>
        

    
}

export default Header;