import React, {Component} from 'react';

class TestDP extends Component{
    static defaultProps={
        dp: 'This is DefaultPropsText'
    }
    render(){
      return (
        <article>
              <h2>{this.props.dp}</h2>
        </article>
      );
    }
  }


  export default TestDP;