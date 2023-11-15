// App.js
import React from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom' 
import GoalInput from './Componentes/GoalInput';
import Instrucciones from './Componentes/Instrucciones';
import Navbar from './Componentes/Navbar';
import Cabala from './Componentes/Cabala'
import './App.css'; 

import Switch from './Componentes/Switch'

const routes = createBrowserRouter([{
  path: "/home",
  element: <GoalInput />
},{
  path: "/",
  element: <GoalInput />
},{
  path: "/Instrucciones",
  element: <Instrucciones />
}
,{
  path: "/Cabala",
  element: <Cabala />
}])
const App = () => {
  




  return (
   <>
      <Navbar />
      <RouterProvider router={routes}/>
      <Switch></Switch>
</>
  );
};

export default App;
