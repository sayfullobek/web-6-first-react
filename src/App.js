import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Menu } from "./pages/Menu";
import { SecondMenu } from "./pages/SecondMenu";
import { NavBar } from "./component/NavBar";
import { Footer } from "./component/Footer";
import { Qozi } from "./pages/Qozi";
import { Register } from "./pages/Register";
import { Cabinet } from "./pages/Cabinet";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Car } from "./pages/car-project/Car";
import { GetOneCars } from "./pages/car-project/GetOneCar";
import { Phone } from "./pages/phone-project/Phone";
import { ComponentTask } from "./pages/ComponentTask";
import { WebCamera } from "./pages/WebCam";

function App() {
  return (
       <BrowserRouter>
       <NavBar/>
       <div className="m-5">
       <Routes>
          <Route path="/" element={<Menu/>}/>
          <Route path="/second" element={<SecondMenu/>}/>
          <Route path="/qozi" element={<Qozi/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/cabinet" element={<Cabinet/>}/>
          <Route path="/car" element={<Car/>}/>
          <Route path="/car/:name" element={<GetOneCars/>}/>
          <Route path="/phone" element={<Phone/>}/>
          <Route path="/component" element={<ComponentTask/>}/>
          <Route path="/camera" element={<WebCamera/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
       </div>
        <Footer/>
       </BrowserRouter>
  );
}

export default App;