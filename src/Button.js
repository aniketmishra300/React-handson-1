import React, { Component } from "react";
import FunctionBox from "./FunctionBox";
import ClassBox from "./ClassBox";
// import './Style.css'

class Button extends Component {

    constructor(){
        super();
        this.state = {
            show : false,
            show2 : false

        }
    }

    render(){
        return(
            <>
                <button className="button1" onClick={()=> this.setState({show : !this.state.show})}>To seeing styling in functional component</button>
                <button className="button2" onClick={()=> this.setState({show2 : !this.state.show2})}>To seeing styling in Class component</button>
                {this.state.show ? <FunctionBox/> : null}
                {this.state.show2 && <ClassBox/>}
            </>
        )
    }
    
}

export default Button;