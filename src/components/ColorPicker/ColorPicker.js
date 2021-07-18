import React, { Component } from 'react';
import styles from './ColorPicker.module.css';

class ColorPicker extends Component {
  state = {
    activOptionIndx: 0,
  };

  setActiveIndx = i => {
    this.setState({
      activOptionIndx: i,
    });
  };

  makeOptionsClassNames = i => {
    const optionClassName = [styles.option];

    if (i === this.state.activOptionIndx) {
      optionClassName.push(styles.active);
    }

    return optionClassName.join(' ');
  };

  render() {
    const { activOptionIndx } = this.state;
    const { options } = this.props;
    const { label } = options[activOptionIndx];

    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Color Picker</h2>
        <p>Выбран цвет: {label}</p>
        <div>
          {options.map(({ color }, i) => (
            <button
              key={color}
              className={this.makeOptionsClassNames(i)}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIndx(i)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
