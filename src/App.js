import React, {Component} from 'react';
import './App.css';
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import Content from "./components/Content";
import TestDP from "./components/TestDP";



class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      subject : {title:'WEB', sub:'World Wide Web!'},
      contents : [
        {id:1, title:'HTML', des:'HTML is for information'},
        {id:2, title:'CSS', des:'CSS is for design'},
        {id:3, title:'JavaScript', des:'JavaScript is for interactive'}
      ]
    }
  }
  render(){
    return (
      <div className="App">
        <Subject title={this.state.subject.title} 
        sub={this.state.subject.sub} ></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content></Content>
        <TestDP></TestDP>
      </div>
    );
  }
}

export default App;
