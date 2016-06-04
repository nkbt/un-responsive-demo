import React from 'react';
import {connect} from 'react-redux';
import {Motion} from 'react-motion';
import {responsive} from '../lib/responsive';


const Responsive = React.createClass({
  propTypes: {
    spring: React.PropTypes.func.isRequired,
    width: React.PropTypes.number.isRequired,
    isSmall: React.PropTypes.bool.isRequired
  },


  getInitialState() {
    return {
      isOpened: false
    }
  },


  componentWillReceiveProps({isSmall}) {
    this.setState({isOpened: !isSmall})
  },


  onToggle() {
    this.setState({isOpened: !this.state.isOpened});
  },


  render() {
    const {width, isSmall, spring} = this.props;
    const {isOpened} = this.state;

    return (
      <div className="intro">
        <button onClick={this.onToggle}>{isOpened ? 'Close' : 'Open'}</button>
        <Motion style={{width: spring(isOpened ? width : 0)}}>
          {style => (
            <div style={style} className="responsive">
              <div className="content">
                Should be<br />
                <b>hidden on small</b><br />
                screens
              </div>
            </div>
          )}
        </Motion>
        <p>Window width <b>{width}</b></p>
        <p>Small screen <b>{JSON.stringify(isSmall)}</b></p>
      </div>
    );
  }
});


const mapWindowSizeToProps = ({width, isSmall}) => ({
  width,
  isSmall
});

export default responsive(mapWindowSizeToProps)(Responsive);
