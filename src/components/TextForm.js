import React, { useState } from 'react'

export default function TextForm(props) {
  //calling state variable
  const [text, setText] = useState("");

  //After clicking the submit button 
  const handleUpClick = () =>
  {
    console.log("Clicked");
    let upCase = text.toUpperCase();
    setText(upCase );
    props.showAlert("Upper Case Converted !","Success");
  }

  //After clicking the submit button 
  const handleDwClick = () =>
  {
    console.log("Clicked");
    let lowCase = text.toLowerCase();
    setText(lowCase );
    props.showAlert("Lower Case Converted !","Success");
  }

  const handleClearClick = () =>
  {
    console.log("Clicked");
    let clear = "";
    setText(clear );
    props.showAlert("Text Cleared !","Success");
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speaking !","Success");
  }

   //For typing in textbox and assigning the typed value in setText  
  const handleOnChange = (event) =>
  {
    console.log("Changed");
    setText(event.target.value);
  }

  return (
    <>
    <div style={{color: props.mode==='dark'?'white':'black'}}  className="container mb-3">
      <div className=" mb-3">
        <h1 style={{color: props.mode==='dark'?'white':'black'}} >{props.heading}</h1>
      
      <textarea style={{backgroundColor: props.mode==='dark'? 'Grey': 'white', color:props.mode=== 'dark'?'white': 'black'}} className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="7"></textarea>
      </div>
      <button className='btn btn-primary ' onClick={handleUpClick}>convert to upper case</button>
      <button className='btn btn-primary mx-2' onClick={handleDwClick}>convert to lower case</button>
      <button className='btn btn-primary mx-2' onClick={handleClearClick}>clear</button>
      <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    </div>

    <div style={{color: props.mode==='dark'?'white':'black'}} className="container">
     <h2 >Your Text Summary :</h2>
    {text.split(" ").filter((element)=>{return element.length!==0}).length} characters <br/>
    {.008 * text.split(" ").length }  minutes
    <h3>Preview</h3>
    
    <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
    </div>
    </>
    
  )
}
