import React from "react";
import { Component } from "react/cjs/react.production.min";
import "./style.css";

class Result extends Component {
    
    render() {
        return(<div>
            <p>Color: {this.props.color} - Fontsize: {this.props.fontSize}px</p>
            <div className="result" style={{color: this.props.color, fontSize: this.props.fontSize}}>
                Nội dung setting
            </div>
        </div>)
    }
}

export default Result;
