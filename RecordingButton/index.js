import React, { Component, PropTypes } from 'react';
import {
  TouchableOpacity,
  View,
  LayoutAnimation,
} from 'react-native';
import styles from './style';

export default class RecordingButton extends Component {

  static propTypes = {
    isRecording: PropTypes.bool,
    onStartPress: PropTypes.func,
    onStopPress: PropTypes.func,
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
  }

  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  renderRecording() {
    return (
      <TouchableOpacity style={this.props.style} onPress={this.props.onStopPress}
        style={[styles.buttonContainer, styles.buttonStopContainer]}>
        <View style={styles.buttonStop}></View>
      </TouchableOpacity>
    );
  }

  renderWaiting() {
    return (
      <TouchableOpacity onPress={this.props.onStartPress} style={[styles.buttonContainer, this.props.style]}>
        <View style={styles.circleInside}></View>
      </TouchableOpacity>
    );
  }

  render() {
    if (this.props.isRecording) {
      return this.renderRecording();
    }
    return this.renderWaiting();
  }
}
