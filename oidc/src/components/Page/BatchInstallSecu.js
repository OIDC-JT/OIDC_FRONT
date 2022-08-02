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

    function OS_Select() {
        if (localStorage.getItem("batchsecuOS") == 'Centos') {
         let content = <>
         <Card style={{ width: '80rem', height: '40rem', display: 'flex', position: 'relative', }}>
            <Card.Body style = {{position: 'absolute', top:'50%', left:'50%', transform: 'translate(-50%, -50%)'}}>
              <Card.Title style = {{textAlign : 'center', fontWeight: 'bold', fontSize : '30px', marginBottom : '15px', width : '800px'}}>추가하려는 Server에 아래 명령어를 순서대로 입력하여 batch 파일을 서버에 다운로드/실행해주세요.</Card.Title>
              <hr></hr> 
              <>
                <div classname="mb-3" style = {{textAlign:'center'}}>
                    <label style = {{fontWeight : 'bold', fontSize : '20px', marginBottom : '5px', width : '800px' }}>1. curl-O https://kr.object.ncloudstorage.com/oidc-security/{localStorage.getItem("logInUserId") + "_" + localStorage.getItem("batchsecu")}_cInt.c </label> 
                </div>

                <div classname="mb-3" style = {{textAlign:'center'}}>
                    <label style = {{fontWeight : 'bold', fontSize : '20px', marginBottom : '5px', width : '800px' }}>2. curl-O https://kr.object.ncloudstorage.com/oidc-security/{localStorage.getItem("logInUserId") + "_" + localStorage.getItem("batchsecu")}_test.bat</label> 
                </div>

                <div classname="mb-3" style = {{textAlign:'center'}}>
                    <label style = {{fontWeight : 'bold', fontSize : '20px', marginBottom : '5px', width : '800px' }}>3. chmod 755 {localStorage.getItem("logInUserId") + " " + localStorage.getItem("batchsecu")}_test.bat</label> 
                </div>

                <div classname="mb-3" style = {{textAlign:'center'}}>
                    <label style = {{fontWeight : 'bold', fontSize : '20px', marginBottom : '5px', width : '800px' }}>4. ./{localStorage.getItem("logInUserId") + " " + localStorage.getItem("batchsecu")}_test.bat</label> 
                </div>

                <div classname="mb-3" style = {{textAlign:'center'}}>
                    <label style = {{fontWeight : 'bold', fontSize : '20px', marginBottom : '5px', color: "red" }}>보안 Virus 검사는 매일 00시에 실행되며, 검사가 끝난 후 'Iaas Security Management Service'에서 결과 확인이 가능합니다.</label>
                </div>
                <div style = {{textAlign:'center'}}>
                    <label style = {{fontWeight : 'bold', fontSize : '20px', marginBottom : '5px', color: "red" }}>Server 환경에 따라 검사 시간이 다르게 소요됩니다. </label>
                </div>

                <div classname="d-grid" style={{textAlign : 'center'}}>
                    <span></span>
                    <Link to = "/SecuServerAdd">
                        <Button variant="dark" style = {{borderRadius: '30px', fontWeight : 'bold', marginTop:'10px', width : '200px'}}>다른 서버 추가하기</Button> 
                    </Link>
                </div>

                <div classname="d-grid" style={{textAlign : 'center'}}>
                    <span></span>
                    <Link to = "/LoginPageSecu">
                        <Button variant="dark" style = {{borderRadius: '30px', fontWeight : 'bold', marginTop:'10px', width:'200px'}}>완 료</Button> 
                    </Link>
                </div>
                </>
            </Card.Body>  
          </Card>
         </>
             return content;
        }

        else {

            let content = <>
            <Card style={{ width: '80rem', height: '40rem', display: 'flex', position: 'relative', }}>
               <Card.Body style = {{position: 'absolute', top:'50%', left:'50%', transform: 'translate(-50%, -50%)'}}>
                 <Card.Title style = {{textAlign : 'center', fontWeight: 'bold', fontSize : '30px', marginBottom : '15px', width : '800px'}}>추가하려는 Server에 아래 명령어를 순서대로 입력하여 batch 파일을 서버에 다운로드/실행해주세요.</Card.Title>
                 <hr></hr> 
                 <>
                   <div classname="mb-3" style = {{textAlign:'center'}}>
                       <label style = {{fontWeight : 'bold', fontSize : '20px', marginBottom : '5px', width : '800px' }}>1. wget-O https://kr.object.ncloudstorage.com/oidc-security/{localStorage.getItem("logInUserId") + "_" + localStorage.getItem("batchsecu")}_cInt.c </label> 
                   </div>
   
                   <div classname="mb-3" style = {{textAlign:'center'}}>
                       <label style = {{fontWeight : 'bold', fontSize : '20px', marginBottom : '5px', width : '800px' }}>2. wget-O https://kr.object.ncloudstorage.com/oidc-security/{localStorage.getItem("logInUserId") + "_" + localStorage.getItem("batchsecu")}_test.bat</label> 
                   </div>
   
                   <div classname="mb-3" style = {{textAlign:'center'}}>
                       <label style = {{fontWeight : 'bold', fontSize : '20px', marginBottom : '5px', width : '800px' }}>3. chmod 755 {localStorage.getItem("logInUserId") + " " + localStorage.getItem("batchsecu")}_test.bat</label> 
                   </div>
   
                   <div classname="mb-3" style = {{textAlign:'center'}}>
                       <label style = {{fontWeight : 'bold', fontSize : '20px', marginBottom : '5px', width : '800px' }}>4. ./{localStorage.getItem("logInUserId") + " " + localStorage.getItem("batchsecu")}_test.bat</label> 
                   </div>
   
                   <div classname="mb-3" style = {{textAlign:'center'}}>
                       <label style = {{fontWeight : 'bold', fontSize : '20px', marginBottom : '5px', color: "red" }}>보안 Virus 검사는 매일 00시에 실행되며, 검사가 끝난 후 'Iaas Security Management Service'에서 결과 확인이 가능합니다.</label>
                   </div>
                   <div style = {{textAlign:'center'}}>
                       <label style = {{fontWeight : 'bold', fontSize : '20px', marginBottom : '5px', color: "red" }}>Server 환경에 따라 검사 시간이 다르게 소요됩니다. </label>
                   </div>
   
                   <div classname="d-grid" style={{textAlign : 'center'}}>
                       <span></span>
                       <Link to = "/SecuServerAdd">
                           <Button variant="dark" style = {{borderRadius: '30px', fontWeight : 'bold', marginTop:'10px', width : '200px'}}>다른 서버 추가하기</Button> 
                       </Link>
                   </div>
   
                   <div classname="d-grid" style={{textAlign : 'center'}}>
                       <span></span>
                       <Link to = "/LoginPageSecu">
                           <Button variant="dark" style = {{borderRadius: '30px', fontWeight : 'bold', marginTop:'10px', width:'200px'}}>완 료</Button> 
                       </Link>
                   </div>
                   </>
               </Card.Body>  
             </Card>
            </>
            return content;
        }
    }


function BatchInstallSecu() {
    
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
                        {OS_Select()}
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

export default BatchInstallSecu;
