import React, {useState} from 'react'

export default function TextForm(props) {
    const upper = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const lower = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const clear = () => {
        let newText = ("");
        setText(newText)
    }
    const copy = () => {
       navigator.clipboard.writeText(text);
       var x=document.getElementById("copy");
       x.style.backgroundColor="green";
       x.innerHTML=  'Copied';
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    return (
        <>
        <div className="container">
             <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} id="mybox" onChange={handleOnChange} rows="8"></textarea>
                <button className="btn btn-primary mx-2 my-3"  onClick={upper}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2 my-3"  onClick={lower}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2 my-3"  onClick={clear}>Clear Text</button>
                <button id= "copy" className="btn btn-primary mx-2 my-3"  onClick={copy}>Copy to Clipboard</button>
            </div>
        </div> 
        <div className="container">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>{0.008 * text.split("").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
