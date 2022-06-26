
import '../App.css';
import '../style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../footer';
import Navbar from '../navBar';
import SideMenu from '../sideMenu'
import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import $ from "jquery";
import { Component } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Info(){
    return (
        <div className="MigHelper">
        <body class="sb-nav-fixed">
           <Navbar></Navbar>
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                   <SideMenu></SideMenu>
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        <div class="container-fluid px-4">
                            <h1 class="mt-4">Information of MigHelper</h1>
                            <ol class="breadcrumb mb-4">
                                <li class="breadcrumb-item active">Information</li>
                            </ol>
                            <p1>안녕하세요. 제 4회 OIDC에 참가한 팀 정통입니다.</p1>
                            <br></br>
                            <p1>팀 정통이 해당 서비스를 제공하고자 하는 목적은 다음과 같습니다.</p1>
                            <br></br>
                            <br></br>
                            <p1>많은 기업들이 기존의 On-premise 환경을 Cloud 환경으로 Lift and Shift를 진행하고 있고, 이러한 migration을 위해 많은 기업들이 MSP 기업이나 Cloud 전문가에게 거액의 돈을 주고 migration을 의뢰하여 진행하고 있습니다. 이러한 돈이 부담되는 migration 의뢰를 MSP 기업의 도움 없이, 기업이 직접 웹서비스를 활용하여 기업이 보유한 자원에 따른 Cloud 서버 및 규모와 비용 산정에 도움 주고자 함이 목적입니다.</p1>
                            <br></br>
                            <p1>또한 Cloud를 이용하는 기업의 경우, CSP에서 제공하는 Console을 활용해 Cloud 내에서 진행되는 워크로드들을 일일히 확인해야 하는데, 현재 Cloud 내에서 진행되는 워크로드를 한 눈으로 모니터링 할 수 있는 대시보드를 제공하여 일일히 모든 서비스를 확인해야 하는 번거로움을 줄이고, 보안 취약점을 제시하여 기업의 Cloud 환경의 보안을 강화 하고자 함이 목적입니다.</p1>
                            <br></br>
                            <br></br>
                            <p1>우리가 제공하는 서비스는 아래와 같습니다.</p1>
                            <br></br>
                            <br></br>
                            <ul>
                                <li>MigHelper : 클라우드로의 마이그레이션 시 솔루션 제공</li>
                                <li>Create Server Helper : 원하는 사양에 맞는 클라우드 추천</li>
                                <li>Dashboard : 로그인 후 이용가능한 기능으로 자신의 클라우드 상태를 확인할 수 있는 대시보드 제공</li>
                                <li>Plus 기능 : 보안 거버넌스 제공</li>
                            </ul>
                        </div>
                    </main>
                 <Footer></Footer>
                </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
            <script src="js/scripts.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js" crossorigin="anonymous"></script>
            <script src="assets/demo/chart-area-demo.js"></script>
            <script src="assets/demo/chart-bar-demo.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/simple-datatables@latest" crossorigin="anonymous"></script>
            <script src="js/datatables-simple-demo.js"></script>
        </body>
        </div>
      );
}export default Info; 