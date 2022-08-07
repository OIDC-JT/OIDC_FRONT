import '../App.css';
import '../style.css'
import Navbar from '../navBar';
import Footer from '../footer';
import SideMenu from '../sideMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react";
import axios from 'axios'
import Modal from "react-modal";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


async function makeUser(){ // await 사용하기위해 async 사용
  
    const Username = document.getElementById("signUp_Username").value;
    const Email = document.getElementById("signUp_Email").value;
    const Password = document.getElementById("signUp_Password").value;
    const PasswordCheck = document.getElementById("signUp_PasswordCheck").value;
    
    let list_data = {username:Username, email:Email, password1:Password, password2:PasswordCheck};
    console.log(list_data);
    
    await axios.post('http://192.168.2.7:8000/accounts/', list_data) // post 조건이 완전히 완료될때까지 기다리라는 await
            .then(response => {
                alert('회원가입이 완료되었습니다.');
                window.location.href = "/Dashboard";
              })
              .catch(err => {
                console.log(err);
                alert('회원가입이 실패하였습니다.');
                window.location.href = "/Dashboard";
              })
    }

    let content = <>
         <Card style={{ width: '80rem', height: '40rem', display: 'flex', position: 'relative', }}>
            <Card.Body style = {{position: 'absolute', top:'50%', left:'50%', transform: 'translate(-50%, -50%)'}}>
              <Card.Title style = {{textAlign : 'center', fontWeight: 'bold', fontSize : '30px'}}>회원가입</Card.Title>
              <Card.Subtitle className="mb-2 text-muted" style = {{textAlign : 'center', fontWeight: 'bold', fontSize : '20px'}}>정보를 입력해주세요.</Card.Subtitle>
              <hr></hr> 
              <>
                <div classname="mb-3">
                    <label style = {{fontWeight : 'bold', fontSize : '20px', marginBottom : '5px'}}>Username</label> 
                </div>

                <div>
                    <input   style = {{width : '260px', marginBottom : '10px', borderRadius : '20px', height : '30px', borderStyle : 'solid', borderColor:'black'}} id = 'signUp_Username' type="text" classname="form-control" placeholder="Enter Username" />
                </div>
                
                <div classname="mb-3">
                    <label style = {{fontWeight : 'bold', fontSize : '20px', marginBottom : '5px'}}>Email</label>
                </div>
                <div>
                    <input   style = {{width : '260px', marginBottom : '10px', borderRadius : '20px', height : '30px', borderStyle : 'solid', borderColor:'black'}} id = 'signUp_Email' type="email" classname="form-control" placeholder="Enter email" />
                </div>
                <div classname="mb-3">
                    <label style = {{fontWeight : 'bold', fontSize : '20px', marginBottom : '5px'}}>Password</label>
                </div>
                <div>
                <input
                    type="password"
                    id = 'signUp_Password'
                    classname="form-control"
                    placeholder="Enter password"
                    style = {{width : '260px', marginBottom : '10px', borderRadius : '20px', height : '30px', borderStyle : 'solid', borderColor:'black'}}
                    />
                </div>

                <div classname="mb-3">
                    <label style = {{fontWeight : 'bold', fontSize : '20px', marginBottom : '5px'}}>Password Check</label>
                </div>

                <div>
                <input
                    type="password"
                    id = 'signUp_PasswordCheck'
                    classname="form-control"
                    placeholder="Enter password"
                    style = {{width : '260px', marginBottom : '10px', borderRadius : '20px', height : '30px', borderStyle : 'solid', borderColor:'black'}}
                    />
                </div>
                
                <div classname="d-grid" style={{textAlign : 'center'}}>
                    <span></span>
                    <Button variant="dark" type = "submit" onClick = {function(){makeUser()}} style = {{borderRadius: '30px', fontWeight : 'bold', marginTop:'10px'}}>회원가입</Button> 
                </div>
                </>
            </Card.Body>  
          </Card>
    </>

function SignUp() {
    

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
                        <h1 class="mt-4">SignUp</h1>
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item active">회원가입</li>
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

export default SignUp;


