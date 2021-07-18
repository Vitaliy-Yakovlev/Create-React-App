import React, { Component } from 'react';
import Controls from './Controls';
import s from './Counter.module.css';

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    //
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrуment = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  hadleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    const { value } = this.state;

    return (
      <div className={s.counter}>
        <span className={s.value}>{value}</span>

        <Controls
          onIncriment={this.handleIncrуment}
          onDecrement={this.hadleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
