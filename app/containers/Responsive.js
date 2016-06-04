import React from 'react';
import {connect} from 'react-redux';


const Responsive = React.createClass({
  propTypes: {
    width: React.PropTypes.number.isRequired,
    isSmall: React.PropTypes.bool.isRequired
  },


  getInitialState() {
    return {
      isOpened: !this.props.isSmall
    }
  },


  componentWillReceiveProps({isSmall}) {
    this.setState({isOpened: !isSmall})
  },


  onToggle() {
    this.setState({isOpened: !this.state.isOpened});
  },


  render() {
    const {width, isSmall} = this.props;
    const {isOpened} = this.state;

    return (
      <div className="intro">
        <button onClick={this.onToggle}>{isOpened ? 'Close' : 'Open'}</button>
        <div style={{width: isOpened ? width : 0}} className="responsive">
          <div className="content">
            Should be<br />
            <b>hidden on small</b><br />
            screens
          </div>
        </div>
        <p>Window width <b>{width}</b></p>
        <p>Small screen <b>{JSON.stringify(isSmall)}</b></p>
      </div>
    );
  }
});


const mapStateToProps = ({windowSize: {width, isSmall}}) => ({
  width,
  isSmall
});

export default connect(mapStateToProps)(Responsive);
