
import '../App.css';
import '../style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../footer';
import Navbar from '../navBar';
import SideMenu from '../sideMenu'
import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import $ from "jquery";
import { Component } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


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
            html += '<td><input type="number" min=0 id = input_id'+ Number(4*i) + '></input></td>'
            html += '<td><input type="number" min=0 id = input_id'+ Number(4*i+1) +'></input></td>'
            html += '<td><input type="number" step=0.1 max=100 min=0 id = input_id'+ Number(4*i+2) +'></input></td>'
            html += '<td><input type="number" step=0.1 max=100 min=0 id = input_id'+ Number(4*i+3) +'></input></td>'
            html += '<td><p6></p6></td>'
            html += '<td><p6 id = output_id'+ Number(4*i) + '></p6></td>'
            html += '<td><p6 id = output_id'+ Number(4*i+1) + '></p6></td>'
            html += '<td><p6 id = output_id'+ Number(4*i+2) + '></p6></td>'
            html += '<td><p6 id = output_id'+ Number(4*i+3) + '></p6></td>'
            html += '</tr>'

            console.log(html);
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
                <th style={{width : '90px'}}><button className = "example_c" onClick = {function(){printName(awsTable)}} style={{width : '90px', marginBottom : '7px'}}>분석하기</button></th><th style={{width : '120px', marginBottom : '7px'}}>Server Name / Type</th><th style={{width : '110px'}}>CPU<br></br>(Core 개수)</th>
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
            html += '<td><input type="number" min=0 id = input_id'+ Number(4*i) + '></input></td>'
            html += '<td><input type="number" min=0 id = input_id'+ Number(4*i+1) +'></input></td>'
            html += '<td><input type="number" max=100 step=0.1 min=0 id = input_id'+ Number(4*i+2) +'></input></td>'
            html += '<td><input type="number" max=100 step=0.1 min=0 id = input_id'+ Number(4*i+3) +'></input></td>'
            html += '<td><p6></p6></td>'
            html += '<td><p6 id = output_id'+ Number(4*i) + '></p6></td>'
            html += '<td><p6 id = output_id'+ Number(4*i+1) + '></p6></td>'
            html += '<td><p6 id = output_id'+ Number(4*i+2) + '></p6></td>'
            html += '<td><p6 id = output_id'+ Number(4*i+3) + '></p6></td>'
            html += '</tr>'

            console.log(html);
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
                <th style={{width : '90px'}}><button className = "example_c" onClick = {function(){printName(nbpTable)}} style={{width : '90px', marginBottom : '7px'}}>분석하기</button></th><th style={{width : '120px', marginBottom : '7px'}}>Server Name / Type</th><th style={{width : '110px'}}>CPU<br></br>(Core 개수)</th>
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
            html += '<td><input type="number" min=0 id = input_id'+ Number(4*i) + '></input></td>'
            html += '<td><input type="number" min=0 id = input_id'+ Number(4*i+1) +'></input></td>'
            html += '<td><input type="number" max=100 step=0.1 min=0 id = input_id'+ Number(4*i+2) +'></input></td>'
            html += '<td><input type="number" max=100 step=0.1 min=0 id = input_id'+ Number(4*i+3) +'></input></td>'
            html += '<td><p6></p6></td>'
            html += '<td><p6 id = output_id'+ Number(4*i) + '></p6></td>'
            html += '<td><p6 id = output_id'+ Number(4*i+1) + '></p6></td>'
            html += '<td><p6 id = output_id'+ Number(4*i+2) + '></p6></td>'
            html += '<td><p6 id = output_id'+ Number(4*i+3) + '></p6></td>'
            html += '</tr>'

            console.log(html);
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
                <th style={{width : '90px'}}><button className = "example_c" onClick = {function(){printName(azuTable)}} style={{width : '90px', marginBottom : '7px'}}>분석하기</button></th><th style={{width : '120px', marginBottom : '7px'}}>Server Name / Type</th><th style={{width : '110px'}}>CPU<br></br>(Core 개수)</th>
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

   
    function printName(Table)  {
        for (let i = 0; i < Table*4; i++) {
            const name = document.getElementById("input_id" + i ).value;
            document.getElementById("output_id" + i).innerText = name;
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