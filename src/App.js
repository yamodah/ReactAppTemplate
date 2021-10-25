import "./App.css";
import AskWhereSearch from "./AskwhereSearch";
import Greeting from "./Greeting";
import ResearchList from "./ResearchList";


const researchList1 = [{ done:"no", search:"money"},{ done:"yes", search:"wax"},{ done:"yes", search:"liverpool"}]
function App() {
  return( 
  <div style={{display:"flex", flexDirection:"column", alignItems:"center", alignText:"center"}}>
    <div> 
      <Greeting language ="es"/>
      <AskWhereSearch name ="Yassine"/>
    </div>
    <div> 
      <Greeting language ="fr"/>
      <AskWhereSearch name ="Yamodah"/>
    </div>
    <div>
    <ResearchList list = {researchList1} />
    </div>
  </div>
  )
}

export default App;