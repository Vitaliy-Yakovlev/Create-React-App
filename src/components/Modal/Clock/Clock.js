import React, { Component } from 'react';
import s from './Clock.module.css';

export default class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  intervalId = null;

  componentDidMount() {
    console.log('setInterval');

    this.intervalId = setInterval(() =>
      this.setState({ time: new Date().toLocaleTimeString() }),
    );
  }

  componentWillUnmount() {
    clearImmediate(this.intervalId);
  }

  render() {
    return <div className={s.face}>{this.state.time}</div>;
  }
}
