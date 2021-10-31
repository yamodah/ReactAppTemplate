import { useState } from "react/cjs/react.development";
import "./App.css";
import AskWhereSearch from "./AskwhereSearch";
import Greeting from "./Greeting";
import LogInButton from "./logIn";
import ResearchList from "./ResearchList";
import AccountSwitch from "./AccountSwitch";
import CoinToss from "./CoinToss";
import FormPractice from "./FormPractice";
import ApiAndUseEffect from "./ApiAndUseEffect";
function App() {
  //array is here to prevent reloading of array with each submission of the form
  const feelingsArr = []
  const researchList1 = [{ done:"no", search:"money"},{ done:"yes", search:"wax"},{ done:"yes", search:"liverpool"}]
  const [logIn, setLogin] = useState(false)
  const acountSwitcher = () => setLogin(!logIn)


  return( 
  <div style={{display:"flex", flexDirection:"column", alignItems:"center", alignText:"center"}}>
    <div> 
      <Greeting language ="fr"/>
      <AccountSwitch logIn={logIn}/>
      <AskWhereSearch />
    </div>
    <ResearchList list = {researchList1} />
    <LogInButton logIn={logIn} accountHandler={acountSwitcher}/>
    <CoinToss />
    <FormPractice array={feelingsArr}/>
    <br/>
    <ApiAndUseEffect/>
  </div>
  )
}

export default App;