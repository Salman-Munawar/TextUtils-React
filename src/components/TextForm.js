 import React, {useState} from 'react' 
 


 export default function TextForm(props) {
    const handleUpClick = ()=>{
       // console.log("Upper case was clicked");
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = ()=>{        
         let newtext = text.toLowerCase();
         setText(newtext);
         props.showAlert("Converted to lowercase!", "success");
     }
     
   
    const handleClearClick = ()=>{        
        let newtext = '';
        setText(newtext);
        props.showAlert("Text Cleared!", "success");
    }

    const handleCopyClick = ()=>{          
        navigator.clipboard.writeText(text);          
        props.showAlert("Copied to Clipboard!", "success");    
    }


    const handleExtraSpaces = ()=>{        
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }


    const handleOnChange = (event)=>{
       // console.log("On Change");
        setText(event.target.value);
    }    
    const [text, setText] = useState('');
   // setText("new text");
     return (    
         <>          
        <div  className="container" style={{color: props.mode==='dark'? 'white':'#042743'}}>         
              <h1>{props.heading}</h1>   
            <div  className="mb-3">  
            <textarea  className="form-control" id="myBox" style={{backgroundColor: props.mode==='dark'? '#13466e':'white', 
                       color: props.mode==='dark'? 'white':'black' }} value={text} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
         </div>

         <div className="container my-3" style={{color: props.mode==='dark'? 'white':'#042743'}}>
          <h2> Your text summary</h2>
          <p>{text.split(/\s+/).filter((element) =>{return element.length!==0}).length} words and {text.length} characters</p>
          <p>{0.008 * text.split(" ").filter((element) =>{return element.length!==0}).length } Minutes read</p>
          <h2>Perview</h2>
          <p>{text.length>0? text : "Nothing to preview!"}</p>
         </div>
         </>
     )
 }
 