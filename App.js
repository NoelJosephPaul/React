import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading);

const JsxHeading = () => (<h1 className="heading">Heading jsx</h1>);


const HeadingComponent = () =>(
    <div id="container">
        
        <JsxHeading/>
        <h1>hey</h1>

    </div>
    
    

); 



root.render(<HeadingComponent/>);
