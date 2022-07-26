//왼쪽의 사이드메뉴바 관련 컴포넌트입니다.
import React from 'react';
import './App.css';
import './style.css'

function SideMenu() {
    return (
        <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div class="sb-sidenav-menu">
            <div class="nav">
                <div class="sb-sidenav-menu-heading">Info</div>
                <a class="nav-link" href="/">
                    <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                    Infomation
                </a>
                <div class="sb-sidenav-menu-heading">Use Helper</div>
                <a class="nav-link collapsed" href="/mighelper" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                    <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                    Migration Helper
                    <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                </a>
                <a class="nav-link collapsed" href="/createserver" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                    <div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
                    Server Create Helper
                    <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                </a>
                <div class="sb-sidenav-menu-heading">Dashboard</div>
                <a class="nav-link" href="/dashboard">
                    <div class="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
                    Dashboard
                </a>
                <a class="nav-link" href="/security">
                    <div class="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
                    Security
                </a>
            </div>
        </div>
        <div class="sb-sidenav-footer">
            <div class="small">Logged in as:</div>
            {localStorage.getItem("logInUserId")}
        </div>
    </nav>
    );
}

export default SideMenu;