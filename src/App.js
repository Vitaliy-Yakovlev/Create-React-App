//Class Work========================================================================================
import React, { Component } from 'react';
import PaintingList from './components/Painting/PaintingList';
import Section from './components/Section/Section';
import ColorPicker from './components/ColorPicker';
import Alert from './components/Alert/Alert';
import Comtainer from './components/Container/Container';

//2
import Counter from './components/Counter';
import Dropdown from './components/Dropdown';
import TodoList from './components/TodoList';
import TodoTotal from './components/TodoList/TodoTotal';
//3
import InputForm from './components/FormInput';
import TodoEditior from './components/TodoEditior';
import shortid from 'shortid';
import Filter from './components/Filter';
//4
import Modal from './components/Modal';
import ContentModal from './components/Modal/ContentModal';
import Button from './components/Modal/Button';
import Clock from './components/Modal/Clock';
import IconButton from './components/IconButton';
import { ReactComponent as AddIcon } from './components/icon/add.svg';

// import { ReactComponent as DeleteIcon } from './components/icon/delete.svg';

import paintings from './components/Painting/paintings.json';
import colorPiker from './components/ColorPicker/colorPicker.json';
//Class Work========================================================================================

//Home Work #1======================================================================================
import Profile from './components/HomeWork-1/Profile/Profile';
import Statistics from './components/HomeWork-1/Statistics/Statistics';
import FriendList from './components/HomeWork-1/FriendList/FriendList';
import TransactionHistory from './components/HomeWork-1/TransactionHistory/TransactionHistory';
import HomeWorkPages from './components/HomeWork-1/HomeWorkPages/HomeWorkPages';

import user from './components/HomeWork-1/Profile/user.json';
import statisticalData from './components/HomeWork-1/Statistics/statistical-data.json';
import friends from './components/HomeWork-1/FriendList/friends.json';
import transactions from './components/HomeWork-1/TransactionHistory/transactions.json';
import todos from './components/TodoList/todos.json';
//Home Work #1======================================================================================

//Home Work #2.1======================================================================================
import HomeWorkPages2 from './components/HomeWork-2/HomeWorkPages2';
import Feedback from './components/HomeWork-2/Feedback';
//Home Work #2.1======================================================================================
import Phonebook from './components/HomeWork-2/Phonebook';
//Home Work #2.2======================================================================================

//Home Work #2.2======================================================================================

class App extends Component {
  state = {
    todos: todos,
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    console.log('App componentDidMount');

    const todos = localStorage.getItem('todos');
    const passedTodos = JSON.parse(todos);

    if (passedTodos) {
      this.setState({ todos: passedTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('App componentDidUpdate');

    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;

    if (nextTodos !== prevTodos) {
      console.log('Обновилось поле todos, записываю todos в хранилище');
      localStorage.setItem('todos', JSON.stringify(nextTodos));
    }

    // if (nextTodos.length > prevTodos.length && prevTodos.length !== 0) {
    //   this.toggleModal();
    // }
  }

  chengeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({ todos: [todo, ...todos] }));

    this.toggleModal();
  };

  deletTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  formSubmitHedler = data => {
    setTimeout(() => {
      console.log(data);
    }, 1000);
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { todos, filter } = this.state;
    const totalTodos = todos.length;

    const complatedTotal = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );

    const normalizedFilter = filter.toLowerCase();

    const visibleTodos = todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );

    const { showModal } = this.state;

    return (
      <>
        <Comtainer>
          {/* Class Work ============================================*/}
          <Section title="Топ недели">
            <PaintingList items={paintings} />
          </Section>
          <Section title="Good" />
          <ColorPicker options={colorPiker} />
          <Alert text="Все пропало!!" type="success" />
          <Alert text="Все пропало!!" type="warning" />
          <Alert text="Все пропало!!" type="error" />
          {/* 2 */}
          <Counter initialValue={10} />
          <Dropdown />
          <IconButton onClick={this.toggleModal} aria-label="Добавить todo">
            <AddIcon width="40px" hanging="40px" fill="#fff" />
          </IconButton>
          <TodoTotal total={totalTodos} learned={complatedTotal} />
          {/* 3 */}
          <Filter value={filter} onChenge={this.chengeFilter} />
          {/* 3 */}
          <TodoList
            todos={visibleTodos}
            onDeletTodo={this.deletTodo}
            onToggleCompleted={this.toggleCompleted}
          />
          {/* 3 */}
          <InputForm onSubmit={this.formSubmitHedler} />
          {/* 3 */}
          {/* 4 */}
          <Button onClick={this.toggleModal} text="Open Modal" />
          {showModal && (
            <Modal onClose={this.toggleModal}>
              <ContentModal onClick={this.toggleModal} />
              <TodoEditior onSubmit={this.addTodo} />
            </Modal>
          )}
          <Clock />

          {/* Class Work ============================================*/}
          {/* Home Work-1 ===========================================*/}
          <HomeWorkPages>
            <Profile
              name={user.name}
              tag={user.tag}
              location={user.location}
              avatar={user.avatar}
              stats={user.stats}
            />
            <Statistics title="Upload stats" stats={statisticalData} />
            <Statistics stats={statisticalData} />
            <FriendList friends={friends} />
            <TransactionHistory items={transactions} />
          </HomeWorkPages>
          {/* Home Work-1 ===========================================*/}
          {/* Home Work-2.1 =========================================*/}
          <HomeWorkPages2>
            <Feedback />
            <Phonebook />
          </HomeWorkPages2>
          {/* Home Work-2.1 =========================================*/}
        </Comtainer>
      </>
    );
  }
}

// function App() {
//   return (
//     <>
//       <Comtainer>
//         {/* Class Work ============================================*/}
//         <Section title="Топ недели">
//           <PaintingList items={paintings} />
//         </Section>
//         <Section title="Good" />
//         <ColorPicker options={colorPiker} />
//         <Alert text="Все пропало!!" type="success" />
//         <Alert text="Все пропало!!" type="warning" />
//         <Alert text="Все пропало!!" type="error" />
//         {/* 2 */}
//         <Counter initialValue={10} />
//         <Dropdown />
//         <TodoList />

//         {/* Class Work ============================================*/}

//         {/* Home Work-1 ===========================================*/}
//         <HomeWorkPages>
//           <Profile
//             name={user.name}
//             tag={user.tag}
//             location={user.location}
//             avatar={user.avatar}
//             stats={user.stats}
//           />
//           <Statistics title="Upload stats" stats={statisticalData} />
//           <Statistics stats={statisticalData} />
//           <FriendList friends={friends} />
//           <TransactionHistory items={transactions} />
//         </HomeWorkPages>
//         {/* Home Work-1 ===========================================*/}
//       </Comtainer>
//     </>
//   );
// }

export default App;
