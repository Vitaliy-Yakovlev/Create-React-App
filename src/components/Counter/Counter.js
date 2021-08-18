import { useEffect } from 'react';
import Controls from './Controls';
import { connect } from 'react-redux';
import * as actions from '../../redux/counter/counter-actions';
import s from './Counter.module.css';

function Counter({ value, step, onIncrement, onDecrement }) {
  // const [initialValue, setInitialValue] = useState(0);

  // const handleIncrement = () => {
  //   setInitialValue(state => state + 1);
  // };

  // const handleDecrement = () => {
  //   setInitialValue(state => state - 1);
  // };

  useEffect(() => {
    document.title = `HomeWork:${value}`;
  }, [value]);

  return (
    <div className={s.counter}>
      <span className={s.value}>({value})</span>

      <Controls
        step={step}
        onIncrement={() => onIncrement(step)}
        onDecrement={() => onDecrement(step)}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    value: state.counter.value,
    step: state.counter.step,
  };
};

const mapDispatchToPro = dispatch => {
  return {
    onIncrement: value => dispatch(actions.increment(value)),
    onDecrement: value => dispatch(actions.decrement(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToPro)(Counter);

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
