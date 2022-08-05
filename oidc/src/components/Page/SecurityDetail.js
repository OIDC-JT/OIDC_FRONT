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

let json = JSON.parse(localStorage.getItem("JSON"));
let Global_secu_virus_list;

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
            window.location.href = "/security";
        })
        .catch(err => {        
            console.log(err);
            console.log('로그아웃에 실패하였습니다.');
            window.location.reload();
          })
    }

    function getSecurity() { // json을 받아서 화면에 parsing해주는 함수!
          for (let i = 0; i < json.length; i++) {
            if (json[i].virus_sum != 0) { // 바이러스가 존재할 경우 selectbox에 추가해준다.
              $("#secu_host_box").append("<option value='"+ json[i].hostname +"'>"+ json[i].hostname + "</option>"); 
            }
            printVirusList();
          } 
        }

    function printVirusList() {
      $("#secu_virus_list").empty();
      let html = "";
      for (let i = 0; i < Global_secu_virus_list.length; i++) {
        html += '<div>"' + Global_secu_virus_list[i] +'"</div>'
      }
       $("#secu_virus_list").append(html);
    }

  let content = null;
  
 function Logged_in(){  // 로그인 여부를 판단하는 메인
    content = null; // 이거 없으면 화면이 여러개가 생기더라구요,,
    let first_host;
    let arr;
    localStorage.setItem("security_host_num", json.length);
    localStorage.setItem("security_json", json); 

    for (let i = 0; i < localStorage.getItem("security_host_num"); i++) { // 처음 렌더링 됐을 때 첫번째 selectbox 목록에 대한 정보를 출력해주기 위함
      if (json[i].virus_sum != 0) { // 처음으로 바이러스 있는 요소를 selectbox에서 보여줄 것이기 때문.
        first_host = json[i].hostname;
        arr = json[i].virus.split(",");
        Global_secu_virus_list = arr;      
        break;
      }
      else {
        continue;
      }
    }

    const [Selected_secu, setSelected_secu] = useState(first_host);
    const [Selected_secu_virus, setSelected_secu_virus] = useState(arr);
    
    const handleSelect = (e) => { // selectbox에서 handleSelect를 줬습니다.
      
      setSelected_secu(e.target.value); // 사용자가 선택한 select 항목을 setSelected를 통해 Selected에 담아줍니다.
      for (let i = 0; i < localStorage.getItem("security_host_num"); i++) { // 바이러스 호스트 개수만큼 for문을 수행, 현재 선택한 요소의 virus 리스트를 확보한다.
        if (json[i].hostname == e.target.value) { 
          arr = json[i].virus.split(",");
          Global_secu_virus_list = arr;
          //setSelected_secu_virus(arr);
          printVirusList();
        }
      }
      console.log(e.target.value); 
    };  

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
           return content;        
      }
      else if(localStorage.getItem("auth") != null){
        let virus_sum;

        for (let i = 0; i < localStorage.getItem("security_host_num"); i++) {
          if (json[i].hostname == Selected_secu) { //현재 selectbox에서 선택한 호스트를 탐색
            virus_sum = json[i].virus_sum;
          }
          else {
            virus_sum = 0;
          } 
        }
        
        content = <>
            <div className='mb-3'>
                <Button variant="dark" onClick = {function(){log_out()}} style = {{borderRadius: '30px', fontWeight : 'bold'}}>로그아웃</Button>
            </div>
            <div>
              <label style ={{fontWeight:'bold', fontSize:'25px', marginRight : '20px', marginTop:'10px', marginBottom : '10px'}}>감염호스트 목록</label>
              <select onChange={handleSelect} name = 'secu_host_box' id = 'secu_host_box' style={{width : '260px', marginBottom : '10px', borderRadius : '20px', height : '40px', borderStyle : 'solid', borderColor:'black'}}>
              </select>
            </div>
            <Card style={{ width: '80rem', height: '40rem', display: 'flex', position: 'relative', }}>
            <Card.Body style = {{position: 'absolute', top:'50%', left:'50%', transform: 'translate(-50%, -50%)'}}>
              <Card.Title style = {{textAlign : 'center', fontWeight: 'bold', fontSize : '45px', marginBottom : '15px', width : '800px'}}>Security Governance</Card.Title>
              <hr></hr> 
              <>
                <div classname="mb-3" style = {{textAlign:'center', marginBottom:'20px'}}>
                    <label style = {{fontWeight : 'bold', fontSize : '25px', marginBottom : '5px' }}>저희 서비스를 이용해주셔서 감사합니다.</label>
                    <span></span>
                    <label style = {{fontWeight : 'bold', fontSize : '25px', marginBottom : '5px' }}>해당 파일들이 감염되어 있으니 참고하시기를 바랍니다.</label>
                    <hr></hr>
                </div>

                <div id = "virus_sum" classname="mb-3" style = {{textAlign:'center'}}>
                  <label  style = {{fontWeight : 'bold', fontSize : '25px', marginBottom : '5px' }}>바이러스 : {virus_sum}개 검출</label>
                </div>

                <div id = "virus_list" classname="mb-3" style = {{textAlign:'center'}}>
                  <label  style = {{fontWeight : 'bold', fontSize : '25px', marginBottom : '5px' }}>바이러스 파일 목록</label>
                  <span></span>
                </div>

                <div id = 'secu_virus_list' classname="mb-3" style = {{textAlign:'center', fontWeight:'bold', fontSize:'25px', marginRight : '20px', marginTop:'10px', marginBottom : '10px' }}>
                 
                </div>
               
                </>
            </Card.Body>  
          </Card>
          </>       
       
          return content;
    }
  }

function SecurityDetail() {

  Logged_in();
  const iRunOnlyOnce = () => {
    {getSecurity()}  //한번만 불러오게 해서 랜더링에 오류가 없도록 하기 위해 useEffect사용
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
                        <h1 class="mt-4">보안 상세내역</h1>
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item active">감염 파일 목록</li>
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

export default SecurityDetail;