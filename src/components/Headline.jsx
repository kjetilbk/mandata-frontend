import React, {Component} from 'react';

class Headline extends Component {
  render(){
    return (
      <h3 ref={element => this.headline = element}>{this.props.text}</h3>
    )
  }
}

export default Headline;
