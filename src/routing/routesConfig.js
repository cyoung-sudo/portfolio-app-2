import App from "../App";
// Pages
import Home from "../pages/home/Home";
import AllProjects from "../pages/projects/AllProjects";
import ShowProject from "../pages/projects/ShowProject";

const routesConfig = [
  {
    path: "/", 
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/projects",
        children:[
          {
            index: true,
            element: <AllProjects/>
          },
          {
            path: ":id",
            element: <ShowProject/>
          }
        ]
      }
    ]
  }
];

export default routesConfig;