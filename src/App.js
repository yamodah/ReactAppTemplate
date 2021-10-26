import { useState } from "react/cjs/react.development";
import "./App.css";
import AskWhereSearch from "./AskwhereSearch";
import Greeting from "./Greeting";
import LogInButton from "./logIn";
import ResearchList from "./ResearchList";
import AccountSwitch from "./AccountSwitch";
import CoinToss from "./CoinToss";
import FormPractice from "./FormPractice";

function App() {
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
    <div>
    <ResearchList list = {researchList1} />
    <LogInButton logIn={logIn} accountHandler={acountSwitcher}/>
    </div>
    <div>
      <CoinToss />
    </div>
    <div>
      <FormPractice/>
    </div>
  </div>
  )
}

export default App;