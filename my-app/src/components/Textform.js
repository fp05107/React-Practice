import React, { useState } from "react";

export default function Textform(props) {
    const [text, setText] = useState("");
   
    let changeToUppercase = () => {
        let y = text.toUpperCase();
        setText(y);
    };
    let changeToLowercase = ()=>{
        setText(text.toLowerCase());
    }
    let handleOnChange = (event) => {
        console.log("handle on change");
        setText(event.target.value);
    };
    let handleCopy = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control my-3"
                        id="myBox"
                        value={text}
                        onChange={handleOnChange}
                        rows="10"
                    ></textarea>
                    <button className="btn btn-primary mx-3" onClick={changeToUppercase}>
                        Convert to Uppercase
                    </button>
                    <button className="btn btn-primary mx-3" onClick={changeToLowercase}>
                        Convert to Lowercase
                    </button>
                    <button className="btn btn-primary" onClick={handleCopy}>
                        Copy 
                    </button>
                </div>
            </div>

            <div className="container my-3">
                <h1>Your Text Summary</h1>
                <p>{text[text.length-1] === " "? text.split(" ").length-1:text.split(" ").length}word and {text.length} characters</p>
                <p>{0.008*text.split(" ").length +"Minutes To Read"}</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Enter Text To Preview It Here'}</p>


            </div>
        </>
    );
}
