import "./App.scss";
// Routing
import { Route, Routes } from "react-router-dom";
// Pages
import Home from "./pages/home/Home";
import AllProjects from "./pages/projects/AllProjects";
import ShowProject from "./pages/projects/ShowProject";

function App() {
  return (
    <div id="app">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="projects">
          <Route index element={<AllProjects />} />
          <Route path=":id" element={<ShowProject />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
