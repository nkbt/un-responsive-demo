import React from 'react';
import {connect} from 'react-redux';
import {spring} from 'react-motion';
import {shouldComponentUpdate} from 'react-addons-pure-render-mixin';


const identity = x => x;
const maybeSpring = skipAnimation => skipAnimation ? identity : spring;


export const Wrapper = React.createClass({
  propTypes: {
    WrappedComponent: React.PropTypes.func.isRequired,
    mapWindowSizeToProps: React.PropTypes.func.isRequired,
    mapSpringToProps: React.PropTypes.func,
    windowSize: React.PropTypes.object.isRequired
  },

  getDefaultProps() {
    return {
      mapSpringToProps: spring => ({spring})
    };
  },


  getInitialState() {
    return {
      skipAnimation: this.props.windowSize.isInitial
    };
  },


  shouldComponentUpdate,


  componentDidUpdate(oldProps) {
    if (oldProps.windowSize.isInitial && !this.props.windowSize.isInitial) {
      // We do want to update component to re-render it again
      this.setState({ // eslint-disable-line react/no-did-update-set-state
        skipAnimation: false
      });
    }
  },


  render() {
    const {
      WrappedComponent,
      windowSize,
      mapWindowSizeToProps,
      mapSpringToProps,
      ...props
    } = this.props;
    const {skipAnimation} = this.state;


    return React.createElement(WrappedComponent, {
      ...mapWindowSizeToProps(windowSize, props),
      ...mapSpringToProps(maybeSpring(skipAnimation), props),
      ...props
    });
  }
});


const getDisplayName = WrappedComponent => (
  WrappedComponent.displayName || WrappedComponent.name || 'Component'
);


export const responsive = (mapWindowSizeToProps, mapSpringToProps) => {
  const mapStateToProps = ({windowSize}) => ({windowSize});
  const Connected = connect(mapStateToProps)(Wrapper);

  return WrappedComponent => React.createClass({
    displayName: `Responsive(${getDisplayName(WrappedComponent)})`,
    render() {
      return React.createElement(Connected, {
        WrappedComponent,
        mapWindowSizeToProps,
        mapSpringToProps,
        ...this.props
      });
    }
  });
};
