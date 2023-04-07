import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { LogProvider } from './contexts/LogContext';

import { Catalog } from "./components/Catalog";
import { CreateLog } from "./components/CreateLog";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { About } from './components/About';
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { LogDetails } from './components/LogDetails';
import { Logout } from './components/Logout';
import { EditLog } from './components/EditLog/EditLog';
import { RouteGuard } from './components/Guards/RouteGuard';
import { Diary } from './components/Diary';


function App() {
    return (
        <AuthProvider>
            <LogProvider>
                <div id="box">
                    <Header />

                    <main id="main-content">
                        <Routes>

                            <Route path='/' element={<Home />} />
                            <Route path='/about' element={<About />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/catalog/:logId' element={<LogDetails />} />
                            <Route path='/catalog' element={<Catalog />} />

                            <Route element={<RouteGuard />}>
                                <Route path='/diary' element={<Diary />} />
                                <Route path='/catalog/:logId/edit' element={<EditLog />} />
                                <Route path='/create-log' element={<CreateLog />} />
                                <Route path='/logout' element={<Logout />} />

                            </Route>
                        </Routes>
                    </main>

                </div>
            </LogProvider>
        </AuthProvider>
    );
}

export default App;
