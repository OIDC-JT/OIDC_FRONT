import React from 'react';
//import Layout from './component/layout';
import './App.css';
import './style.css'

function Navbar() {
    return (
        <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <a class="navbar-brand ps-3" href="/">MigHelper</a>
            <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i class="fas fa-bars"></i></button>
            
        </nav>
    );
}

export default Navbar;
