import React from 'react';


const Frame = React.createClass({
  getInitialState() {
    return {
      isSmall: true,
      reload: false
    }
  },


  render() {
    const {reload, isSmall} = this.state;

    return (
      <div className="intro">
        <button onClick={() => this.setState({isSmall: true, reload: false})}>Small</button>
        <button onClick={() => this.setState({isSmall: false, reload: false})}>Large</button>
        <button onClick={() => this.setState({isSmall: true, reload: true})}>Small (r)</button>
        <button onClick={() => this.setState({isSmall: false, reload: true})}>Large (r)</button>
        <br />
        <iframe
          src={`/responsive?${reload ? (isSmall ? 's' : 'l' ) : ''}`}
          width={isSmall ? 768 : 1024}
          height={600} />
      </div>
    );
  }
});


export default Frame;
