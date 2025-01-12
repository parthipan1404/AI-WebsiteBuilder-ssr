import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React,{lazy} from 'react';
const MyComponent = lazy(()=>import('./pages/Index'))

function App() {

  return (
    <>
      <MyComponent/>
    </>
  );
}

export default App;
