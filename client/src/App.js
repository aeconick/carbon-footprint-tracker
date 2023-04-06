import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, } from 'react-router-dom';

import { logServiceFactory } from './services/logService';
import { AuthProvider } from './contexts/AuthContext';
import { useService } from './hooks/useService';

import { Catalog } from "./components/Catalog";
import { CreateLog } from "./components/CreateLog";
//import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { About } from './components/About';
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { LogDetails } from './components/LogDetails';
import { Logout } from './components/Logout';
import { EditLog } from './components/EditLog/EditLog';
import { RouteGuard } from './components/Guards/RouteGuard';


function App() {
    const navigate = useNavigate();
    const [logs, setLogs] = useState([]);
    const logService = logServiceFactory(); //auth.accessToken

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
    };

    const onLogEditSubmit = async (values) => {
        const result = await logService.edit(values._id, values);

        setLogs(state => state.map(x => x._id === values._id ? result : x));

        navigate(`catalog/${values._id}`);
    };

    return (
        <AuthProvider>
            <div id="box">
                <Header />

                <main id="main-content">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/catalog' element={<Catalog logs={logs} />} />
                        <Route path='/catalog/:logId' element={<LogDetails />} />

                        <Route element={<RouteGuard />}>
                            <Route path='/create-log' element={<CreateLog onCrateLogSubmit={onCreateLogSubmit} />} />
                            <Route path='/catalog/:logId/edit' element={<EditLog onLogEditSubmit={onLogEditSubmit} />} />
                            <Route path='/logout' element={<Logout />} />
                        </Route>

                    </Routes>
                </main>

                {/* TODO: <Footer /> */}

            </div>
        </AuthProvider>
    );
}

export default App;
