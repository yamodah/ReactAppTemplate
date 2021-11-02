import React, { useState } from "react"
import FormListGenerator from "./FormListGenerator";

function FormPractice({array}){
    //empty input ready to recive a feeling 
    const initialFormState = {
        feeling:""
      };
      //have to be set up here because we have to be able to
      //render the list both when we submit and delete 
      const [formData, setFormData] = useState({ ...initialFormState });
      const handleChange = ({ target }) => {
        setFormData({
          ...formData,
          [target.name]: target.value,
        });
      };
    
    const handleSubmission = (event)=>{
        event.preventDefault()
        //we are adding to the array in the parent app component
        array.push(formData.feeling)
        //because we cannot guarantee the array will update in time
        //we have to store the current feeling and structure it like
        //the rest of our item elements (unsure of how to add a key to the fisrt item)
        const currentFeeling = <li>{formData.feeling}</li>
       
        setFeelings([...feelingsList,currentFeeling])
        setFormData({feeling:""})
    }
    const feelingsList = array.map((feeling,index)=><li key={index}>{feeling}</li>)
    const[feelings,setFeelings] = useState(feelingsList)

    return (
        <div>
        <form onSubmit={handleSubmission}>
            <label htmlFor="feeling">
                How are you feeling ? <br></br>   
                <input type="text" id="feeling" name="feeling" value={formData.feeling} onChange={handleChange}/>
            </label>
            <button type="submit">i am feeling this</button>
        </form>
        <FormListGenerator array={array} feelings={feelings} setFeelings={setFeelings}/>
        </div>)
}

export default FormPractice