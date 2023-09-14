import React,{ useState }  from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import img1 from './images/image_3.jpg';

function FavoriteColor() {
  const[color, setColor] = useState("Red");
  return (
    <>

    
      <h1>Hello React!</h1>
      <p>Welcome to new react page!</p>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>

    <div><img src ={img1} alt="sample" height="240" width="240"/></div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor/>);