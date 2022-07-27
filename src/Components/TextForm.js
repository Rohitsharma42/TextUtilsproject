import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    return (
        <div>
             <h1>{props.heading}</h1>
            <div className="mb-3">
               
                <textarea className="form-control" value={text} id="mybox" onChange={handleOnChange} rows="10"></textarea>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            </div>
        </div> 
    )
}