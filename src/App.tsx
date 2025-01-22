import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React,{lazy} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./login/LoginPage";
const MyComponent = lazy(()=>import('../src/pages/Index.tsx'))

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MyComponent/>}/>
        <Route path="/login" element={<LoginPage />} />
      </Routes>

    </>
  );
}

export default App;
