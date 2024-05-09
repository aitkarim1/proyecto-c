import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './page/Login';
import PasswordRecover from './page/Password-recover';
import PasswordRecoverConfirm from './page/Password-recover-confirm';
import Dashboard from "./page/Dashboard";
import Navbar from "./page/Navbar";
import { useEffect,useState } from 'react';
import { AuthProvider, AuthUser } from './components/AuthUser'
import Map from './page/Map';

function App() {
  const[name, setName] = useState('')
 useEffect(() => {
  (async () => {
    const respone = await fetch('http://localhost:4000/user-check', {
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
    });
   const content = await respone.json();
   setName(content.name)
  })();
  })

  console.log(name)
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element= {<Login />}/>
            <Route path="/password-recover" element= {<PasswordRecover />}/>
            <Route path="/password-recover-confirm" element= {<PasswordRecoverConfirm/>}/>
            <Route path="/dashboard" element= {<Dashboard name={name} />}/>
            <Route path="/navbar" element= {<Navbar name={name} setName/>}/>
            <Route path="/map" element= {<Map />}/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
