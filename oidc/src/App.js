import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Info from './components/Info';
import MigHelper from './components/MigHelper';
import CreateServer from './components/CreateServer';


const App = () => {
    return(
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Info/>}></Route>
                    <Route path='/mighelper' element={<MigHelper/>}></Route>
                    <Route path='/createserver' element={<CreateServer/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
<<<<<<< HEAD
    )
};
=======
    </footer>
}

function Nav() {
    return  <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <a class="navbar-brand ps-3" href="index.html">OIDC</a>
            <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i class="fas fa-bars"></i></button>
            <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div class="input-group">
                    <input class="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                    <button class="btn btn-primary" id="btnNavbarSearch" type="button"><i class="fas fa-search"></i></button>
                </div>
            </form>
            <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#!">Settings</a></li>
                        <li><a class="dropdown-item" href="#!">Activity Log</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#!">Logout</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
}

function App() {

    const handleChange = (e) => {
        setMode(e.target.value);
        if (mode === "AWS"){
            nbpState(0)
            azuState(0)
        }
        else if(mode === "NBP"){
            awsState(0)
            azuState(0)
        }
        else if(mode === "Azure"){
            awsState(0)
            nbpState(0)
        }
      };

    const SelectBox = (props) => {
        //console.log(props.options);
        return (
          <select onChange={handleChange} value = {mode} >
             {props.options.map((option) => (
                <option
                   value={option.value}
                   defaultValue={props.defaultValue === option.value}
                >
                   {option.name}
                </option>
             ))}
          </select>
            
       );
    };  

    const [mode, setMode] = useState('');
    let [nbpTable, nbpState] = useState(0);
    let [awsTable, awsState] = useState(0);
    let [azuTable, azuState] = useState(0);
   

      const OPTIONS = [
        { id: 1, value: "미선택", name: "미선택"},
        { id: 2, value: "AWS", name: "AWS" },
        { id: 3, value: "NBP", name: "NBP" },
        { id: 4, value: "Azure", name: "Azure"},
     ]
     
     
    let content = null;
    if (mode === 'AWS') {
        $("#dynamicTbody_2").empty()
        $("#dynamicTbody_3").empty()
        console.log(awsTable)
        for (let i = 0; i < awsTable; i++) {    
            var html = '';
            html += '<tr id = tr_id '+ i +'>'
            html += '<td><input type="number" min=0 id = AWS_input_id'+ Number(4*i) + '></input></td>'
            html += '<td><input type="number" min=0 id = AWS_input_id'+ Number(4*i+1) +'></input></td>'
            html += '<td><input type="number" step=0.1 min=0 id = AWS_input_id'+ Number(4*i+2) +'></input></td>'
            html += '<td><input type="number" step=0.1 min=0 id = AWS_input_id'+ Number(4*i+3) +'></input></td>'
            html += '<td><p6></p6></td>'
            html += '<td><p6 id = AWS_output_id'+ Number(4*i) + '></p6></td>'
            html += '<td><p6 id = AWS_output_id'+ Number(4*i+1) + '></p6></td>'
            html += '<td><p6 id = AWS_output_id'+ Number(4*i+2) + '></p6></td>'
            html += '<td><p6 id = AWS_output_id'+ Number(4*i+3) + '></p6></td>'
            html += '</tr>'

            console.log(html);
        }
        $("#dynamicTbody_1").append(html);

        //console.log(tablecontent);
    
        content = 
        
        <article>
            <div>
                 <button classname = "AWS_addList" onClick={function() { 
                        awsState(awsTable + 1); 
                 }}>추가하기</button> /* 버튼 클릭 시 table 행이 증가 */ 
            </div>      
            <table className = "table">
              <thead>  
                <th style={{width : '100px'}}>CPU<br></br>(core 개수)</th><th style={{width : '100px'}}>Memory<br></br>(메모리)</th><th style={{width : '220px'}}>CPU 최대 사용률(%)<br></br>(일일 최대 사용률의 평균)</th>
                <th style={{width : '220px'}}>Memory 최대 사용률(%)<br></br>(일일 최대 사용률의 평균)</th>  
                <th style={{width : '90px'}}><button className = "analysis" onClick = {function(){AWS_printValue()}} style={{width : '90px', marginBottom : '7px'}}>분석하기</button></th><th style={{width : '120px', marginBottom : '7px'}}>Server Name / Type</th><th style={{width : '110px'}}>CPU<br></br>(Core 개수)</th>
                <th style={{width : '100px'}}>Memory<br></br>(메모리)</th><th style={{width : '100px'}}>Price<br></br>(730h)</th>
               </thead>  
            <tbody className='Tbody' id ="dynamicTbody_1">
                
            </tbody>
            </table>
        </article>
    }
    else if (mode === 'NBP') {
        $("#dynamicTbody_1").empty()
        $("#dynamicTbody_3").empty()
        console.log(nbpTable)
        for (let i = 0; i < nbpTable; i++) {    
            var html = '';
            html += '<tr id = tr_id '+ i +'>'
            html += '<td><input type="number" min=0 id = NBP_input_id'+ Number(4*i) + '></input></td>'
            html += '<td><input type="number" min=0 id = NBP_input_id'+ Number(4*i+1) +'></input></td>'
            html += '<td><input type="number" step=0.1 min=0 id = NBP_input_id'+ Number(4*i+2) +'></input></td>'
            html += '<td><input type="number" step=0.1 min=0 id = NBP_input_id'+ Number(4*i+3) +'></input></td>'
            html += '<td><p6></p6></td>'
            html += '<td><p6 id = NBP_output_id'+ Number(4*i) + '></p6></td>'
            html += '<td><p6 id = NBP_output_id'+ Number(4*i+1) + '></p6></td>'
            html += '<td><p6 id = NBP_output_id'+ Number(4*i+2) + '></p6></td>'
            html += '<td><p6 id = NBP_output_id'+ Number(4*i+3) + '></p6></td>'
            html += '</tr>'

            console.log(html);
        }
        $("#dynamicTbody_2").append(html);

        //console.log(tablecontent);
    
        content = 
        
        <article>
            <div>
                 <button classname = "NBP_addList" onClick={function() { 
                        nbpState(nbpTable + 1); 
                 }}>추가하기</button> /* 버튼 클릭 시 table 행이 증가 */ 
            </div>      
            <table className = "table">
              <thead>  
                <th style={{width : '100px'}}>CPU<br></br>(core 개수)</th><th style={{width : '100px'}}>Memory<br></br>(메모리)</th><th style={{width : '220px'}}>CPU 최대 사용률(%)<br></br>(일일 최대 사용률의 평균)</th>
                <th style={{width : '220px'}}>Memory 최대 사용률(%)<br></br>(일일 최대 사용률의 평균)</th>  
                <th style={{width : '90px'}}><button className = "analysis" onClick = {function(){NBP_printValue()}} style={{width : '90px', marginBottom : '7px'}}>분석하기</button></th><th style={{width : '120px', marginBottom : '7px'}}>Server Name / Type</th><th style={{width : '110px'}}>CPU<br></br>(Core 개수)</th>
                <th style={{width : '100px'}}>Memory<br></br>(메모리)</th><th style={{width : '100px'}}>Price<br></br>(730h)</th>
               </thead>  
            <tbody className='Tbody' id ="dynamicTbody_2">
                
            </tbody>
            </table>
        </article>
    }
    else if (mode === 'Azure') {
        $("#dynamicTbody_1").empty()
        $("#dynamicTbody_2").empty()
        console.log(azuTable)
        for (let i = 0; i < azuTable; i++) {    
            var html = '';
            html += '<tr id = tr_id '+ i +'>'
            html += '<td><input type="number" min=0 id = Azu_input_id'+ Number(4*i) + '></input></td>'
            html += '<td><input type="number" min=0 id = Azu_input_id'+ Number(4*i+1) +'></input></td>'
            html += '<td><input type="number" step=0.1 min=0 id = Azu_input_id'+ Number(4*i+2) +'></input></td>'
            html += '<td><input type="number" step=0.1 min=0 id = Azu_input_id'+ Number(4*i+3) +'></input></td>'
            html += '<td><p6></p6></td>'
            html += '<td><p6 id = Azu_output_id'+ Number(4*i) + '></p6></td>'
            html += '<td><p6 id = Azu_output_id'+ Number(4*i+1) + '></p6></td>'
            html += '<td><p6 id = Azu_output_id'+ Number(4*i+2) + '></p6></td>'
            html += '<td><p6 id = Azu_output_id'+ Number(4*i+3) + '></p6></td>'
            html += '</tr>'

            console.log(html);
        }
        $("#dynamicTbody_3").append(html);

        //console.log(tablecontent);
    
        content = 
        
        <article>
            <div>
                 <button classname = "Azu_addList" onClick={function() { 
                        azuState(azuTable + 1); 
                 }}>추가하기</button> /* 버튼 클릭 시 table 행이 증가 */ 
            </div>      
            <table className = "table">
              <thead>  
                <th style={{width : '100px'}}>CPU<br></br>(core 개수)</th><th style={{width : '100px'}}>Memory<br></br>(메모리)</th><th style={{width : '220px'}}>CPU 최대 사용률(%)<br></br>(일일 최대 사용률의 평균)</th>
                <th style={{width : '220px'}}>Memory 최대 사용률(%)<br></br>(일일 최대 사용률의 평균)</th>  
                <th style={{width : '90px'}}><button className = "analysis" onClick = {function(){Azu_printValue()}} style={{width : '90px', marginBottom : '7px'}}>분석하기</button></th><th style={{width : '120px', marginBottom : '7px'}}>Server Name / Type</th><th style={{width : '110px'}}>CPU<br></br>(Core 개수)</th>
                <th style={{width : '100px'}}>Memory<br></br>(메모리)</th><th style={{width : '100px'}}>Price<br></br>(730h)</th>
               </thead>  
            <tbody className='Tbody' id ="dynamicTbody_3">
                
            </tbody>
            </table>
        </article>
    }
    else{
        content = <article>위 항목을 먼저 선택해주세요.</article>
    }

    // <input> 태그에 부여한 ID를 활용해 Value 출력
    function AWS_printValue()  {
        for (let i = 0; i < awsTable*4; i++) {
            const name = document.getElementById("AWS_input_id" + i ).value;
            document.getElementById("AWS_output_id" + i).innerText = name;
        } 
      }

    function NBP_printValue()  {
        for (let i = 0; i < nbpTable*4; i++) {
            const name = document.getElementById("NBP_input_id" + i ).value;
            document.getElementById("NBP_output_id" + i).innerText = name;
        } 
      }
   
    function Azu_printValue()  {
        for (let i = 0; i < azuTable*4; i++) {
            const name = document.getElementById("Azu_input_id" + i ).value;
            document.getElementById("Azu_output_id" + i).innerText = name;
        } 
      }

    return (
    <div className="App">
    <body class="sb-nav-fixed">
       <Nav></Nav>
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div class="sb-sidenav-menu">
                        <div class="nav">
                            <div class="sb-sidenav-menu-heading">Core</div>
                            <a class="nav-link" href="index.html">
                                <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                Migration Helper
                            </a>
                            <div class="sb-sidenav-menu-heading">Interface</div>
                            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                                Layouts
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>
                            <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav">
                                    <a class="nav-link" href="layout-static.html">Static Navigation</a>
                                    <a class="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                                </nav>
                            </div>
                            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
                                Pages
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>
                            <div class="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                    <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                        Authentication
                                        <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                    </a>
                                    <div class="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav class="sb-sidenav-menu-nested nav">
                                            <a class="nav-link" href="login.html">Login</a>
                                            <a class="nav-link" href="register.html">Register</a>
                                            <a class="nav-link" href="password.html">Forgot Password</a>
                                        </nav>
                                    </div>
                                    <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                        Error
                                        <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                    </a>
                                    <div class="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav class="sb-sidenav-menu-nested nav">
                                            <a class="nav-link" href="401.html">401 Page</a>
                                            <a class="nav-link" href="404.html">404 Page</a>
                                            <a class="nav-link" href="500.html">500 Page</a>
                                        </nav>
                                    </div>
                                </nav>
                            </div>
                            <div class="sb-sidenav-menu-heading">Addons</div>
                            <a class="nav-link" href="charts.html">
                                <div class="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
                                Charts
                            </a>
                            <a class="nav-link" href="tables.html">
                                <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                                Tables
                            </a>
                        </div>
                    </div>
                    <div class="sb-sidenav-footer">
                        <div class="small">Logged in as:</div>
                        Start Bootstrap
                    </div>
                </nav>
            </div>
            <div id="layoutSidenav_content">
                <main>
                    <div class="container-fluid px-4">
                        <h1 class="mt-4">Migration Helper</h1>
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item active">Migration Helper</li>
                        </ol>
                        <div>
                           원하는 Cloud Service Provider를 선택해주세요.
                        </div>
                     <SelectBox id = 'select' options={OPTIONS} value={OPTIONS.value} selected={OPTIONS.id === OPTIONS.value} ></SelectBox>
                        <div>
                            사용 중인 서버의 환경을 입력해주세요.
                        </div>
                        {content} 
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

>>>>>>> d3e6300b735c4e870a22746b5be949563a139094
export default App;