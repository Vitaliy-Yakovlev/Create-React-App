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

import paintings from './components/Painting/paintings.json';
import colorPiker from './components/ColorPicker/colorPicker.json';
//Class Work========================================================================================

//Home Work #1======================================================================================
import Profile from './components/HomeWork-1/Profile/Profile';
import Statistics from './components/HomeWork-1/Statistics/Statistics';
import FriendList from './components/HomeWork-1/FriendList/FriendList';
import TransactionHistory from './components/HomeWork-1/TransactionHistory/TransactionHistory';
import HomeWorkPages from './components/HomeWork-1/HomeWorkPages/HomeWorkPages';
//Home Work #2.1======================================================================================
import HomeWorkPages2 from './components/HomeWork-2/HomeWorkPages2';
import Feedback from './components/HomeWork-2/Feedback';

import user from './components/HomeWork-1/Profile/user.json';
import statisticalData from './components/HomeWork-1/Statistics/statistical-data.json';
import friends from './components/HomeWork-1/FriendList/friends.json';
import transactions from './components/HomeWork-1/TransactionHistory/transactions.json';
//Home Work #1======================================================================================

class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Выучить основы React', completed: false },
      { id: 'id-2', text: 'Зазобрвтся React Router', completed: false },
      { id: 'id-3', text: 'Пережить Redux', completed: false },
    ],

    filter: '',
  };

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
          <TodoTotal total={totalTodos} learned={complatedTotal} />
          <TodoList
            todos={visibleTodos}
            onDeletTodo={this.deletTodo}
            onToggleCompleted={this.toggleCompleted}
          />
          {/* 3 */}
          <Filter value={filter} onChenge={this.chengeFilter} />
          <InputForm onSubmit={this.formSubmitHedler} />
          <TodoEditior onSubmit={this.addTodo} />

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
