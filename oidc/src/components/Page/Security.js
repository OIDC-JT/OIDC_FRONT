import '../App.css';
import '../style.css'
import Navbar from '../navBar';
import Footer from '../footer';
import SideMenu from '../sideMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react";
import axios from 'axios'
import Modal from "react-modal";
import { format } from 'react-string-format';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import LoginPageSecu from './LoginPageSecu';


Modal.setAppElement("#root");

function Security(){

if(localStorage.getItem("auth") != null){
  return(LoginPageSecu())
}
else{  
let content = <>

<Card style={{ width: '80rem', height: '40rem', display: 'flex', position: 'relative', }}>
            <Card.Body style = {{position: 'absolute', top:'50%', left:'50%', transform: 'translate(-50%, -50%)'}}>
              <Card.Title>Migration Helper Dashboard</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">보안 대시보드 화면입니다.</Card.Subtitle>
              <Card.Text>
                저희 서비스를 이용해주셔서 감사합니다. 서비스 진행을 위해 로그인을 해주십시오.
                아이디가 존재하지 않을 경우 회원가입을 수행해주세요.
              </Card.Text>
              <Link to = "/SignUp">
               <Button variant="dark" style = {{borderRadius: '30px', fontWeight : 'bold'}}>회원가입</Button> 
              </Link>
              <Link to = "/LoginPageSecu">
               <Button variant="dark" style = {{borderRadius: '30px', fontWeight : 'bold'}}>로그인</Button> 
              </Link>
            </Card.Body>  
          </Card>
</>;

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
                        <h1 class="mt-4">Dashboard</h1>
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item active">My Clouds</li>
                        </ol>
                        {content}
                        <br></br>
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
}
};

export default Security;