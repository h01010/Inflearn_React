import React, {Component} from 'react';


class UpdateContent extends Component{
    constructor(props){
        super(props);
        this.state={
            id:this.props.data.id,
            title : this.props.data.title,
            desc : this.props.data.desc
        }
    }
    inputFormHandler(e){
        this.setState({[e.target.name] : e.target.value});
    }
    render(){
      return (
        <article>
              <h2>Update</h2>
              <form action="/update_process" method="post"
                onSubmit={function(e){
                  e.preventDefault();
                  console.log(e.target.title.value)
                  this.props.onSubmit(
                      this.state.id,
                      this.state.title,
                      this.state.desc
                  );
                }.bind(this)}
              >
                <p><input
                type="text"
                name="title"
                placeholder="title"
                value={this.state.title}
                onChange={this.inputFormHandler.bind(this)}
                ></input></p>
                <p>
                  <textarea
                  name="desc"
                  placeholder="description"
                  value={this.state.desc}
                  onChange={this.inputFormHandler.bind(this)}
                  ></textarea>
                </p>
                <p>
                  <input type="submit"></input>
                </p>
              </form>
        </article>
      );
    }
  }

  export default UpdateContent;