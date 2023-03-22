import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Login } from "./components/Login";


function App() {
  return (
    <div id="box">
      <Header />

      <main id="main-content">
        {/* <Home /> */}
        <Login />
      </main>

    </div>
  );
}

export default App;
