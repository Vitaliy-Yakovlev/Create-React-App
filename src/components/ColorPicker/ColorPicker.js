import React, { PureComponent } from 'react';

import styles from './ColorPicker.module.css';

class ColorPicker extends PureComponent {
  state = {
    activOptionIndx: 0,
  };

  // PureComponent =>
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.activOptionIndx !== this.state.activOptionIndx;
  // }

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
    console.log(`Re-render : ${Date.now()}`);

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
