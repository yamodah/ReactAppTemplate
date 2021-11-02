import React from "react"
import {useParams} from "react-router-dom"
function ResearchList({list}){
    const listToResearch = list.map(({search,done},index)=>{
       return (<tr key={index} className="border">
            <td>{search}</td>
            <td>{done}</td>
        </tr>)
    })
    const params = useParams()
    return( <>
    <table>
        <thead>
            <tr className="border">    
                <th>SEARCH</th>
                
                <th>DONE</th>
            </tr>
        </thead>
        <tbody>
            {listToResearch}
        </tbody>
    </table> 
    <br/>
    <h5>Welcome {params.userID}</h5>
    </>)
}
export default ResearchList