import React, {useState} from "react";
import { BrowserRouter as Router, Route, Link,Switch} from "react-router-dom";
import "./App.css";
import AskWhereSearch from "./AskwhereSearch";
import Greeting from "./Greeting";
import LogInButton from "./logIn";
import ResearchList from "./ResearchList";
import AccountSwitch from "./AccountSwitch";
import CoinToss from "./CoinToss";
import FormPractice from "./FormPractice";
import ApiAndUseEffect from "./ApiAndUseEffect";
import NoMatch from "./NONONOTHINGHERE";
function App() {
  //array is here to prevent reloading of array with each submission of the form
  const feelingsArr = []
  const researchList1 = [{ done:"no", search:"how to write scripts to automate workflow"},{ done:"no", search:"how to make the $$$"},{ done:"yes", search:"pizza near me"}]
  const [logIn, setLogin] = useState(false)
  const acountSwitcher = () => setLogin(!logIn)
  const searchLink = logIn?"/search/yamodah":"/search/yassine"

  return( 
    <Router>
      <div style={{display:"flex", flexDirection:"column", alignItems:"center", alignText:"center"}}>
      <Link to="/" style={{marginTop:"25px"}}>HOME</Link>
      <Link to={searchLink}>SEARCH</Link>
      <Link to="/misc">MISC</Link>
      <br/>
      <Switch>
        <Route exact path="/">
          <Greeting language ="es"/>
          <AccountSwitch logIn={logIn}/>
          <LogInButton logIn={logIn} accountHandler={acountSwitcher}/>
        </Route>
        <Route path="/search/:userID">
        <AskWhereSearch />
        <br/>
        <ResearchList list = {researchList1} />
        <br/>
        </Route>
        <Route path ="/misc">
        <CoinToss />
        <FormPractice array={feelingsArr}/>
        <br/>
        <ApiAndUseEffect/>
        </Route>
        <Route>
          <NoMatch/>
        </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;