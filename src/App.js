import "./App.scss";
// Routing
import { Outlet } from "react-router-dom";
// Components
import NavigationBar from "./components/navigation/NavigationBar";
import Footer from "./components/navigation/Footer";

function App() {
  return (
    <div id="app">
      <NavigationBar />
      <div id="app-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;