import React,{useState} from 'react'

import {Container} from 'react-bootstrap'

import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'

import HomeScreen from './screen/homeScreen/HomeScreen'
import LoginScreen from './screen/loginScreen/LoginScreen'
import WatchScreen from './screen/watchScreen/WatchScreen'
import SearchScreen from './screen/SearchScreen'

import { Routes, Route ,Outlet,Navigate} from 'react-router-dom';

import './_app.css'

 function Layout(){
  const [sidebar,toggleSidebar]=useState(false);

  const handleToggleSidebar=()=>toggleSidebar(!sidebar)
  return (
    <React.Fragment>
       <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container ">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app__main ">
          <Outlet />
        </Container>
      </div> 
    </React.Fragment>
  );
}

function App() {
  
  return (
    // <HomeScreen />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/"  element={<HomeScreen />} />
        <Route path="/search/:query"  element={<SearchScreen />} />
        
        <Route path="/watch/:id"  element={<WatchScreen />} />
        <Route path="*" element={<Navigate to ="/" replace />} />
      </Route>

      <Route path="auth" element={<LoginScreen />} />
    </Routes>
  );
}

export default App
