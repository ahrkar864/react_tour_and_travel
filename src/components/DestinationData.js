import { Component } from "react";
import "./DestinationStyles.css";
import BaganImage1 from "../assets/bagan1.jpg";
import BaganImage2 from "../assets/bagan2.jpg";

class DestinationData extends Component{
    render() {
        
        return(
            <div className={this.props.className}>
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>
                <div className="image">
                    <img alt="img" src={this.props.img1} />
                    <img alt="img" src={this.props.img2} />
                </div>
            </div>
        )
    }
}

export default DestinationData