import React, { Component } from 'react';
import shortid from 'shortid';

class InputForm extends Component {
  state = {
    name: '',
    phone: '',
    experience: 'junior',
    licence: false,
  };

  nameInput = shortid.generate();
  phoneInput = shortid.generate();

  hadleInputChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.resetInput();
  };

  hendkeLicenceChange = e => {
    this.setState({ licence: e.currentTarget.checked });
  };

  resetInput = () => {
    this.setState({ name: '', phone: '' });
  };

  render() {
    return (
      <form htmlFor={this.nameInput} onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.hadleInputChange}
            id={this.nameInput}
          ></input>
        </label>

        <label htmlFor={this.phoneInput}>
          Phone
          <input
            type="tel"
            name="phone"
            value={this.state.phone}
            onChange={this.hadleInputChange}
            id={this.phoneInput}
          ></input>
        </label>

        <p>Ваш уровень:</p>

        <label>
          Junior
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.hadleInputChange}
            checked={this.state.experience === 'junior'}
          ></input>
        </label>
        <label>
          Middle
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.hadleInputChange}
            checked={this.state.experience === 'middle'}
          ></input>
        </label>
        <label>
          Senior
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.hadleInputChange}
            checked={this.state.experience === 'senior'}
          ></input>
        </label>

        <label>
          Принимаю условие соглашения
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.hendkeLicenceChange}
          ></input>
        </label>

        <button type="submit" disabled={!this.state.licence}>
          Поправить
        </button>
      </form>
    );
  }
}

export default InputForm;
