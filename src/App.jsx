
import './App.css';
import Home from './component/Home';
import Login from './component/Login';
import Sign from './component/Sign';


import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const myStyle = {
    backgroundImage:
        "url('chatbg.png')",
    height: "91vh",
    marginTop: "1px",
    
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};
const router=createBrowserRouter([
  {
    path:"/",
    element:<Sign/>
  },
  {
    path:"/login",
  element:<Login/>
  },
  {
    path:"/home",
  element:<Home/>
  }

])
  return (
    <div className=" " style={myStyle}>

<RouterProvider router={router}/>
     
     
      
    </div>
  );
}

export default App;
