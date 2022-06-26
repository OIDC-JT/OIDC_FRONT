import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Info from './components/Page/Info';
import MigHelper from './components/Page/MigHelper';
import CreateServer from './components/Page/CreateServer';


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