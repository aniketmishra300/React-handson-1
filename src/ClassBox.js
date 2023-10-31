import React, { Component } from "react";
// import './Style.css'

class ClassBox extends Component{
    render()
    {
        return(
            <>
                <div className="classComp" style={{width : '500px',border : "1px solid black"}}>
                    <h1>This is created using Class component</h1>
                    <p>This is done using external css</p>
                    <p style={{color : 'blue'}}>This is done using internal css</p>
                </div>
            </>
        )
    }
    
}

export default ClassBox;