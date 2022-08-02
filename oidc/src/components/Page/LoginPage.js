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


async function SelectBoXGet() {
  await axios.get('http://127.0.0.1:8000/hostlist/', {
            headers: {
              Authorization: `${localStorage.getItem('auth')}`
            },
            }) 
            .then(response => {
              let box_list = [];
              const box = response.data.lists  // 받은 데이터를 여기에다가 대입 해줘야한다.
              box.splice(0, 0, 'ALL'); 
              localStorage.setItem("box", box);
              // console.log(Object.keys(box).length); // response.data.lists의 길이를 의미합니다.
              // console.log(typeof(Object.values(box))); //response.data.lists의 values 값만 포함된 
              localStorage.setItem("selectHost", "ALL"); 
                   for (let i = 0; i < box.length; i++) {
                  $("#host_box").append("<option value='"+ box[i] +"'>"+ box[i] + "</option>"); 
                }
              localStorage.setItem("numHost", box.length)  
              console.log(localStorage.getItem("numHost"))
            })
            .catch(err => {        
              console.log(err);
            })     
    }


function all_url1(){
  let url = "http://175.45.195.194:3000/d-solo/zEgAqHQnz/monitoring?orgId=1&refresh=30s&var-Grupo="
  url = url + localStorage.getItem("logInUserId") + "&var-Server=All&theme=dark&panelId=22"

  return url;
}
function all_url2(){
  let url = "http://175.45.195.194:3000/d-solo/zEgAqHQnz/monitoring?orgId=1&refresh=30s&var-Grupo="
  url = url + localStorage.getItem("logInUserId") + "&var-Server=All&theme=dark&panelId=40&from=now-7d&to=now"
  
  return url;
}  
function all_url3(){
  let url = "http://175.45.195.194:3000/d-solo/zEgAqHQnz/monitoring?orgId=1&refresh=30s&var-Grupo="
  url = url + localStorage.getItem("logInUserId") + "&var-Server=All&theme=dark&panelId=42&from=now-7d&to=now"
  
  return url;
}  
function all_url4(){
  let url = "http://175.45.195.194:3000/d-solo/zEgAqHQnz/monitoring?orgId=1&refresh=30s&var-Grupo="
  url = url + localStorage.getItem("logInUserId") + "&var-Server=All&theme=dark&panelId=44&from=now-7d&to=now"
  console.log(url)
  return url;
}      


function url_group1(selected_Host){ //url_group1 ~ 21까지 모니터링에 필요한 UI 임베디드
  let url = "http://175.45.195.194:3000/d-solo/41URQF7mz/zabbix-full-server-status?orgId=1&refresh=30s&var-Group="
  url = url + localStorage.getItem("logInUserId")
  url = url + "&var-Host="
  url = url + selected_Host
  url = url + "&var-Disk=All&var-Filesystem=All&var-Network=All&theme=dark&panelId=27"
  return url;
  }
function url_group2(selected_Host){
    let url = "http://175.45.195.194:3000/d-solo/41URQF7mz/zabbix-full-server-status?orgId=1&refresh=30s&var-Group="
    url = url + localStorage.getItem("logInUserId")
    url = url + "&var-Host="
    url = url + selected_Host
    url = url + "&var-Disk=All&var-Filesystem=All&var-Network=All&theme=dark&panelId=2"
    return url;
    }
function url_group3(selected_Host){
      let url = "http://175.45.195.194:3000/d-solo/41URQF7mz/zabbix-full-server-status?orgId=1&refresh=30s&var-Group="
      url = url + localStorage.getItem("logInUserId")
      url = url + "&var-Host="
      url = url + selected_Host
      url = url + "&var-Disk=All&var-Filesystem=All&var-Network=All&theme=dark&panelId=84"
      return url;
      }
function url_group4(selected_Host){
  let url = "http://175.45.195.194:3000/d-solo/41URQF7mz/zabbix-full-server-status?orgId=1&refresh=30s&var-Group="
  url = url + localStorage.getItem("logInUserId")
  url = url + "&var-Host="
  url = url + selected_Host
  url = url + "&var-Disk=All&var-Filesystem=All&var-Network=All&theme=dark&panelId=3"
  return url;
  }
function url_group5(selected_Host){
      let url = "http://175.45.195.194:3000/d-solo/41URQF7mz/zabbix-full-server-status?orgId=1&refresh=30s&var-Group="
      url = url + localStorage.getItem("logInUserId")
      url = url + "&var-Host="
      url = url + selected_Host
      url = url + "&var-Disk=All&var-Filesystem=All&var-Network=All&panelId=10"
      return url;
      } 
function url_group6(selected_Host){
        let url = "http://175.45.195.194:3000/d-solo/41URQF7mz/zabbix-full-server-status?orgId=1&refresh=30s&var-Group="
        url = url + localStorage.getItem("logInUserId")
        url = url + "&var-Host="
        url = url + selected_Host
        url = url + "&var-Filesystem=All&var-Network=All&theme=dark&panelId=5"
        return url;
        }
function url_group7(selected_Host){
    let url = "http://175.45.195.194:3000/d-solo/41URQF7mz/zabbix-full-server-status?orgId=1&refresh=30s&var-Group="
    url = url + localStorage.getItem("logInUserId")
    url = url + "&var-Host="
    url = url + selected_Host
    url = url + "&var-Filesystem=All&var-Network=All&theme=dark&panelId=9"
    return url;
    }
  function url_group8(selected_Host){
        let url = "http://175.45.195.194:3000/d-solo/41URQF7mz/zabbix-full-server-status?orgId=1&refresh=30s&var-Group="
        url = url + localStorage.getItem("logInUserId")
        url = url + "&var-Host="
        url = url + selected_Host
        url = url + "&var-Filesystem=All&var-Network=All&theme=dark&panelId=4"
        return url;
        } 
function url_group9(selected_Host){
          let url = "http://175.45.195.194:3000/d-solo/41URQF7mz/zabbix-full-server-status?orgId=1&refresh=30s&var-Group="
          url = url + localStorage.getItem("logInUserId")
          url = url + "&var-Host="
          url = url + selected_Host
          url = url + "&var-Filesystem=All&var-Network=All&panelId=22"
          return url;
          }
function url_group10(selected_Host){
      let url = "http://175.45.195.194:3000/d-solo/41URQF7mz/zabbix-full-server-status?orgId=1&refresh=30s&var-Group="
      url = url + localStorage.getItem("logInUserId")
      url = url + "&var-Host="
      url = url + selected_Host
      url = url + "&var-Filesystem=All&var-Network=All&theme=dark&panelId=52"
      return url;
      }
function url_group11(selected_Host){
          let url = "http://175.45.195.194:3000/d-solo/41URQF7mz/zabbix-full-server-status?orgId=1&refresh=30s&var-Group="
          url = url + localStorage.getItem("logInUserId")
          url = url + "&var-Host="
          url = url + selected_Host
          url = url + "&var-Disk=All&var-Filesystem=All&var-Network=All&theme=dark&panelId=15"
          return url;
          } 
function url_group12(selected_Host){
            let url = "http://175.45.195.194:3000/d-solo/41URQF7mz/zabbix-full-server-status?orgId=1&var-Group="
            url = url + localStorage.getItem("logInUserId");
            url = url + "&var-Host=" + selected_Host + "&var-Disk=All&var-Filesystem=All&var-Network=All&theme=dark&panelId=94"
            return url;
            }
          
function url_group13(selected_Host){
              let url = "http://175.45.195.194:3000/d-solo/41URQF7mz/zabbix-full-server-status?orgId=1&var-Group="
              url = url + localStorage.getItem("logInUserId");
              url = url + "&var-Host=" + selected_Host + "&var-Disk=All&var-Filesystem=All&var-Network=All&theme=dark&panelId=95"
              return url;
              }
          
function url_group14(selected_Host){
              let url = "http://175.45.195.194:3000/d-solo/41URQF7mz/zabbix-full-server-status?orgId=1&var-Group="
              url = url + localStorage.getItem("logInUserId");
              url = url + "&var-Host=" + selected_Host + "&var-Disk=All&var-Filesystem=All&var-Network=All&theme=dark&panelId=89"
              return url;
              }
          
function url_group15(selected_Host){
                let url = "http://175.45.195.194:3000/d-solo/41URQF7mz/zabbix-full-server-status?orgId=1&var-Group="
                url = url + localStorage.getItem("logInUserId");
                url = url + "&var-Host=" + selected_Host + "&var-Disk=All&var-Filesystem=All&var-Network=All&theme=dark&panelId=23"
                return url;
              }
          
function url_group16(selected_Host){
                let url = "http://175.45.195.194:3000/d-solo/41URQF7mz/zabbix-full-server-status?orgId=1&var-Group="
                url = url + localStorage.getItem("logInUserId");
                url = url + "&var-Host=" + selected_Host + "&var-Host=dongguk&var-Disk=All&var-Filesystem=All&var-Network=All&theme=dark&panelId=32"
                return url;
              }
          
function url_group17(selected_Host){
                let url = "http://175.45.195.194:3000/d-solo/41URQF7mz/zabbix-full-server-status?orgId=1&var-Group="
                url = url + localStorage.getItem("logInUserId");
                url = url + "&var-Host=" + selected_Host + "&var-Disk=All&var-Filesystem=All&var-Network=All&theme=dark&panelId=96"
                return url;
              }
          
function url_group18(selected_Host){
                let url = "http://175.45.195.194:3000/d-solo/41URQF7mz/zabbix-full-server-status?orgId=1&var-Group="
                url = url + localStorage.getItem("logInUserId");
                url = url + "&var-Host=" + selected_Host + "&var-Disk=All&var-Filesystem=All&var-Network=All&theme=dark&panelId=19"
                return url;
              }
          
function url_group19(selected_Host){
                let url = "http://175.45.195.194:3000/d-solo/41URQF7mz/zabbix-full-server-status?orgId=1&var-Group="
                url = url + localStorage.getItem("logInUserId");
                url = url + "&var-Host=" + selected_Host + "&var-Disk=All&var-Filesystem=All&var-Network=All&panelId=18"
                return url;
              }
          
function url_group20(selected_Host){
                let url = "http://175.45.195.194:3000/d-solo/41URQF7mz/zabbix-full-server-status?orgId=1&var-Group="
                url = url + localStorage.getItem("logInUserId");
                url = url + "&var-Host=" + selected_Host + "&var-Disk=All&var-Filesystem=All&var-Network=All&panelId=21"
                return url;
              }
          
function url_group21(selected_Host){
                let url = "http://175.45.195.194:3000/d-solo/41URQF7mz/zabbix-full-server-status?orgId=1&var-Group="
                url = url + localStorage.getItem("logInUserId");
                url = url + "&var-Host=" + selected_Host + "&var-Disk=All&var-Filesystem=All&var-Network=All&theme=dark&panelId=17"
                console.log(url)
                return url;
              }
                  
  async function signin(){ // await 사용하기위해 async 사용   로그인

    const Username = document.getElementById("signin_Username").value;
    const Email = document.getElementById("signin_Email").value;
    const Password = document.getElementById("signin_Password").value;
    
    let list_data = {username:Username, email:Email, password:Password};

    await axios.post('http://127.0.0.1:8000/accounts/login/', list_data) // post 조건이 완전히 완료될때까지 기다리라는 await
            .then(response => {
              console.log(response);
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
    
  let content = null;
  
  function Logged_in(){  // 로그인 여부를 판단하는 메인

    const [Selected, setSelected] = useState(0);

    const handleSelect = (e) => { // selectbox에서 handleSelect를 줬습니다.
      setSelected(e.target.value); // 사용자가 선택한 select 항목을 setSelected를 통해 Selected에 담아줍니다.
      console.log(e.target.value); // console로 찍어보니 e.target.value가 ALL, dongguk과 같은 호스트가 아니라 0, 1 이런식으로 정수형이여서 if, else if가 각각 0, 1인 경우로 변경했습니다.
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
       
        if( Selected == 0 || Selected == "ALL" ){ // Selected에서 선택된것이 ALL인경우 (All이 selectbox에서 0번 인덱스이기 때문)
          content = <>
          <div className='mb-3'>
                <Link to = "/ServerAdd">
                  <Button variant="dark" style = {{borderRadius: '30px', fontWeight : 'bold'}}>서버 추가하기</Button> 
                </Link>
                <Button variant="dark" onClick = {function(){log_out()}} style = {{borderRadius: '30px', fontWeight : 'bold', textAlign : 'right', float : 'right'}}>로그아웃</Button>
            </div>

            <div>
              <label style ={{fontWeight:'bold', fontSize:'25px', marginRight : '20px', marginTop:'10px', marginBottom : '10px'}}>호스트 목록</label>
              
              <select onChange={handleSelect} name = 'host_box' id = 'host_box' style={{width : '260px', marginBottom : '10px', borderRadius : '20px', height : '40px', borderStyle : 'solid', borderColor:'black'}}>

              </select>
            </div>
            <div className='grafana'>
            <iframe id='frame1' className='iframe_big'
               src = {all_url1()}
               width="300px"
               height="200px"
            ></iframe>
            </div>
            <div className='grafana'>
            <iframe id='frame2' className='iframe_small'
               src = {all_url2()}
               width="300px"
               height="200px"
            ></iframe>
             <iframe id='frame3' className='iframe_small'
               src = {all_url3()}
               width="300px"
               height="200px"
            ></iframe>
             <iframe id='frame4' className='iframe_small'
               src = {all_url4()}
               width="300px"
               height="200px"
            ></iframe>
            </div>
          </>
          return content;
        }
        else{ // Selected에서 선택된 것이 dongguk인 경우 (dongguk이 selectbox에서 인덱스가 1이기 때문)
                                 // host 개수에 따라서 이제 else if문이 끊임없이 증가하게 되는데 이건 고민해 봐야할꺼같아요,,
        const selected_Host = $("#host_box option:selected").val();                        
        content = <>
            <div className='mb-3'>
                <Link to = "/ServerAdd">
                  <Button variant="dark" style = {{borderRadius: '30px', fontWeight : 'bold'}}>서버 추가하기</Button> 
                </Link>
                <Button variant="dark" onClick = {function(){log_out()}} style = {{borderRadius: '30px', fontWeight : 'bold', textAlign : 'right', float : 'right'}}>로그아웃</Button>
            </div>

            <div>
              <label style ={{fontWeight:'bold', fontSize:'25px', marginRight : '20px', marginTop:'10px', marginBottom : '10px'}}>호스트 목록</label>
              <select onChange={handleSelect} name = 'host_box' id = 'host_box' style={{width : '260px', marginBottom : '10px', borderRadius : '20px', height : '40px', borderStyle : 'solid', borderColor:'black'}}>

              </select>
            </div>

            <div className='grafana'>
            <iframe id='frame1' className='iframe_small'
               src = {url_group1(selected_Host)}
               width="300px"
               height="200px"
            ></iframe>
            <iframe id='frame2' className='iframe_small'
               src = {url_group2(selected_Host)}
               width="300px"
               height="200px"
            ></iframe>
            <iframe id='frame3' className='iframe_small'
               src = {url_group3(selected_Host)}
               width="300px"
               height="200px"
            ></iframe>
            </div>
            <div className='grafana'>
            <iframe id='frame4' className='iframe_mid'
               src = {url_group4(selected_Host)}
               width="300px"
               height="200px"
            ></iframe>
            <iframe id='frame5' className='iframe_mid'
               src = {url_group5(selected_Host)}
               width="300px"
               height="200px"
            ></iframe>   
            </div>
            <div className='grafana'>
            <iframe id='frame6' className='iframe_small'
               src = {url_group6(selected_Host)}
               width="300px"
               height="200px"
            ></iframe>
            <iframe id='frame7' className='iframe_small'
               src = {url_group7(selected_Host)}
               width="300px"
               height="200px"
            ></iframe>
            <iframe id='frame8' className='iframe_small'
               src = {url_group8(selected_Host)}
               width="300px"
               height="200px"
            ></iframe>
            </div> 
            <div className='grafana'>
            <iframe id='frame9' className='iframe_small'
               src = {url_group9(selected_Host)}
               width="300px"
               height="200px"
            ></iframe>
            <iframe id='frame10' className='iframe_small'
               src = {url_group10(selected_Host)}
               width="300px"
               height="200px"
            ></iframe>
            <iframe id='frame11' className='iframe_small'
               src = {url_group11(selected_Host)}
               width="300px"
               height="200px"
            ></iframe>
            </div> 
            <div className='grafana'>
            <iframe id='frame12' className='iframe_mid'
               src = {url_group12(selected_Host)}
               width="300px"
               height="200px"
            ></iframe>
            <iframe id='frame13' className='iframe_mid'
               src = {url_group13(selected_Host)}
               width="300px"
               height="200px"
            ></iframe>
            </div>
            <div className='grafana'>
            <iframe id='frame14' className='iframe_mid'
               src = {url_group14(selected_Host)}
               width="300px"
               height="200px"
            ></iframe>
            <iframe id='frame15' className='iframe_mid'
               src = {url_group15(selected_Host)}
               width="300px"
               height="200px"
            ></iframe>
            <div className='grafana'>
            <iframe id='frame16' className='iframe_small'
               src = {url_group16(selected_Host)}
               width="300px"
               height="200px"
            ></iframe>
            <iframe id='frame17' className='iframe_small'
               src = {url_group17(selected_Host)}
               width="300px"
               height="200px"
            ></iframe>
            <iframe id='frame18' className='iframe_small'
               src = {url_group18(selected_Host)}
               width="300px"
               height="200px"
            ></iframe>
            </div>
            <div className='grafana'>
            <iframe id='frame19' className='iframe_mid'
               src = {url_group19(selected_Host)}
               width="300px"
               height="200px"
            ></iframe>
            <iframe id='frame20' className='iframe_mid'
               src = {url_group20(selected_Host)}
               width="300px"
               height="200px"
            ></iframe>
            </div>
            <div className='grafana'>
            <iframe id='frame21' className='iframe_big'
               src = {url_group21(selected_Host)}
               width="300px"
               height="500px"
            ></iframe>
             </div> 
            </div> 
          </>       
          return content;
    }
  }
    
  }
 
function LoginPage() {
  
  Logged_in();
  const iRunOnlyOnce = () => {
    {SelectBoXGet()}  //한번만 불러오게 해서 랜더링에 오류가 없도록 하기 위해 useEffect사용
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
                        <h1 class="mt-4">Login</h1>
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

export default LoginPage;