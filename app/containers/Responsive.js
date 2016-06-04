import React from 'react';
import {connect} from 'react-redux';
import {Motion, spring} from 'react-motion';


const Responsive = React.createClass({
  propTypes: {
    isInitial: React.PropTypes.bool.isRequired,
    width: React.PropTypes.number.isRequired,
    isSmall: React.PropTypes.bool.isRequired
  },


  getInitialState() {
    return {
      isOpened: this.props.isInitial ? false : !this.props.isSmall
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


const mapStateToProps = ({windowSize: {isInitial, width, isSmall}}) => ({
  isInitial,
  width,
  isSmall
});

export default connect(mapStateToProps)(Responsive);
