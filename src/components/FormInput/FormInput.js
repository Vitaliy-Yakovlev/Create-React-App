import { useState } from 'react';
import shortid from 'shortid';
import s from './FormInput.module.css';

export default function InputForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [experience, setExperience] = useState('junior');
  const [licence, setLicence] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({ name, phone, experience, licence });

    resetInput();
  };

  const resetInput = () => {
    setName('');
    setPhone('');
    setExperience('junior');
    setLicence(false);
  };

  const handleLicenseChange = e => {
    setLicence(!licence);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      case 'experience':
        setExperience(value);
        break;

      case 'licence':
        setLicence(true);
        break;

      default:
        return;
    }
  };

  const nameInput = shortid.generate();
  const phoneInput = shortid.generate();

  return (
    <form className={s.form} htmlFor={nameInput} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          name="name"
          type="text"
          value={name}
          onChange={handleInputChange}
          id={nameInput}
        ></input>
      </label>

      <label className={s.label} htmlFor={phoneInput}>
        Phone
        <input
          className={s.input}
          type="tel"
          name="phone"
          value={phone}
          onChange={handleInputChange}
          id={phoneInput}
        ></input>
      </label>

      <p>Ваш уровень:</p>

      <label className={s.label}>
        Junior
        <input
          type="radio"
          name="experience"
          value="junior"
          onChange={handleInputChange}
          checked={experience === 'junior'}
        ></input>
      </label>

      <label>
        Middle
        <input
          type="radio"
          name="experience"
          value="middle"
          onChange={handleInputChange}
          checked={experience === 'middle'}
        ></input>
      </label>

      <label>
        Senior
        <input
          type="radio"
          name="experience"
          value="senior"
          onChange={handleInputChange}
          checked={experience === 'senior'}
        ></input>
      </label>

      <label>
        Принимаю условие соглашения
        <input
          type="checkbox"
          name="licence"
          checked={licence}
          onChange={handleLicenseChange}
        ></input>
      </label>

      <button className={s.btn} type="submit" disabled={!licence}>
        Отправить
      </button>
    </form>
  );
}

// class InputForm extends Component {
//   state = {
//     name: '',
//     phone: '',
//     experience: 'junior',
//     licence: false,
//   };

//   nameInput = shortid.generate();
//   phoneInput = shortid.generate();

//   handleInputChange = e => {
//     const { name, value } = e.currentTarget;

//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onSubmit(this.state);

//     this.resetInput();
//   };

//   handleLicenceChange = e => {
//     this.setState({ licence: e.currentTarget.checked });
//   };

//   resetInput = () => {
//     this.setState({ name: '', phone: '' });
//   };

//   render() {
//     return (
//       <form
//         className={s.form}
//         htmlFor={this.nameInput}
//         onSubmit={this.handleSubmit}
//       >
//         <label className={s.label}>
//           Name
//           <input
//             className={s.input}
//             name="name"
//             type="text"
//             value={this.state.name}
//             onChange={this.handleInputChange}
//             id={this.nameInput}
//           ></input>
//         </label>

//         <label className={s.label} htmlFor={this.phoneInput}>
//           Phone
//           <input
//             className={s.input}
//             type="tel"
//             name="phone"
//             value={this.state.phone}
//             onChange={this.handleInputChange}
//             id={this.phoneInput}
//           ></input>
//         </label>

//         <p>Ваш уровень:</p>

//         <label className={s.label}>
//           Junior
//           <input
//             type="radio"
//             name="experience"
//             value="junior"
//             onChange={this.handleInputChange}
//             checked={this.state.experience === 'junior'}
//           ></input>
//         </label>
//         <label>
//           Middle
//           <input
//             type="radio"
//             name="experience"
//             value="middle"
//             onChange={this.handleInputChange}
//             checked={this.state.experience === 'middle'}
//           ></input>
//         </label>
//         <label>
//           Senior
//           <input
//             type="radio"
//             name="experience"
//             value="senior"
//             onChange={this.handleInputChange}
//             checked={this.state.experience === 'senior'}
//           ></input>
//         </label>

//         <label>
//           Принимаю условие соглашения
//           <input
//             type="checkbox"
//             name="licence"
//             checked={this.state.licence}
//             onChange={this.handleLicenceChange}
//           ></input>
//         </label>

//         <button className={s.btn} type="submit" disabled={!this.state.licence}>
//           Отправить
//         </button>
//       </form>
//     );
//   }
// }

// export default InputForm;
