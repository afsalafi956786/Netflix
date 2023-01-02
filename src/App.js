import React  from "react";
import NavBar  from "./components/NavBar/NavBar";
import {orginals,action,comedy} from './urls'
import "./App.css"
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
       <NavBar/>
       <Banner/>
       <RowPost url={orginals} title='Netflix Originals' />
       <RowPost url={action} title='Action' isRow/>
       <RowPost url={comedy} title='Comedy' isRow/>
       
    </div>
  );
}

export default App;
