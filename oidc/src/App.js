import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Info from './components/Page/Info'; // 웹사이트 접속 시 처음 보여지는 화면 컴포넌트
import MigHelper from './components/Page/MigHelper'; // CPU, MEM, CPU 최대사용률, Memory 최대 사용률을 기반으로 서버를 추천해주는 MigHelper
import CreateServer from './components/Page/CreateServer'; // CPU, MEM을 기반으로 서버를 추천해주는 CreateServer
import Dashboard from './components/Page/Dashboard'; // 본인의 서버모니터링을 수행할 수 있는 페이지로 이동 (로그인 기능 필요)
import SignUp from './components/Page/SignUp'; // 회원가입을 수행할 수 있는 페이지로 이동
import LoginPage from './components/Page/LoginPage'; // 로그인을 수행할 수 있는 페이지로 이동
import ServerAdd from './components/Page/ServerAdd'; // 로그인을 수행 후, 사용자가 모니터링 하고 싶은 서버를 추가하는 화면
import BatchInstall from './components/Page/BatchInstall' // ServerAdd페이지에서 서버를 추가 후, 사용자가 본인의 서버에 설치해야하는 Agent 배치파일 URI 제공
import Security from './components/Page/Security' // 보안 취약점을 분석해주는 페이지로 이동 (로그인 기능 필요)
import LoginPageSecu from './components/Page/LoginPageSecu'; // 보안 거버넌스 페이지의 로그인 페이지로 이동
import BatchInstallSecu from './components/Page/BatchInstallSecu'; // 보안 취약점을 분석해주는 파일 URI를 생성해준다. 
import ServerAddSecu from './components/Page/ServerAddSecu'; // 보안 취약점을 분석하고 싶은 서버를 등록하는 페이지

// Route 함수를 활용하기 위해 제작한 컴포넌트 import 수행


const App = () => {
    return(
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Info/>}></Route> 
                    <Route path='/mighelper' element={<MigHelper/>}></Route>
                    <Route path='/createserver' element={<CreateServer/>}></Route>
                    <Route path='/dashboard' element={<Dashboard/>}></Route>
                    <Route path='/SignUp' element={<SignUp/>}></Route>
                    <Route path='/LoginPage' element={<LoginPage/>}></Route>
                    <Route path='/ServerAdd' element={<ServerAdd/>}></Route>
                    <Route path='/BatchInstall' element={<BatchInstall/>}></Route>
                    <Route path='/security' element={<Security/>}></Route>
                    <Route path='/LoginPageSecu' element={<LoginPageSecu/>}></Route>
                    <Route path='/SecuServerAdd' element={<ServerAddSecu/>}></Route>
                    <Route path='/BatchInstallSecu' element={<BatchInstallSecu/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
};

export default App;