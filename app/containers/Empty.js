import React from 'react';


const Empty = React.createClass({
  render() {
    return (
      <div className="empty">
        Hello, World!
        <br />
        <a href="/frame">Show me something</a>
      </div>
    );
  }
});


export default Empty;
