import "./App.css";
import routes from "./routes";
import TopBar from "./Components/TopBar/TopBar";
import Sidebar from "./Components/Sidebar/Sidebar";
import { useRoutes } from "react-router-dom";

function App() {
  let router = useRoutes(routes);
  return (
    <>
      <TopBar />
      <div className='container'>
              <Sidebar/>
              {router}
      </div>
    </>
  );
}

export default App;
