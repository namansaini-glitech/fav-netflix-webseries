import logo from './logo.svg';
import './App.css';
import img1 from './img/react.png'
import img2 from './img/nodejs.png'
import img3 from './img/php-code.png'
import img4 from './img/python.png'
import img5 from './img/java.png'
import img6 from './img/sql-server.png'
import './index.css';
import Cards from './Cards';
import Sdata from './Sdata';


function App() {
  return (
    <div>
      <h1 className="heading_style" > List to learn languages </h1>
      {Sdata.map((val) => {
        return(
         <Cards 
          imgsrc = {val.imgsrc}
          category = {val.category}
          tittle = {val.tittle}
          link = {val.link}
         /> 
        );
      } )}
    </div>

  );
}

export default App;