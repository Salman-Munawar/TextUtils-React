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
        let newtext = document.getElementById("myBox");
        newtext.select();
       // text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(newtext.value); 
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
            <textarea  className="form-control" id="myBox" style={{backgroundColor: props.mode==='dark'? 'grey':'white', 
                       color: props.mode==='dark'? 'white':'black' }} value={text} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
         </div>

         <div className="container my-3" style={{color: props.mode==='dark'? 'white':'#042743'}}>
          <h2> Your text summary</h2>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p>{0.008 * text.split(" ").length } Minutes read</p>
          <h2>Perview</h2>
          <p>{text.length>0? text : "Enter something in the textox above to preview it here"}</p>
         </div>
         </>
     )
 }
 