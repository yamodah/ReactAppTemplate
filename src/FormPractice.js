import { useState } from "react/cjs/react.development"

function FormPractice(){
    const [feeling,setFeeling] = useState("")
    const handleFeelingInput = (event)=>setFeeling(event.target.value)
    const [feelingsArr, setFeelingsArr] = useState([])
    const handleSubmission = (event)=>{
        event.preventDefault()
        setFeelingsArr([...feelingsArr,feeling])
        setFeeling("")
    }
    const feelingsList = feelingsArr.map((feeling,index)=>{
        return <li key={`feeling-${index}`}><h4>{feeling}</h4></li>
    })
    const deleteHandler = ()=>{
        const filterdFeelingsList = feelingsArr.filter((feeling,index)=> index!==feelingsArr.length - 1)
        setFeelingsArr(filterdFeelingsList)
        //console.log(filterdFeelingsList)
    }

    return (<div>
        <form onSubmit={handleSubmission}>
            <label htmlFor="feeling">
                How are you feeling ? <br></br>   
                <input type="text" id="feeling" name="feeling" value={feeling} onChange={handleFeelingInput}/>
            </label>
            <button type="submit">i am feeling this</button>
        </form>
        
        <div style={{display:"flex"}}>
            <h4>I am feeling:</h4>
            <ul>{feelingsList}</ul>
        </div>
        <button onClick={deleteHandler}>maybe not ?</button>
    </div>)
}

export default FormPractice