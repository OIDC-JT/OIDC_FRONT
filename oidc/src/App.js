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
    )
};

export default App;