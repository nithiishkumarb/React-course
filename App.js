import React from "react";
import ReactDOM from "react-dom/client"

const Heading=()=>{
    return <div>
<h1>Hello darling</h1>
<Subheading/>
        </div>
}

const Subheading=()=>{
    return <h2>Hello baby</h2>
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>)