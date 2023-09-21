// import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Camponents/Layout";
import Home from "./Camponents/Home";
import Tv from './Camponents/Tv';
import Movies from './Camponents/Movies';
import Disney from './Camponents/Disney';
import Kids from './Camponents/Kids';
import Sports from './Camponents/Sports';
import NoPage from "./Camponents/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element ={<Home />} />
          <Route path="Tv" element={<Tv/>}/>
          <Route path="Movies" element={<Movies/>}/>
          <Route path="Disney" element={<Disney/>}/>
          <Route path="Kids" element={<Kids/>}/>
          <Route path="Sports" element={<Sports/>}/>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



// function App() {
//   return (
    
//   );
// }

// export default App;
