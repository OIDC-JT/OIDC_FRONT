
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
    let [nbpTable, nbpState] = useState(0);
    let [awsTable, awsState] = useState(0);
    let [azuTable, azuState] = useState(0);

    async function nbp_send_data(list){ // await 사용하기위해 async 사용
        // let list_data = JSON.stringify({list: list});
        // let meta_products = JSON.parse(list_data);
        let list_data = {list:list};
       // console.log(list_data)
        await axios.post('http://127.0.0.1:8000/', list_data) // post 조건이 완전히 완료될때까지 기다리라는 await
                .then(response => { // post 요청을 했는데 return으로 그 결과 값이 전달되어서 GET을 수행하지 않았습니다.
                    console.log(response.data['results']); 
                     for (let i = 0; i < nbpTable; i++) {
                        let result = response.data['results'][i];
                        document.getElementById("nbp_output_id" + (5*i)).innerText = result[0];
                        document.getElementById("nbp_output_id" + (5*i+1)).innerText =  result[1];
                        document.getElementById("nbp_output_id" + (5*i+2)).innerText =  result[2];
                        document.getElementById("nbp_output_id" + (5*i+3)).innerText =  result[3];
                        document.getElementById("nbp_output_id" + (5*i+4)).innerText =  result[5]; // 출력값이 6개인데 5개만 사용하기로 합의 완료
                    } 
                })
        }
   
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
        //console.log(awsTable)
        for (let i = 0; i < awsTable; i++) {    
            var html = '';
            html += '<tr id = tr_id '+ i +'>'
            html += '<td><input type="number" min=0 id = aws_input_id'+ Number(4*i) + ' style = "width:70px"></input></td>'
            html += '<td><input type="number" min=0 id = aws_input_id'+ Number(4*i+1) +' style = "width:70px"></input></td>'
            html += '<td><input type="number" step=0.1 max=100 min=0 id = aws_input_id'+ Number(4*i+2) +' style = "width:180px"></input></td>'
            html += '<td><input type="number" step=0.1 max=100 min=0 id = aws_input_id'+ Number(4*i+3) +' style = "width:180px"></input></td>'
            html += '<td><p6></p6></td>'
            html += '<td><p6 id = aws_output_id'+ Number(5*i) + '></p6></td>'
            html += '<td><p6 id = aws_output_id'+ Number(5*i+1) + '></p6></td>'
            html += '<td><p6 id = aws_output_id'+ Number(5*i+2) + '></p6></td>'
            html += '<td><p6 id = aws_output_id'+ Number(5*i+3) + '></p6></td>'
            html += '<td><p6 id = aws_output_id'+ Number(5*i+4) + '></p6></td>'
            html += '</tr>'
            html += '</tr>'

            //console.log(html);
        }
        $("#dynamicTbody_1").append(html);

        //console.log(tablecontent);
    
        content = 
        
        <article>
            <div>
                 <button className = "example_c" onClick={function() { 
                        awsState(awsTable + 1); 
                 }}>추가하기</button>
            </div>      
            <table className = "table">
              <thead>  
                <th style={{width : '100px'}}>CPU<br></br>(core 개수)</th><th style={{width : '100px'}}>Memory<br></br>(메모리)</th><th style={{width : '220px'}}>CPU 최대 사용률(%)<br></br>(일일 최대 사용률의 평균)</th>
                <th style={{width : '220px'}}>Memory 최대 사용률(%)<br></br>(일일 최대 사용률의 평균)</th>  
                <th style={{width : '90px'}}><button className = "example_c" onClick = {function(){aws_printName(awsTable)}} style={{width : '90px', marginBottom : '7px'}}>분석하기</button></th><th style={{width : '120px', marginBottom : '7px'}}>Server Name / Type</th><th style={{width : '110px'}}>CPU<br></br>(Core 개수)</th>
                <th style={{width : '100px'}}>Memory<br></br>(메모리)</th><th style={{width : '150px'}}>DISK<br></br>(Storage)</th><th style={{width : '150px'}}>Price<br></br>(730h)</th>
               </thead>  
            <tbody className='Tbody' id ="dynamicTbody_1">
                
            </tbody>
            </table>
        </article>
    }
    else if (mode === 'NBP') {
        $("#dynamicTbody_1").empty()
        $("#dynamicTbody_3").empty()
        //console.log(nbpTable)
        for (let i = 0; i < nbpTable; i++) {    
            var html = '';
            html += '<tr id = tr_id '+ i +'>'
            html += '<td><input type="number" min=0 id = nbp_input_id'+ Number(4*i) + ' style = "width:70px"></input></td>'
            html += '<td><input type="number" min=0 id = nbp_input_id'+ Number(4*i+1) +' style = "width:70px"</input></td>'
            html += '<td><input type="number" max=100 step=0.1 min=0 id = nbp_input_id'+ Number(4*i+2) +' style = "width:180px"></input></td>'
            html += '<td><input type="number" max=100 step=0.1 min=0 id = nbp_input_id'+ Number(4*i+3) +' style = "width:180px"></input></td>'
            html += '<td><p6></p6></td>'
            html += '<td><p6 id = nbp_output_id'+ Number(5*i) + '></p6></td>'
            html += '<td><p6 id = nbp_output_id'+ Number(5*i+1) + '></p6></td>'
            html += '<td><p6 id = nbp_output_id'+ Number(5*i+2) + '></p6></td>'
            html += '<td><p6 id = nbp_output_id'+ Number(5*i+3) + '></p6></td>'
            html += '<td><p6 id = nbp_output_id'+ Number(5*i+4) + '></p6></td>'
            html += '</tr>'

            //console.log(html);
        }
        $("#dynamicTbody_2").append(html);

        //console.log(tablecontent);
    
        content = 
        
        <article>
            <div>
                 <button className = "example_c" onClick={function() { 
                        nbpState(nbpTable + 1); 
                 }}>추가하기</button>
            </div>      
            <table className = "table">
              <thead>  
                <th style={{width : '100px'}}>CPU<br></br>(core 개수)</th><th style={{width : '100px'}}>Memory<br></br>(메모리)</th><th style={{width : '220px'}}>CPU 최대 사용률(%)<br></br>(일일 최대 사용률의 평균)</th>
                <th style={{width : '220px'}}>Memory 최대 사용률(%)<br></br>(일일 최대 사용률의 평균)</th>  
                <th style={{width : '90px'}}><button className = "example_c" onClick = {function(){nbp_printName(nbpTable)}} style={{width : '90px', marginBottom : '7px'}}>분석하기</button></th><th style={{width : '120px', marginBottom : '7px'}}>Server Name / Type</th><th style={{width : '110px'}}>CPU<br></br>(Core 개수)</th>
                <th style={{width : '100px'}}>Memory<br></br>(메모리)</th><th style={{width : '150px'}}>DISK<br></br>(Storage)</th><th style={{width : '150px'}}>Price<br></br>(730h)</th>
               </thead>  
            <tbody className='Tbody' id ="dynamicTbody_2">
                
            </tbody>
            </table>
        </article>
    }
    else if (mode === 'Azure') {
        $("#dynamicTbody_1").empty()
        $("#dynamicTbody_2").empty()
        //console.log(azuTable)
        for (let i = 0; i < azuTable; i++) {    
            var html = '';
            html += '<tr id = tr_id '+ i +'>'
            html += '<td><input type="number" min=0 id = azure_input_id'+ Number(4*i) + ' style = "width:70px"></input></td>'
            html += '<td><input type="number" min=0 id = azure_input_id'+ Number(4*i+1) +' style = "width:70px"></input></td>'
            html += '<td><input type="number" max=100 step=0.1 min=0 id = azure_input_id'+ Number(4*i+2) +' style = "width:180px"></input></td>'
            html += '<td><input type="number" max=100 step=0.1 min=0 id = azure_input_id'+ Number(4*i+3) +' style = "width:180px"></input></td>'
            html += '<td><p6></p6></td>'
            html += '<td><p6 id = azure_output_id'+ Number(5*i) + ' ></p6></td>'
            html += '<td><p6 id = azure_output_id'+ Number(5*i+1) + '></p6></td>'
            html += '<td><p6 id = azure_output_id'+ Number(5*i+2) + '></p6></td>'
            html += '<td><p6 id = azure_output_id'+ Number(5*i+3) + '></p6></td>'
            html += '<td><p6 id = azure_output_id'+ Number(5*i+4) + '></p6></td>'
            html += '</tr>'

            //console.log(html);
        }
        $("#dynamicTbody_3").append(html);

        //console.log(tablecontent);
    
        content = 
        
        <article>
            <div>
                 <button className = "example_c" onClick={function() { 
                        azuState(azuTable + 1); 
                 }}>추가하기</button>
            </div>      
            <table className = "table">
              <thead>  
                <th style={{width : '100px'}}>CPU<br></br>(core 개수)</th><th style={{width : '100px'}}>Memory<br></br>(메모리)</th><th style={{width : '220px'}}>CPU 최대 사용률(%)<br></br>(일일 최대 사용률의 평균)</th>
                <th style={{width : '220px'}}>Memory 최대 사용률(%)<br></br>(일일 최대 사용률의 평균)</th>  
                <th style={{width : '90px'}}><button className = "example_c" onClick = {function(){azure_printName(azuTable)}} style={{width : '90px', marginBottom : '7px'}}>분석하기</button></th><th style={{width : '120px', marginBottom : '7px'}}>Server Name / Type</th><th style={{width : '110px'}}>CPU<br></br>(Core 개수)</th>
                <th style={{width : '100px'}}>Memory<br></br>(메모리)</th><th style={{width : '150px'}}>DISK<br></br>(Storage)</th><th style={{width : '150px'}}>Price<br></br>(730h)</th>
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
            //console.log(Reserv);
            document.getElementById("aws_output_id" + (5*i+1)).innerText = Math.ceil(Reserv[2*i]);
            document.getElementById("aws_output_id" + (5*i+2)).innerText = Math.ceil(Reserv[2*i+1]);
            if (i == Table -1){
            //aws_send_data(Reserv);
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