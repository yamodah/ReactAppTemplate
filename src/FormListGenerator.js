//import { useState } from "react/cjs/react.development";

function FormListGenerator({array,feelings,setFeelings}){
    //accepting props to allow for parent component to be able 
    //to chaneg state as well

    //create an array of alist items from array of submitted feelings
    //use this as base list 
    const feelingsList = array.map((feeling,index)=><li key={index}>{feeling}</li>)
    const deleteHandler = (event)=>{
        //event.preventDefault()
        //when delteing we are going to filter to be able to remove the last feeling
        //if you try to just alter the array and subsequently the feelingsList 
        // it will not work so its best to set a new varibale to handle the new list 
        const lastFeelingRemoved = feelingsList.filter((feeling,index)=>index!==feelingsList.length-1)
        //we pop still so that the global array corresponds with our new list of feelings
        array.pop()
        setFeelings(lastFeelingRemoved)
    };
    
    

return (<div>    
    <div style={{display:"flex"}}>
    <h4>I am feeling:</h4>
    <ul>{feelings}</ul>
</div>
<button onClick={deleteHandler}>maybe not ?</button>
</div>)
}

export default FormListGenerator