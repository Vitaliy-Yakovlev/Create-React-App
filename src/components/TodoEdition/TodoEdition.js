import { useState } from 'react';
import s from './TodoEdition.module.css';

export default function TodoEdition({ onSubmit }) {
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setMessage(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(message);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Добавить к списку
        <input
          className={s.input}
          value={message}
          onChange={handleChange}
        ></input>
      </label>

      <button type="submit" className={s.btn}>
        Сохранить
      </button>
    </form>
  );
}

// class TodoEdition extends Component {
//   state = {
//     message: '',
//     showModal: false,
//   };

//   handleChange = e => {
//     this.setState({ message: e.currentTarget.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onSubmit(this.state.message);

//     this.setState({ message: '' });
//   };

//   handleModal() {
//     this.props.toggleModal();
//   }

//   // reset = () => {
//   //   this.setState({ message: '' });
//   // };

//   render() {
//     return (
//       <form className={s.form} onSubmit={this.handleSubmit}>
//         <label className={s.label}>
//           Добавить к списку
//           <input
//             className={s.input}
//             value={this.state.message}
//             onChange={this.handleChende}
//           ></input>
//         </label>

//         <button type="submit" className={s.btn}>
//           Сохранить
//         </button>
//       </form>
//     );
//   }
// }

// export default TodoEdition;
