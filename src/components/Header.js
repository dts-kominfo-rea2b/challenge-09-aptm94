// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import './Header.css';

const Header = ({judul,subJudul}) => {
    return <div class="header center">
        <h1>{judul}</h1>
        <h4>{subJudul}</h4>
        <hr/>
    </div>
        

    
}

export default Header;