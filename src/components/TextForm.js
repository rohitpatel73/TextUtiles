// import React, {useState} from 'react'
import {useState} from 'react'


export default function TextForm(props) {

    

    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLoClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleClearClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = '';
        setText(newText)
        props.showAlert("Text cleared", "success");
    }
    const handleCopyClick = () => {
        // console.log("Uppercase was clicked" + text);
        navigator.clipboard.writeText(text);
        // setText(newText)
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard!", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);  //rejex of js is used
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
        
    }

    const [text, setText] = useState('');
    // text = "new text"; //Wrong way to change the state
    // setText("new text"); //correct way to chnage the state
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark' ? 'white':'#042743'}}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor: props.mode === 'dark' ? '#13466e':'white', color: props.mode === 'dark' ? 'white' : '#042743'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
                Convert to Uppercase    
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
                Convert to Lowercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
                Clear Text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>
                Copy to Clipboard
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
                Remove extra spaces
        </button>
        
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
