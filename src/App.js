
import {BrowserRouter,Route, Routes} from "react-router-dom"
import Technology from "./container/Technology";
import Crew from "./container/Crew";
import Error from "./container/Error";
import SharedLayout from "./SharedLayout";
import Home from "./container/Home";
import Destination from "./container/Destination";

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>

        <Route index element={<Home/>}/>
        <Route path="/destination" element={<Destination/>}/>
        <Route path="/crew" element={<Crew/>}/>
        <Route path="/technology" element={<Technology/>}/>
        <Route path="/*" element={<Error/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
