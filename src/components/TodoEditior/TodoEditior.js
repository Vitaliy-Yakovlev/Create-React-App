import React, { Component } from 'react';
import s from './TodoEditior.module.css';

class TodoEditor extends Component {
  state = {
    message: '',
  };

  handleChende = e => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.message);

    this.setState({ message: '' });
  };

  // reset = () => {
  //   this.setState({ message: '' });
  // };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          value={this.state.message}
          onChange={this.handleChende}
        ></textarea>

        <button type="submit" className={s.btn}>
          Сохранить
        </button>
      </form>
    );
  }
}

export default TodoEditor;
