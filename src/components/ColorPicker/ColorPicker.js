import React, { useState, memo } from 'react';
import styles from './ColorPicker.module.css';

function ColorPicker({ options }) {
  const [activeOptionIndx, setActiveOptionIndx] = useState(0);

  const { label } = options[activeOptionIndx];

  const makeOptionsClassNames = i => {
    const optionClassName = [styles.option, styles.btn];

    if (i === activeOptionIndx) {
      optionClassName.push(styles.active);
    }

    return optionClassName.join(' ');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Color Picker</h2>
      <p className={styles.text}>
        Выбран цвет:{' '}
        <span style={{ color: label, fontSize: 20, fontWeight: 900 }}>
          {label.toUpperCase()}
        </span>
      </p>
      <div>
        {options.map(({ color, label }, i) => (
          <button
            key={label}
            aria-label={label}
            className={makeOptionsClassNames(i)}
            style={{ backgroundColor: color }}
            onClick={() => setActiveOptionIndx(i)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default memo(ColorPicker);

// class ColorPicker extends PureComponent {
//   state = {
//     activeOptionIndx: 0,
//   };

//   // PureComponent =>
//   // shouldComponentUpdate(nextProps, nextState) {
//   //   return nextState.activeOptionIndx !== this.state.activeOptionIndx;
//   // }

//   setActiveIndx = i => {
//     this.setState({
//       activeOptionIndx: i,
//     });
//   };

//   makeOptionsClassNames = i => {
//     const optionClassName = [styles.option];

//     if (i === this.state.activeOptionIndx) {
//       optionClassName.push(styles.active);
//     }

//     return optionClassName.join(' ');
//   };

//   render() {
//     console.log(`Re-render : ${Date.now()}`);

//     const { activeOptionIndx } = this.state;
//     const { options } = this.props;
//     const { label } = options[activeOptionIndx];

//     return (
//       <div className={styles.container}>
//         <h2 className={styles.title}>Color Picker</h2>
//         <p>Выбран цвет: {label}</p>
//         <div>
//           {options.map(({ color }, i) => (
//             <button
//               key={color}
//               className={this.makeOptionsClassNames(i)}
//               style={{ backgroundColor: color }}
//               onClick={() => this.setActiveIndx(i)}
//             ></button>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default ColorPicker;
