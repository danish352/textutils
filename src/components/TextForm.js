import React , {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text has been converted to Uppercase" , "success")
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Text has been converted to Lowercase" , "success")
    }
    const handleClearClick = ()=>{
        // console.log("Uppercase was Clicked" + text);
        let newText = ""
        setText(newText)
        props.showAlert("Text has been Cleared" , "success")
    }
    
    const handleCopy = ()=>{
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been copied to clipboard" , "success")
    }
    
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra spaces have been removed" , "success")
    }


    const handleOnChange = (event)=>{
        // console.log("onChange")
        setText(event.target.value)
    }

    const [text, setText] = useState(" ");
    
    return (
        <>
        <div>
            <h1 style={{color: props.toggleTxtC}}>Enter Text Below</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor: props.toggleTxtA , color: props.toggleTxtC}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-2">
            <h2 style={{color: props.toggleTxtC}}>Your Text Summary</h2>
            <p style={{color: props.toggleTxtC}}>{text.split(" ").length} words and {text.length} characters</p>
            <p style={{color: props.toggleTxtC}}>{0.008 * text.split(" ").length} Minutes Read</p>
            <h2 style={{color: props.toggleTxtC}}>Preview</h2>
            <p style={{color: props.toggleTxtC}}>{text.length>0?text:"Enter something in the text box above for preview"}</p>
        </div>
        </>
    )
}
