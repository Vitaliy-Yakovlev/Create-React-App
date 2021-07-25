import { useState, useEffect } from 'react';
import Controls from './Controls';
import s from './Counter.module.css';

export default function Counter() {
  const [initialValue, setInitialValue] = useState(0);

  const handleIncrement = () => {
    setInitialValue(state => state + 1);
  };

  const handleDecrement = () => {
    setInitialValue(state => state - 1);
  };

  useEffect(() => {
    document.title = `HomeWork:${initialValue}`;
  }, [initialValue]);

  return (
    <div className={s.counter}>
      <span className={s.value}>{initialValue}</span>

      <Controls onIncrement={handleIncrement} onDecrement={handleDecrement} />
    </div>
  );
}

// class Counter extends Component {
//   static defaultProps = {
//     initialValue: 0,
//   };

//   static propTypes = {
//     //
//   };

//   state = {
//     value: this.props.initialValue,
//   };

//   handleIncrуment = () => {
//     this.setState(prevState => ({
//       value: prevState.value + 1,
//     }));
//   };

//   hadleDecrement = () => {
//     this.setState(prevState => ({
//       value: prevState.value - 1,
//     }));
//   };

//   render() {
//     const { value } = this.state;

//     return (
//       <div className={s.counter}>
//         <span className={s.value}>{value}</span>

//         <Controls
//           onIncriment={this.handleIncrуment}
//           onDecrement={this.hadleDecrement}
//         />
//       </div>
//     );
//   }
// }

// export default Counter;
