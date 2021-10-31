function ResearchList({list}){
    const listToResearch = list.map(({search,done},index)=>{
       return (<tr key={index} className="border">
            <td>{search}</td>
            <td>{done}</td>
        </tr>)
    })
    return <table>
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
}
export default ResearchList