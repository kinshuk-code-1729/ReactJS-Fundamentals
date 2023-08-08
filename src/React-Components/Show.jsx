import React from "react";
import "./Show.css"

const Show = (props)=>{
    console.log(props);
    return(
        <div>
            <div style={{margin:"auto",backgroundColor:"olive",border: "2px solid crimson",height:"120px",width:"200px"}}>
                <h3> Hello {props.Fname} {props.Lname}</h3>
                <h4 className="text-style">Your age is {props.age}</h4>
            </div>
            {props.children}
        </div>
    );
}

export default Show;