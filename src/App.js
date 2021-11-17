import './App.css'
import React from 'react'
import axios from 'axios'
import RightHandSide from './components/rightSide.js'
import ReactDOM from "react-dom";




 class App extends React.Component {

  state = {
    posts:[]
  }


// axios pull for data and storing it in an array, which is the state variable above
  componentDidMount() {
    axios.get(`https://www.reddit.com/r/pics.json`)
      .then(response => {
        const posts = response.data.data.children;
        this.setState({ posts });
      })
  }

  // downvote function call 
  // gets the entire DOM widget and queries for all divs called .test
  // checks all the outertext of each div and compares to the data given 
  // same functionality as the upVoteFunction
  downVoteFunction = (data) => {
    const node = ReactDOM.findDOMNode(this)
    let child 
    let i = 0;
    if (node instanceof HTMLElement) {
       child = node.querySelectorAll('.test');
  }
    for(i = 0; i < 25; i++){
      if( child[i].outerText === (data.ups).toString() ){
        child[i].innerHTML = (data.ups - 1)
      }
    }
  }

  upVoteFunction = (data) => {
    const node = ReactDOM.findDOMNode(this)
    let child 
    let i = 0;
    if (node instanceof HTMLElement) {
       child = node.querySelectorAll('.test');
  }
    for(i = 0; i < 25; i++){
      if(  child[i].outerText === (data.ups).toString()   ){
        child[i].innerHTML = (data.ups + 1)
      }
    }
  }
  render(){
      return (
        <div className="outerBlock">
        {/* an unordered list that maps the state array that contains API data, currently is going through the array and printing the thumbnail and upvotes */}
        <ul className = "listPost">
          { this.state.posts.map(post => <li className = "listElements"> 
          {/* upvote function   */}
          <input type="image" src="https://www.pngitem.com/pimgs/m/71-715538_reddit-arrow-transparent-background-reddit-upvote-icon-hd.png" alt = "upvote" name="saveForm" className ="upVote"  width = "30px" onClick = { () => {this.upVoteFunction(post.data)} } />
          <div className = "test">
           {post.data.ups}
          </div>
          {/* downvote function  */}
          <input type="image" src="https://metro.co.uk/wp-content/uploads/2014/12/downvote_1551690908.png" name="saveForm" alt = "downvote" className ="downVote"  width = "30px" onClick = { () => {this.downVoteFunction(post.data)} }/>
          {/* calls the thumbail in addition to the rhs class component which contains the title, comments etc. Passign post.data as props */}
          <img src = {post.data.thumbnail} alt= "thumbnail" ></img> <RightHandSide props = {post.data} /> <hr></hr></li> )}
            
        </ul>
        </div>


      );

  }

}

export default App;
