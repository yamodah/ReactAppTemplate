import React, { useState } from "react";

function AskWhereSearch (){
    const [consoleMe,setConsoleMe] = useState(false)
    const googSearch = "https://www.google.com"
    const bingSearch = "https://wwww.bing.com"
    const element = (<div>
         <p>would you like to search with <a href={googSearch}><button>Google</button></a> or <a href={bingSearch}><button>Bing</button></a></p>
         <button onClick={()=>{
             console.log("nice click") 
             setConsoleMe(!consoleMe)}}> 
             {consoleMe ? "thank you" :"Console something plz ... anything ... just log something"}
         </button>
        </div>
       )
    return element;
}

export default AskWhereSearch