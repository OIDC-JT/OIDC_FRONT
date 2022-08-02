import '../App.css';
import '../style.css'
import Navbar from '../navBar';
import Footer from '../footer';
import SideMenu from '../sideMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect} from "react";
import axios from 'axios'
import { format } from 'react-string-format';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Dashboard from './Dashboard';
import { Link } from 'react-router-dom';
import $ from "jquery";

let json = [
  {
    "hostname": "abc1",
    "status" : "Good",
    "virus" : "",
  },
  {
    "hostname": "abc2",
    "status" : "Good"
  },
  {
    "hostname": "abc3",
    "status" : "Not Good"
  },
  {
    "hostname": "abc4",
    "status" : "Good"
  },
] //더미데이터

                  
  async function signin(){ // await 사용하기위해 async 사용   로그인

    const Username = document.getElementById("signin_Username").value;
    const Email = document.getElementById("signin_Email").value;
    const Password = document.getElementById("signin_Password").value;
    
    let list_data = {username:Username, email:Email, password:Password};

    await axios.post('http://127.0.0.1:8000/accounts/login/', list_data) // post 조건이 완전히 완료될때까지 기다리라는 await
            .then(response => {
              console.log(response)
              localStorage.setItem("logInUserId", response.data.user.username); // 현재 로그인한 유저 누군지 설정
              // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
              localStorage.setItem("refresh", response.data.refresh_token); //로그아웃시 필요한 리프레시 토큰 저장 로그아웃 시 블랙리스트 처리됨.

              axios.defaults.headers.common["Authorization"] =
                "Bearer " +  response.data.access_token;
              console.log(axios.defaults.headers.common);
              localStorage.setItem("auth", axios.defaults.headers.common.Authorization);
              alert('로그인에 성공하였습니다.');
              window.location.reload();
            })
            .catch(err => {        
              console.log(err);
              console.log('로그인에 실패하였습니다.');
              window.location.reload();
            })
    }

    async function log_out(){  //로그아웃
        let data = {refresh : localStorage.getItem("refresh")} 
        await axios.post('http://127.0.0.1:8000/accounts/logout/', data)
        .then(response => {
            localStorage.clear("logInUserId")
            localStorage.clear("auth")
            axios.defaults.headers.common["Authorization"] = ""
            alert('로그아웃 하였습니다.');
            window.location.reload();
        })
        .catch(err => {        
            console.log(err);
            console.log('로그아웃에 실패하였습니다.');
            window.location.reload();
          })
    }

    function getSecu(){ // getSecu URL에서 사용자가 등록한 호스트에 대한 검사 결과를 django DB에서 가져온다.
      
        let aaa = ""
        console.log(json.length)
        for(let i = 0; i <json.length; i++){
          if (json[i].status == "Good") {
            aaa = aaa + "<div style='border-style : solid; border-radius : 20px; margin-bottom : 10px;' >"
            aaa = aaa + " <div><div style='margin-top : 12px;'><p6 style='font-weight : bold; margin-left : 20px; font-size: 20px;'>" + "HostName : "  + json[i].hostname + "</p6></div><hr></hr>"
            aaa = aaa + " <br><div style = 'width : 600px; margin-bottom : 12px; margin-left : 8px; font-weight : bold; font-size : 20px;'><button type='button' class='btn btn-success' style = 'font-weight : bold; width : 200px; border-radius : 10px; font-size : 20px; margin-left : 10px;' >Good</button> 바이러스가 발견되지 않았습니다.</div><br></div>"
            aaa = aaa + "</div>"
          }
          else {
            aaa = aaa + "<div style='border-style : solid; border-radius : 20px; margin-bottom : 10px;' >"
            aaa = aaa + " <div><div style='margin-top : 12px;'><p6 style='font-weight : bold; margin-left : 20px; font-size: 20px;'>" + "HostName : "  + json[i].hostname + "</p6></div><hr></hr>"
            aaa = aaa + " <br><div style = 'width : 1000px; margin-bottom : 12px; margin-left : 8px; font-weight : bold; font-size : 20px;'><a href='/SecurityDetail' class='btn btn-danger'' style = 'font-weight : bold; width : 200px; border-radius : 10px; font-size : 20px; margin-left : 10px;'>Warning</a> 바이러스가 발견되었습니다. Warning 버튼 클릭 시 상세목록이 표기됩니다.</div><br></div>"
            aaa = aaa + "</div>"
          }
        }
        $("#getSecu").append(aaa) 
   
    }
    
  let content = null;
  
  function logged_in(){  // 로그인 여부를 판단하는 메인
    
      if(localStorage.getItem("auth") == null){
        content = <>
          <Card style={{ width: '80rem', height: '40rem', display: 'flex', position: 'relative', }}>
          <Card.Body style = {{position: 'absolute', top:'50%', left:'50%', transform: 'translate(-50%, -50%)'}}>
            <Card.Title style = {{textAlign : 'center', fontWeight: 'bold', fontSize : '30px'}}>LOGIN</Card.Title>
            <Card.Subtitle  style = {{textAlign : 'center', fontWeight: 'bold', fontSize : '20px'}} className="mb-2 text-muted">로그인 화면입니다.</Card.Subtitle>
            <Card.Text>
            <hr></hr>    
            <>
                <div classname="mb-3">
                    <label style = {{fontWeight : 'bold', fontSize : '20px', marginBottom : '5px'}}>Username</label>  
                </div>
                <div className='mb-3'>
                    <input style = {{width : '260px', marginBottom : '10px', borderRadius : '20px', height : '30px', borderStyle : 'solid', borderColor:'black'}} id = 'signin_Username' type="text" classname="form-control" placeholder="Enter Username" />
                </div>
                <div classname="mb-3">
                    <label style = {{fontWeight : 'bold', fontSize : '20px', marginBottom : '5px'}}>Email</label>
                </div>
                <div className='mb-3'>
                    <input   style = {{width : '260px', marginBottom : '10px', borderRadius : '20px', height : '30px', borderStyle : 'solid', borderColor:'black'}} id = 'signin_Email' type="email" classname="form-control" placeholder="Enter email" />
                </div>
                <div classname="mb-3">
                    <label style = {{fontWeight : 'bold', fontSize : '20px', marginBottom : '5px'}}>Password</label>
                </div>
                <div className='mb-3'>
                <input
                    type="password"
                    id = 'signin_Password'
                    classname="form-control"
                    placeholder="Enter password"
                    style = {{width : '260px', marginBottom : '10px', borderRadius : '20px', height : '30px', borderStyle : 'solid', borderColor:'black'}}
                    />
                </div>
                <div style={{textAlign : 'center'}}>
                  <span></span>
                  <Button variant="dark" onClick = {function(){signin()}} style = {{borderRadius: '30px', fontWeight : 'bold', justifyContent : 'center' }}>로그인</Button> 
                </div>
                </>
            </Card.Text> 
           
          </Card.Body>  
        </Card>
      </>
                   
      }
      else if(localStorage.getItem("auth") != null){
        
        content = <>
            <div className='mb-3'>
                <Link to = "/SecuServerAdd">
                  <Button variant="dark" style = {{borderRadius: '30px', fontWeight : 'bold'}}>서버 추가하기</Button> 
                </Link>
                <Button variant="dark" onClick = {function(){log_out()}} style = {{borderRadius: '30px', fontWeight : 'bold', textAlign : 'right', float : 'right'}}>로그아웃</Button>
            </div>
            <div id='getSecu'>
              {getSecu()}
            </div>
          </>       
    }
    
  }
logged_in();


function LoginPageSecu() {
  const iRunOnlyOnce = () => {
    {getSecu()}
  };
  useEffect(iRunOnlyOnce, []);
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
                        <h1 class="mt-4">보안 대시보드</h1>
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item active">로그인</li>
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

export default LoginPageSecu;