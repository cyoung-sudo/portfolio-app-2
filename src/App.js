import "./App.scss";
// Routing
import { Route, Routes } from "react-router-dom";
// Pages
import Home from "./pages/home/Home";
import AllProjects from "./pages/projects/AllProjects";
import ShowProject from "./pages/projects/ShowProject";
// Components
import NavigationBar from "./components/navigation/NavigationBar";
import Footer from "./components/navigation/Footer";

function App() {
  return (
    <div id="app">
      <NavigationBar />
      <div id="app-content">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/projects">
            <Route index element={<AllProjects />} />
            <Route path=":id" element={<ShowProject />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;