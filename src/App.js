import "./App.css";
import AskWhereSearch from "./AskwhereSearch";
import Greeting from "./Greeting";
import ResearchList from "./ResearchList";

const researchList1 = [{ done:"no", search:"money"},{ done:"yes", search:"wax"},{ done:"yes", search:"liverpool"}]
function App() {
  return( 
    <>
  <Greeting language ="es"/>
  <AskWhereSearch name ="Yassine"/>
  <Greeting language ="fr"/>
  <AskWhereSearch name ="Yamodah"/>
  <ResearchList list = {researchList1} />
  </>
  )
}

export default App;