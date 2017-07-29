import React, {Component} from 'react';

class Tooltip extends Component {
  componentWillMount(){
    this.props.updateDateLabel(this.props.contentTooltip.title);
  }
  render() {
    return (
      <div></div>
    )
  }
}
export default Tooltip;
