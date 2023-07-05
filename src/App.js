import React, { Component, useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Home  from './pages/Home';
import { About } from './pages/About';
import FoodPage from './pages/FoodPage';


class App extends Component {

    render() {
        return (
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/about' element={<About/>} ></Route>
              <Route path='/food' element={<FoodPage/>}></Route>
            </Routes>
        )
    }

}

export default App;


{/* <Route path="/" element={<Outlet />}></Route> */}


{/* <Route path="/" element={<Outlet />}>
    <Route index element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
</Route> */}