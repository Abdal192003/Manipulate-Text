import { useState } from 'react';


export function TextForm(props) {
    const [text, setText] = useState("Write Something");


    function clickingBtn() {
        console.log("Clicked the button");
        const upper = text.toUpperCase();
        setText(upper);
    }

    function clickBtnLower() {
        console.log("Clicked the button of lowerCase");
        const lower = text.toLowerCase();
        setText(lower);
    }

    function clickRemove() {
        console.log("Clear the text");
        setText("");
    }

    async function copyText(){
        await navigator.clipboard.writeText(text);
        alert("Text has been copies successfully");
    }

    const changing = (event) => {
        console.log("on change");
        setText(event.target.value);
    }

    return (
        <>
            <div className="mb-3">
                <label htmlFor="myText" className={`form-label text-${props.mode==='light' ? 'dark' : 'light'}`}>{props.heading}</label>
                <textarea className="form-control" value={text} onChange={changing} id="myText" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={clickingBtn}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={clickBtnLower}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={clickRemove}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={copyText}>Copy Text</button>
            <div className={`counting my-2 text-${props.mode==='light' ? 'dark' : 'light'}`}>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
            </div>
            <p style={{color:'red'}}>Made by - ABDAL AHMAD KHAN</p>
        </>
    )
}