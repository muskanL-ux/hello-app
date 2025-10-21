import logo from './logo.svg';
import './App.css';

let name= "Muskan";
let id = "1009383";

let name2= "Daasha";


function Greet(props){
  return <h2> Welcome{props.name} your id is {props.id}</h2>
}

function ProgramInfo(props){
  return<p> You are enrolled in {props.program}</p>
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
         Welcome to week 1.
        </h1>
        <Greet name ="John" id = "4543543"/>

        <Greet name ="Tiara" id = "7847487"/>
        <h2>
        <ProgramInfo program ="BIT"/>
        <ProgramInfo program ="BBA"/>
        My First React App
        </h2>


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
