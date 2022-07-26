
import '../App.css';
import '../style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../footer';
import Navbar from '../navBar';
import SideMenu from '../sideMenu'
import React, { useState } from "react";
import $ from "jquery";
import axios from 'axios'

function MigHelper() {

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
    let [nbpTable, nbpState] = useState(0); // nbpTable 행의 개수를 의미하며 추가하기 버튼을 누를 때마다 State값이 증가하도록 설정 
    let [awsTable, awsState] = useState(0); // awsTable 행의 개수를 의미하며 추가하기 버튼을 누를 때마다 State값이 증가하도록 설정 
    let [azuTable, azuState] = useState(0); // azuTable 행의 개수를 의미하며 추가하기 버튼을 누를 때마다 State값이 증가하도록 설정 

    async function nbp_send_data(list){ // await 사용하기위해 async 사용
    
        let list_data = {list:list};
        await axios.post('http://127.0.0.1:8000/', list_data) // post 수행 시, 계산 결과 값을 백앤드에서 return 받게 된다.
                .then(response => { 
                    //console.log(response.data['results']); 
                     for (let i = 0; i < nbpTable; i++) {
                        let result = response.data['results'][i];
                        document.getElementById("nbp_output_id" + (5*i)).innerText  = result[0]; // Server Name / Type
                        document.getElementById("nbp_output_id" + (5*i+1)).innerText =  result[1]; // CPU (Core 개수)
                        document.getElementById("nbp_output_id" + (5*i+2)).innerText =  result[2]; // Memory 
                        document.getElementById("nbp_output_id" + (5*i+3)).innerText =  result[3]; // Disk (Storage)
                        result[5] = result[5].replace(/W/gi, "원"); // Price
                        document.getElementById("nbp_output_id" + (5*i+4)).innerText =  result[5]; // api 출력값이 6개인데 5개만 사용하기로 합의 완료
                    } 
                })
        }
   
      const OPTIONS = [ // SelectBox에서 선택할 수 있는  Cloud Service Provider 항목들
        { id: 1, value: "미선택", name: "미선택"},
        { id: 2, value: "AWS", name: "AWS" },
        { id: 3, value: "NBP", name: "NBP" },
        { id: 4, value: "Azure", name: "Azure"},
     ]
     
    let content = null;
    if (mode === 'AWS') { // SelectBox에서 AWS를 선택 시
        $("#dynamicTbody_2").empty() // 현재 화면에서 NBP 테이블과 겹치면 안되기에 jQuery를 활용해서 Tbody를 비워준다.
        $("#dynamicTbody_3").empty() // 현재 화면에서 Azure 테이블과 겹치면 안되기에 jQuery를 활용해서 Tbody를 비워준다.

        for (let i = 0; i < awsTable; i++) {  // awsTable은 State 값이며, 추가하기 버튼이 눌러지면 awsTable값이 변경되면서 For문이 다시 시행된다.  
            var html = '';
            html += '<tr id = tr_id '+ i +'>'
            html += '<td><input type="number" min=0 id = aws_input_id'+ Number(4*i) + ' style = "width:70px"></input></td>'
            html += '<td><input type="number" min=0 id = aws_input_id'+ Number(4*i+1) +' style = "width:60px"></input></td>'
            html += '<td><input type="number" step=0.1 max=100 min=0 id = aws_input_id'+ Number(4*i+2) +' style= "width:170px"></input></td>'
            html += '<td><input type="number" step=0.1 max=100 min=0 id = aws_input_id'+ Number(4*i+3) +' style = "width:170px"></input></td>'
            html += '<td><p6></p6></td>'
            html += '<td><p6 id = aws_output_id'+ Number(5*i) + 'style = "font-size:13px"></p6></td>'
            html += '<td><p6 id = aws_output_id'+ Number(5*i+1) + 'style = "font-size:13px"></p6></td>'
            html += '<td><p6 id = aws_output_id'+ Number(5*i+2) + 'style = "font-size:13px"></p6></td>'
            html += '<td><p6 id = aws_output_id'+ Number(5*i+3) + 'style = "font-size:13px"></p6></td>'
            html += '<td><p6 id = aws_output_id'+ Number(5*i+4) + 'style = "font-size:13px"></p6></td>'
            html += '</tr>'
            html += '</tr>'
        }
        $("#dynamicTbody_1").append(html); // 생성한 html 태그는 테이블의 행을 의미하며, jQuery를 활용해서 table에 추가해주었다.
    
        content = 
        
        <article>
            <div> 
                 <button className = "example_c" onClick={function() { 
                        awsState(awsTable + 1); 
                 }}>추가하기</button> {/*표의 행을 증가시켜주는 함수이며, awsState 값을 증가시킨다. 증가되면 for문이 시행되면서 행을 추가한다.*/}
            </div>      
            <table className = "table">
              <thead>  
                <th style={{width : '100px', fontSize:'14px'}}>CPU<br></br>(core 개수)</th><th style={{width : '90px', fontSize:'14px'}}>Memory<br></br>(메모리)</th><th style={{width : '210px', fontSize : '14px'}}>CPU 최대 사용률(%)<br></br>(일일 최대 사용률의 평균)</th>
                <th style={{width : '210px', fontSize:'14px'}}>Memory 최대 사용률(%)<br></br>(일일 최대 사용률의 평균)</th>  
                <th style={{width : '90px', fontSize:'14px'}}><button className = "example_c" onClick = {function(){aws_printName(nbpTable)}} style={{width : '80px', marginBottom : '5px', fontSize:'14px'}}>분석하기</button></th><th style={{width : '140px', marginBottom : '7px', fontSize:'14px'}}>Server Name / Type</th><th style={{width : '120px', fontSize:'14px'}}>CPU<br></br>(Core 개수)</th>
                <th style={{width : '100px', fontSize:'14px'}}>Memory<br></br>(메모리)</th><th style={{width : '130px', fontSize:'14px'}}>DISK<br></br>(Storage)</th><th style={{width : '200px', fontSize:'14px'}}>Price<br></br>(730h)</th>
               </thead>  
            <tbody className='Tbody' id ="dynamicTbody_1"></tbody>
            </table>
        </article>
    }
    else if (mode === 'NBP') {
        $("#dynamicTbody_1").empty() // 현재 화면에서 AWS 테이블과 겹치면 안되기에 jQuery를 활용해서 Tbody를 비워준다.
        $("#dynamicTbody_3").empty() // 현재 화면에서 Azure 테이블과 겹치면 안되기에 jQuery를 활용해서 Tbody를 비워준다.
        //console.log(nbpTable)
        for (let i = 0; i < nbpTable; i++) { // nbpTable은 State 값이며, 추가하기 버튼이 눌러지면 nbpTable값이 변경되면서 For문이 다시 시행된다.    
            var html = '';
            html += '<tr id = tr_id '+ i +'>'
            html += '<td><input type="number" min=0 id = nbp_input_id'+ Number(4*i) + ' style = "width:70px"></input></td>'
            html += '<td><input type="number" min=0 id = nbp_input_id'+ Number(4*i+1) +' style = "width:60px"</input></td>'
            html += '<td><input type="number" max=100 step=0.1 min=0 id = nbp_input_id'+ Number(4*i+2) +' style = "width:170px"></input></td>'
            html += '<td><input type="number" max=100 step=0.1 min=0 id = nbp_input_id'+ Number(4*i+3) +' style = "width:170px"></input></td>'
            html += '<td><p6></p6></td>'
            html += '<td><p6 id = nbp_output_id'+ Number(5*i) + ' style = "font-size:13px"></p6></td>'
            html += '<td><p6 id = nbp_output_id'+ Number(5*i+1) + ' style = "font-size:13px"></p6></td>'
            html += '<td><p6 id = nbp_output_id'+ Number(5*i+2) + ' style = "font-size:13px"></p6></td>'
            html += '<td><p6 id = nbp_output_id'+ Number(5*i+3) + ' style = "font-size:13px"></p6></td>'
            html += '<td><p6 id = nbp_output_id'+ Number(5*i+4) + ' style = "font-size:13px"></p6></td>'
            html += '</tr>'
        }
        $("#dynamicTbody_2").append(html); // 생성한 html태그를 jQuery를 활용해서 테이블 행을 추가한다.

        content = 
        
        <article>
            <div>
                 <button className = "example_c" onClick={function() { 
                        nbpState(nbpTable + 1); 
                 }}>추가하기</button> {/* nbpTable의 State 값을 1씩 증가시켜준다. */}
            </div>      
            <table className = "table">
              <thead>  
                <th style={{width : '100px', fontSize:'14px'}}>CPU<br></br>(core 개수)</th><th style={{width : '90px', fontSize:'14px'}}>Memory<br></br>(메모리)</th><th style={{width : '210px', fontSize : '14px'}}>CPU 최대 사용률(%)<br></br>(일일 최대 사용률의 평균)</th>
                <th style={{width : '210px', fontSize:'14px'}}>Memory 최대 사용률(%)<br></br>(일일 최대 사용률의 평균)</th>  
                <th style={{width : '90px', fontSize:'14px'}}><button className = "example_c" onClick = {function(){nbp_printName(nbpTable)}} style={{width : '80px', marginBottom : '5px', fontSize:'14px'}}>분석하기</button></th><th style={{width : '140px', marginBottom : '7px', fontSize:'14px'}}>Server Name / Type</th><th style={{width : '120px', fontSize:'14px'}}>CPU<br></br>(Core 개수)</th>
                <th style={{width : '100px', fontSize:'14px'}}>Memory<br></br>(메모리)</th><th style={{width : '130px', fontSize:'14px'}}>DISK<br></br>(Storage)</th><th style={{width : '200px', fontSize:'14px'}}>Price<br></br>(730h)</th>
               </thead>  
            <tbody className='Tbody' id ="dynamicTbody_2"></tbody>
            </table>
        </article>
    }
    else if (mode === 'Azure') {
        $("#dynamicTbody_1").empty() // 현재 화면에서 AWS 테이블과 겹치면 안되기에 jQuery를 활용해서 Tbody를 비워준다.
        $("#dynamicTbody_2").empty() // 현재 화면에서 NBP 테이블과 겹치면 안되기에 jQuery를 활용해서 Tbody를 비워준다.
        for (let i = 0; i < azuTable; i++) { // azuTable은 State 값이며, 추가하기 버튼이 눌러지면 nbpTable값이 변경되면서 For문이 다시 시행된다.      
            var html = '';
            html += '<tr id = tr_id '+ i +'>'
            html += '<td><input type="number" min=0 id = azure_input_id'+ Number(4*i) + ' style = "width:70px"></input></td>'
            html += '<td><input type="number" min=0 id = azure_input_id'+ Number(4*i+1) +' style = "width:60px"></input></td>'
            html += '<td><input type="number" max=100 step=0.1 min=0 id = azure_input_id'+ Number(4*i+2) +' style = "width:170px"></input></td>'
            html += '<td><input type="number" max=100 step=0.1 min=0 id = azure_input_id'+ Number(4*i+3) +' style = "width:170px"></input></td>'
            html += '<td><p6></p6></td>'
            html += '<td><p6 id = azure_output_id'+ Number(5*i) + 'style = "font-size:13px" ></p6></td>'
            html += '<td><p6 id = azure_output_id'+ Number(5*i+1) + 'style = "font-size:13px"></p6></td>'
            html += '<td><p6 id = azure_output_id'+ Number(5*i+2) + 'style = "font-size:13px"></p6></td>'
            html += '<td><p6 id = azure_output_id'+ Number(5*i+3) + 'style = "font-size:13px"></p6></td>'
            html += '<td><p6 id = azure_output_id'+ Number(5*i+4) + 'style = "font-size:13px"></p6></td>'
            html += '</tr>'

        }
        $("#dynamicTbody_3").append(html);  // 생성한 html태그를 jQuery를 활용해서 테이블 행을 추가한다. 

        content = 
        
        <article>  
            <div>
                 <button className = "example_c" onClick={function() { 
                        azuState(azuTable + 1); 
                 }}>추가하기</button>
            </div>      
            <table className = "table">
              <thead>  
                <th style={{width : '100px', fontSize:'14px'}}>CPU<br></br>(core 개수)</th><th style={{width : '90px', fontSize:'14px'}}>Memory<br></br>(메모리)</th><th style={{width : '210px', fontSize : '14px'}}>CPU 최대 사용률(%)<br></br>(일일 최대 사용률의 평균)</th>
                <th style={{width : '210px', fontSize:'14px'}}>Memory 최대 사용률(%)<br></br>(일일 최대 사용률의 평균)</th>  
                <th style={{width : '90px', fontSize:'14px'}}><button className = "example_c" onClick = {function(){azure_printName(nbpTable)}} style={{width : '80px', marginBottom : '5px', fontSize:'14px'}}>분석하기</button></th><th style={{width : '140px', marginBottom : '7px', fontSize:'14px'}}>Server Name / Type</th><th style={{width : '120px', fontSize:'14px'}}>CPU<br></br>(Core 개수)</th>
                <th style={{width : '100px', fontSize:'14px'}}>Memory<br></br>(메모리)</th><th style={{width : '130px', fontSize:'14px'}}>DISK<br></br>(Storage)</th><th style={{width : '200px', fontSize:'14px'}}>Price<br></br>(730h)</th>
               </thead>  
            <tbody className='Tbody' id ="dynamicTbody_3">
            </tbody>
            </table>
        </article>
    }
    else{
        content = <article>위 항목을 먼저 선택해주세요.</article>
    }

   
    function aws_printName(Table)  {
        let Server = [];
        let Reserv = [];
        for (let i = 0; i < Table*4; i++) {
            const name = document.getElementById("aws_input_id" + i ).value;
            Server.push(name); // JavaScript는 2차원 배열이 따로 없어서 1차원 배열에 대입하는식으로 수행했습니다.
        }  

        for (let i = 0; i < Table; i++) {
            let ReCPU = Number(Number(Server[4*i])*Number(Server[4*i+2])/100);
            let ReMEM = Number(Number(Server[4*i+1])*Number(Server[4*i+3]/100));
            Reserv.push(ReCPU);
            Reserv.push(ReMEM);
            document.getElementById("aws_output_id" + (5*i+1)).innerText = Math.ceil(Reserv[2*i]);
            document.getElementById("aws_output_id" + (5*i+2)).innerText = Math.ceil(Reserv[2*i+1]);
            if (i == Table -1){
            }
        } 
      }

      function nbp_printName(Table)  {
        let Server = [];
        let Reserv = [];
        for (let i = 0; i < Table*4; i++) {
            const name = document.getElementById("nbp_input_id" + i ).value;
            Server.push(name); // JavaScript는 2차원 배열이 따로 없어서 1차원 배열에 대입하는식으로 수행했습니다.
        }  

        for (let i = 0; i < Table; i++) {
            let ReCPU = Number(Number(Server[4*i])*Number(Server[4*i+2])/100);
            let ReMEM = Number(Number(Server[4*i+1])*Number(Server[4*i+3]/100));
            Reserv.push(ReCPU);
            Reserv.push(ReMEM);
            //console.log(Reserv);
            // document.getElementById("nbp_output_id" + (5*i+1)).innerText = Math.ceil(Reserv[2*i]);
            // document.getElementById("nbp_output_id" + (5*i+2)).innerText = Math.ceil(Reserv[2*i+1]);
            if (i == Table -1){
                nbp_send_data(Reserv);
                }
        } 
      }

      function azure_printName(Table)  {
        let Server = [];
        let Reserv = [];
        for (let i = 0; i < Table*4; i++) {
            const name = document.getElementById("azure_input_id" + i ).value;
            Server.push(name); // JavaScript는 2차원 배열이 따로 없어서 1차원 배열에 대입하는식으로 수행했습니다.
        }  

        for (let i = 0; i < Table; i++) {  
            let ReCPU = Number(Number(Server[4*i])*Number(Server[4*i+2])/100);
            let ReMEM = Number(Number(Server[4*i+1])*Number(Server[4*i+3]/100));
            Reserv.push(Math.ceil(ReCPU));
            Reserv.push(Math.ceil(ReMEM));
            //console.log(Reserv);
            document.getElementById("azure_output_id" + (5*i+1)).innerText = Math.ceil(Reserv[2*i]);
            document.getElementById("azure_output_id" + (5*i+2)).innerText = Math.ceil(Reserv[2*i+1]);
            if (i == Table-1){
                //azure_send_data(Reserv);
            }
        }
      }
      
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
};



export default MigHelper;