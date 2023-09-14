import React,{useState,useEffect}from "react";
import Editor from "./Editor";
function App()
{
  const[html,setHtml]=useState("");
  const[css,setCss]=useState("");
  const[js,setJs]=useState("");
  const[srcDoc,setSrcDoc]=useState("");
 useEffect(() =>{
   const timeout=setTimeout(() =>
   {
     setSrcDoc(`
     <html>
       <body>${html}</body>
       <style>${css}</style>
       <script>${js}</script>
     </html>`)
   },250);
   return () =>clearTimeout(timeout);
  },[html,css,js]
 )
 
 
   
  
  return (
    <>
    <h1 className="h1">Online Code Editor</h1><br></br>
<div className="pane top-pane">
 <Editor language="xml" displayName="HTML" value={html} onChange={setHtml}/>
 <Editor language="css" displayName="CSS" value={css} onChange={setCss}/>
 <Editor language="javascript" displayName="JS" value={js} onChange={setJs}/>
</div>
<br></br>
<br></br>
<div className="middle">Output</div><br></br><br></br>
<div className="pane bottom-pane">
  <iframe
   srcDoc={srcDoc}
   title="result"
   sandbox="allow-scripts"
   width="100%"
   height="100%"
  />
</div>
</>
  );
}

export default App;

