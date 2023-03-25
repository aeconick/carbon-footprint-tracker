import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import * as logService from './services/logService';

import { Catalog } from "./components/Catalog";
import { CreateLog } from "./components/CreateLog";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Register } from "./components/Register";


function App() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    logService.getAll()
      .then(result => {
        setLogs(result)
      })
  }, []);

  return (
    <div id="box">
      <Header />

      <main id="main-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/create-log' element={<CreateLog />} />
          <Route path='/catalog' element={<Catalog logs={logs} />} />
        </Routes>
      </main>

      <Footer />

    </div>
  );
}

export default App;
