import { Routes,Route } from 'react-router-dom';

import { Catalog } from "./components/Catalog";
import { CreateLog } from "./components/CreateLog";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Register } from "./components/Register";


function App() {
  return (
    <div id="box">
      <Header />

      <main id="main-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/create-log' element={<CreateLog />} />
          <Route path='/catalog' element={<Catalog />} />
        </Routes>
      </main>

      <Footer />

    </div>
  );
}

export default App;
