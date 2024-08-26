import React , { useState } from 'react'
export default function TextForm(props) {
  const [text , setText] = useState("");

const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper case" , "success");
}
const handleLoClick = () => {
  let newText = text.toLowerCase();
  setText(newText);
  props.showAlert("Converted to lower case" , "success");

}
const handleOnChange = (event) =>{
    // console.log("on change");
    setText(event.target.value);

}

const handleClearClick = () =>{
  let newText = "";
  setText(newText);
  props.showAlert("Converted to Clear text " , "success");

}

const handleCopyClick = () => {
  var text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Converted to Copy Text" , "success");

}
const handleExtraSpaces = () =>{
  let newText = text.split(/[ ]+/)
  setText(newText.join(" "));
  props.showAlert("Converted to Extra Spaces" , "success");

}

const handleCaptializeClick = () => {
  let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
  setText(newText);
  props.showAlert("Converted to Capitialize" , "success");

}

const handleDownloadClick = () => {
  const element = document.createElement("a");
  const file = new Blob(["hello"], {
    type: "text/plain"
  });
  element.href = URL.createObjectURL(file);
  element.download = "myFile.txt";
  document.body.appendChild(element);
  element.click();
};



  return (
    <>
    <div className='container' style={{color: props.mode==="dark"?"white": "black"}}>
    <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value = {text} onChange = {handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==="dark"?"rgb(0 0 0 / 26%)": "#ffffffb8" , color: props.mode === "dark"? "white":"black"}}></textarea>
</div>
<button disabled = {text.length === 0}className='btn btn-success mx-1 ' onClick={handleUpClick}>Convert to UpperCase</button>
<button disabled= {text.length === 0} className='btn btn-success mx-1 ' onClick={handleLoClick}>Convert to LowerCase</button>
<button disabled= {text.length === 0} className='btn btn-danger mx-1 ' onClick={handleClearClick}>Clear Text</button>
<button disabled= {text.length === 0} className='btn btn-success mx-1  ' onClick={handleCopyClick}>Copy Text</button>
<button disabled= {text.length === 0} className='btn btn-success mx-1 ' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
<button disabled= {text.length === 0} className='btn btn-success mx-1 ' onClick={handleCaptializeClick}>Convert to Capitialize</button>
<button disabled= {text.length === 0} className='btn btn-secondary mx-1 my-1' onClick={handleDownloadClick}>Download Text File</button>


    </div>
    <div className="container my-3" style={{color: props.mode==="dark"?"white": "black"}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter(element=>{return element.length !==0 }).length} words and {text.length} character </p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!== 0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text : "Nothing To Preview"}</p>
    </div>
    </>
  )
}
