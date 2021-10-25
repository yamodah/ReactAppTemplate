function ResearchList({list}){
    const listToResearch = list.map(({search,done},index)=>{
       return (<tr key={index}>
            <td>{search}</td>
            <td>{done}</td>
        </tr>)
    })
    return <table>
        <thead>
            <th>SEARCH</th>
            <th>DONE</th>
        </thead>
        <tbody>
            {listToResearch}
        </tbody>
    </table> 
}
export default ResearchList