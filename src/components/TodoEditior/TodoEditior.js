import React, { Component } from 'react';
import s from './TodoEditior.module.css';

class TodoEditor extends Component {
  state = {
    message: '',
    showModal: false,
  };

  handleChende = e => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.message);

    this.setState({ message: '' });
  };

  handleModal() {
    this.props.toggleModal();
  }

  // reset = () => {
  //   this.setState({ message: '' });
  // };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label}>
          Добавить к списку
          <input
            className={s.input}
            value={this.state.message}
            onChange={this.handleChende}
          ></input>
        </label>

        <button type="submit" className={s.btn}>
          Сохранить
        </button>
      </form>
    );
  }
}

export default TodoEditor;
