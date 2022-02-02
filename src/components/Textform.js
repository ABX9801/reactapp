import React,{useState} from 'react';


export default function Textform(props) {
    const handleUpClick = ()=>{
        //console.log("Upercase was clicked",text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to Uppercase","success");
    }

    const handleOnChange = (event)=>{
        //console.log("Handle on Change")
        setText(event.target.value);
    }

    const handleLowClick = ()=>{
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to Lowercase","success");
    }

    const handleClearClick = ()=>{
        setText('');
        props.showAlert("Cleared Text area ","success");
    }

    const handleReverseClick = ()=>{
        let textarr = text.split(' ');
        textarr.reverse();
        let newtext = textarr.join(' ');
        setText(newtext);
        props.showAlert("Reversed Sentence","success");
    }
    const [text,setText] = useState('');
    return <>
    <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}}></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Upercase</button>
        <button className='btn btn-secondary mx-2' onClick={handleLowClick}>Convert to Lowercase</button>
        <button className='btn btn-success mx-2' onClick={handleClearClick}>Clear Text</button>
        <button className='btn btn-danger mx-2' onClick={handleReverseClick}>Reverse Sentence</button>
        
    </div>
    <div className='container my-3' style={{color:props.mode==='light'?'black':'white'}}>
        <h2>Your text Summary</h2>
        <p>{text.split(" ").length} words ,{text.length} characters</p>
        <p>Mintes required to read : {0.008 *text.split(" ").length} </p>
        <h4>Preview</h4>
        <p>{text.length>0?text:"Enter Text to Preview it Here"}</p>
    </div>
    </>;
}
