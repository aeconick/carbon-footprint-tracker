import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, } from 'react-router-dom';

import * as logService from './services/logService';
import * as authService from './services/authService';
import { AuthContext } from './contexts/AuthContext';

import { Catalog } from "./components/Catalog";
import { CreateLog } from "./components/CreateLog";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { LogDetails } from './components/LogDetails';


function App() {
  const navigate = useNavigate();
  const [logs, setLogs] = useState([]);
  const [auth, setAuth] = useState({});

  useEffect(() => {
    logService.getAll()
      .then(result => {
        setLogs(result)
      })
  }, []);

  const onCreateLogSubmit = async (data) => {
    const newLog = await logService.create(data);

    setLogs(state => [...state, newLog]);

    navigate('/catalog');
  }

  //TODO: notify user if there is an error
  const onLoginSubmit = async (data) => {
    try {
      const result = await authService.login(data);

      setAuth(result);

      navigate('/catalog');
    } catch (error) {
      console.log('error');
    }
  };

  const onRegisterSubmit = async (values) => {
    const { confirmPassword, ...registerData } = values;
    if (confirmPassword !== registerData.password) {
      return; //TODO: notify user
    }

    try {
      const result = await authService.register(values);

      setAuth(result);

      navigate('/catalog');
    } catch (error) {
      console.log('error');
    }
  }

  const context = {
    onLoginSubmit,
    onRegisterSubmit,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    isAuthenticated: !!auth.accessToken, //truthy => true, falsy => false
  };

  return (
    <AuthContext.Provider value={context}>
      <div id="box">
        <Header />

        <main id="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/create-log' element={<CreateLog onCrateLogSubmit={onCreateLogSubmit} />} />
            <Route path='/catalog' element={<Catalog logs={logs} />} />
            <Route path='/catalog/:logId' element={<LogDetails />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </AuthContext.Provider>
  );
}

export default App;
