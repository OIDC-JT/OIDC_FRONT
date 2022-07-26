import '../App.css';
import '../style.css'
import Navbar from '../navBar';
import Footer from '../footer';
import SideMenu from '../sideMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import $ from "jquery";


async function makeServer(){ // await 사용하기위해 async 사용

    const ServerType = $("#OS_ver option:selected").val();
    const ServerName = document.getElementById("server_name").value; // 재찬이 ppt 상에서는 ServerName 입력은 따로 없었지만 우선 추가해봤습니다.
    const ID = localStorage.getItem("logInUserId");

    let list_data = {username:ID, servertype:ServerType, servername:ServerName}; // JSON으로 전달

    await axios.post('http://127.0.0.1:8000/accounts/login/SecuServerAdd', list_data) // ServerAdd라는 url을 임시적으로 지정해봤습니다.
            .then(response => {
              console.log(response)
              alert('서버 추가가 완료되었습니다.');
              window.location.href = "/BatchInstallSecu";
            })
            .catch(err => {        
              console.log(err);
              alert('서버 추가에 실패하였습니다.');
              window.location.href = "/BatchInstallSecu";
            })
    }

    let content = <>
         <Card style={{ width: '80rem', height: '40rem', display: 'flex', position: 'relative', }}>
            <Card.Body style = {{position: 'absolute', top:'50%', left:'50%', transform: 'translate(-50%, -50%)'}}>
              <Card.Title style = {{textAlign : 'center', fontWeight: 'bold', fontSize : '30px', marginBottom : '15px'}}>Server-Add</Card.Title>
              <Card.Subtitle className="mb-2 text-muted" style = {{textAlign : 'center', fontWeight: 'bold', fontSize : '20px'}}>서버 추가화면입니다.</Card.Subtitle>
              <hr></hr> 
              <>
                <div classname="mb-3">
                    <label style = {{fontWeight : 'bold', fontSize : '20px', marginBottom : '5px'}}>Server Type : </label> 
                </div>

                <div>
                    <select name='OS_ver' style={{width : '260px', marginBottom : '10px', borderRadius : '20px', height : '30px', borderStyle : 'solid', borderColor:'black'}}>
                       <option value="Centos7">Centos7</option>
                       <option value="Centos6">Centos6</option>
                       <option value="Ubuntu20.04">Ubuntu20.04 </option>
                       <option value="Ubuntu18.04">Ubuntu18.04</option>
                       <option value="Ubuntu16.04">Ubuntu16.04</option>
                    </select>
                </div>
                
                <div classname="mb-3">
                    <label style = {{fontWeight : 'bold', fontSize : '20px', marginBottom : '5px'}}>Server Name : </label>
                </div>
                <div>
                    <input   style = {{width : '260px', marginBottom : '10px', borderRadius : '20px', height : '30px', borderStyle : 'solid', borderColor:'black'}} id = 'server_name' type="text" classname="form-control" placeholder="Enter ServerName" />
                </div>
                
                <div classname="d-grid" style={{textAlign : 'center'}}>
                    <span></span>
                    <Button variant="dark" type = "submit" onClick = {function(){makeServer()}} style = {{borderRadius: '30px', fontWeight : 'bold', marginTop:'10px'}}>서버 추가하기</Button> 
                </div>

               

                <div classname="d-grid" style={{textAlign : 'center'}}>
                    <span></span>
                    <Link to = "/LoginPageSecu">
                        <Button variant="dark" style = {{borderRadius: '30px', fontWeight : 'bold', marginTop:'10px', width : '130px'}}>로그인 페이지</Button> 
                    </Link>
                </div>
                </>
            </Card.Body>  
          </Card>
    </>

function ServerAddSecu() {
    
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
                        <h1 class="mt-4">Security Server-Add</h1>
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item active">서버 추가하기</li>
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

export default ServerAddSecu;


