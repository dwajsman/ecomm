import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from './routes/home/home.component.jsx'
import Navigation from "./routes/navigation/navigation.component.jsx";
import Authentication from "./routes/authentication/authentication.component"
import Shop from "./routes/shop/shop.component";


// import { UserProvider } from "./assets/user.context";



function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />

      </Route>

    </Routes>
  );
}

export default App;
