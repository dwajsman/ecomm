import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from './routes/home/home.component.jsx'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
    </Routes>
  );
}

export default App;
