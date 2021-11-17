import '../App.css';
import React from 'react'
import axios from 'axios'
import App from "../App.js"


class RightHandSide extends React.Component {

    state = {
      posts:[]
    }
  
  

    render(){
        return (

          <div className="rhsBlock">
            <a href  = {this.props.props.url_overridden_by_dest} target = "_blank"> <h1 className = "title">{this.props.props.title}</h1></a>
            <a href  = {this.props.props.url_overridden_by_dest} target = "_blank"> <p>{this.props.props.domain}</p> </a>
            <p>Submitted x hours ago by <p className = "userName">{this.props.props.name}</p></p>
            <p className = "commentSection"> {this.props.props.num_comments + " Comments "}   </p>  <p className = "footer">share save hide report pocket </p>
          </div>
  
  
        );
  
    }
  
  }
  
  export default RightHandSide;
  