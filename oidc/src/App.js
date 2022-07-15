import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Info from './components/Page/Info';
import MigHelper from './components/Page/MigHelper';
import CreateServer from './components/Page/CreateServer';
import Dashboard from './components/Page/Dashboard';
import SignUp from './components/Page/SignUp';
import LoginPage from './components/Page/LoginPage';
import ServerAdd from './components/Page/ServerAdd';
import BatchInstall from './components/Page/BatchInstall'

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
                </Routes>
            </BrowserRouter>
        </div>
    )
};

export default App;