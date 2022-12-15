import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("Lowercase clicked" + text);
    let newText= text.toLowerCase();
    setText(newText)

  }
  const handleOnChange = (event)=>{
    console.log("on change");
    setText(event.target.value);
  }
  const [text, setText] = useState("Enter text here");
  
  return (
    <div>

    <h1>{props.heading}</h1>

    <div className="mb-3">




      <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox"> </textarea>
    </div>
      <button className="btn btn-primary" onClick={handleUpClick}> Convert to LowerCase </button>
    </div>
  )
}
