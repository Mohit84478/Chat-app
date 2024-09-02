
import './App.css';
import Login from './component/Login';
import Sign from './component/Sign';

function App() {
  const myStyle = {
    backgroundImage:
        "url('chatbg.png')",
    height: "91vh",
    marginTop: "1px",
    
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};
  return (
    <div className=" " style={myStyle}>

    
     <Sign/>
     
      
    </div>
  );
}

export default App;
