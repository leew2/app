import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./page/Layout";
import Home from "./page/Home";
import About from "./page/About";
import NoPage from "./page/NoPage";
import {useState} from "react";
import Login from "./page/Login";
import './App.css';

function App() {
  const[token, setToken] = useState();

  if(!token){
    return <Login setToken={setToken} />
  }
  return (
    <div>
      <h1>My App</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;