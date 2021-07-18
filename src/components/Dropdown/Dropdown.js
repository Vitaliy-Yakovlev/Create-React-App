import React, { Component } from 'react';
import s from './Dropdown.module.css';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  //   show = () => {
  //     this.setState({
  //       visible: true,
  //     });
  //   };

  //   hide = () => {
  //     this.setState({
  //       visible: false,
  //     });
  //   };

  render() {
    const { visible } = this.state;

    return (
      <div className={s.dropdown}>
        <button type="button" onClick={this.toggle} className={s.btn}>
          {visible ? 'Скрыть' : 'Паказать'}
        </button>

        {/* <button type="button" onClick={this.hide} className={s.toggle}>
          Скрыть
        </button> */}

        {visible && <div className={s.menu}>Выпадаюшее меню</div>}
      </div>
    );
  }
}

export default Dropdown;
