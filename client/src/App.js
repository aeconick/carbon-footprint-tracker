import { CreateLog } from "./components/CreateLog";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Register } from "./components/Register";


function App() {
  return (
    <div id="box">
      <Header />

      <main id="main-content">
        {/* <Home /> */}
        {/* <Login /> */}
        {/* <Register /> */}
        <CreateLog />
      </main>

    </div>
  );
}

export default App;
