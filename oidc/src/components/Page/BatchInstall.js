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

let content = null
console.log(localStorage.getItem("batchOS"))
if(localStorage.getItem("batchOS") == 'Centos7' || localStorage.getItem("batchOS") == 'Centos6'){
    content = <>
         <Card style={{ width: '80rem', height: '40rem', display: 'flex', position: 'relative', }}>
            <Card.Body style = {{position: 'absolute', top:'50%', left:'50%', transform: 'translate(-50%, -50%)'}}>
              <Card.Title style = {{textAlign : 'center', fontWeight: 'bold', fontSize : '30px', marginBottom : '15px', width : '800px'}}>추가하려는 서버에 아래의 명령어를 순서대로 입력하여서 배치 파일을 다운로드/실행해 주시길 바랍니다.</Card.Title>
              
              <hr></hr> 
              <>
                <div classname="mb-3" style = {{textAlign:'center'}}>
                    <label style = {{fontWeight : 'bold', fontSize : '20px', marginBottom : '5px'}}>1. curl -O https://kr.object.ncloudstorage.com/oidc/{localStorage.getItem("batch")}.bat</label>  
                </div>

                <div classname="mb-3" style = {{textAlign:'center'}}>
                    <label style = {{fontWeight : 'bold', fontSize : '20px', marginBottom : '5px'}}>2. chmod 755 {localStorage.getItem("batch")}.bat</label>
                </div>
                <div style = {{textAlign:'center'}}>
                    <label style = {{fontWeight : 'bold', fontSize : '20px', marginBottom : '5px'}}>3. ./{localStorage.getItem("batch")}.bat</label>
                </div>
                <br></br>

                <div style = {{textAlign:'center'}}>
                <h6 style={{fontWeight : 'bold', fontSize : '20px', marginBottom : '5px', color: "red" }}>반드시 배치파일을 다운로드 및 실행한 이후에 완료버튼을 클릭해주세요.</h6>
                </div>

                <div style = {{textAlign:'center'}}>
                <h6 style={{fontWeight : 'bold', fontSize : '20px', marginBottom : '20px', color: "red" }}>(완료버튼 클릭 후 모니터링 등록시간이 30초~5분 가량 소요됩니다.)</h6>
                </div>
               
                <div classname="d-grid" style={{textAlign : 'center'}}>
                    <span></span>
                    <Link to = "/ServerAdd">
                        <Button variant="dark" style = {{borderRadius: '30px', fontWeight : 'bold', marginTop:'10px', width : '200px'}}>다른 서버 추가하기</Button> 
                    </Link>
                </div>

                <div classname="d-grid" style={{textAlign : 'center'}}>
                    <span></span>
                    <Link to = "/LoginPage">
                        <Button variant="dark" style = {{borderRadius: '30px', fontWeight : 'bold', marginTop:'10px', width:'200px'}}>완 료</Button> 
                    </Link>
                </div>
                </>
            </Card.Body>  
          </Card>
    </>
}
else{
    content = <>
         <Card style={{ width: '80rem', height: '40rem', display: 'flex', position: 'relative', }}>
            <Card.Body style = {{position: 'absolute', top:'50%', left:'50%', transform: 'translate(-50%, -50%)'}}>
              <Card.Title style = {{textAlign : 'center', fontWeight: 'bold', fontSize : '30px', marginBottom : '15px', width : '800px'}}>추가하려는 서버에 아래의 명령어를 순서대로 입력하여 배치 파일을 다운로드/실행해 주시길 바랍니다.</Card.Title>
              
              <hr></hr> 
              <>
                <div classname="mb-3" style = {{textAlign:'center'}}>
                    <label style = {{fontWeight : 'bold', fontSize : '20px', marginBottom : '5px'}}>1. wget https://kr.object.ncloudstorage.com/oidc/{localStorage.getItem("batch")}.bat</label> 
                </div>

                <div classname="mb-3" style = {{textAlign:'center'}}>
                    <label style = {{fontWeight : 'bold', fontSize : '20px', marginBottom : '5px'}}>2. chmod 755 {localStorage.getItem("batch")}.bat</label>
                </div>
                <div style = {{textAlign:'center'}}>
                    <label style = {{fontWeight : 'bold', fontSize : '20px', marginBottom : '5px'}}>3. ./{localStorage.getItem("batch")}.bat</label>
                </div>
                <br></br>
                <h6 style={{color:"red"}}>반드시 배치파일을 다운로드 및 실행한 이후에 완료버튼을 클릭해주세요. (완료버튼 클릭 후 모니터링 등록시간이 30초~5분 가량 소요됩니다.)</h6>
                <div classname="d-grid" style={{textAlign : 'center'}}>
                    <span></span>
                    <Link to = "/ServerAdd">
                        <Button variant="dark" style = {{borderRadius: '30px', fontWeight : 'bold', marginTop:'10px', width : '200px'}}>다른 서버 추가하기</Button> 
                    </Link>
                </div>

                <div classname="d-grid" style={{textAlign : 'center'}}>
                    <span></span>
                    <Link to = "/LoginPage">
                        <Button variant="dark" style = {{borderRadius: '30px', fontWeight : 'bold', marginTop:'10px', width:'200px'}}>완 료</Button> 
                    </Link>
                </div>
                </>
            </Card.Body>  
          </Card>
    </>
}
function BatchInstall() {
    
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
                        <h1 class="mt-4">Server-Add</h1>
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

export default BatchInstall;
