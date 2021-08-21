//Class Work========================================================================================
import { lazy, Suspense } from 'react';
import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import PaintingList from './components/Painting/PaintingList';
import Section from './components/Section/Section';
import ColorPicker from './components/ColorPicker';
import Alert from './components/Alert/Alert';
import Container from './components/Container/Container';
import SectionDiv from './components/Container/SectionDiv';
import AppBar from './components/AppBar/AppBar';
//2
import Counter from './components/Counter';
import Dropdown from './components/Dropdown';
import TodoList from './components/TodoList';
import TodoTotal from './components/TodoList/TodoTotal';
//3
import InputForm from './components/FormInput';
import TodoEdition from './components/TodoEdition';
import shortid from 'shortid';
import Filter from './components/Filter';

//4
import Modal from './components/Modal';
import ContentModal from './components/Modal/ContentModal';
import Button from './components/Modal/Button';
import Clock from './components/Clock/Clock';
import IconButton from './components/IconButton';
import { ReactComponent as AddIcon } from './components/icon/add.svg';
//5
import Api from './Api';

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
import todosArray from './components/TodoList/todos.json';
//Home Work #1======================================================================================

//Home Work #2.1======================================================================================
import HomeWorkPages2 from './components/HomeWork-2/HomeWorkPages2';
import Feedback from './components/HomeWork-2/Feedback';
//Home Work #2.1======================================================================================
import Phonebook from './components/HomeWork-2/Phonebook';
//Home Work #2.2======================================================================================
import Heading from './components/Heading';
import Loader from './components/Loader';
import useLocalStorage from './components/Hooks/useLocalStorage';
//Home Work #2.2======================================================================================

export default function App() {
  const [todos, setTodos] = useLocalStorage('todo', todosArray);
  const [filter, setFilter] = useState('');
  const [showModal, setShowModal] = useState(false);

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    setTodos([todo, ...todos]);

    toggleModal();
  };

  const deleteTodo = todoId => {
    setTodos(prevState => prevState.filter(todo => todo.id !== todoId));
  };

  const toggleCompleted = todoId => {
    setTodos(
      todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const formSubmitHedler = data => {
    setTimeout(() => {
      console.log(data);
    }, 1000);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const totalTodos = todos.length;

  const completedTotal = todos.reduce((total, todo) => {
    return todo.completed ? total + 1 : total;
  }, 0);

  const normalizedFilter = filter.toLowerCase();

  const visibleTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(normalizedFilter),
  );

  return (
    <>
      <Container>
        <AppBar />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/" exact>
              <Heading text={'Выбери раздел'} />
            </Route>

            <Route path="/painting">
              <Heading text={'Painting List'} />
              <Section title="Топ недели">
                <PaintingList items={paintings} />
              </Section>
              <Section title="Good" />
            </Route>

            <Route path="/color_picker">
              <Heading text={'Color Picker'} />
              <ColorPicker options={colorPiker} />
            </Route>

            <Route path="/alert">
              <Heading text={'Alert'} />
              <SectionDiv>
                <Alert text="Все пропало!!" type="success" />
                <Alert text="Все пропало!!" type="warning" />
                <Alert text="Все пропало!!" type="error" />
              </SectionDiv>
            </Route>

            <Route path="/counter">
              <Heading text={'Counter'} />
              <Counter initialValue={10} />
            </Route>

            <Route path="/dropdown">
              <Heading text={'Dropdown'} />
              <Dropdown />
            </Route>

            <Route path="/todos">
              <Heading text={'Todos'} />
              <SectionDiv>
                <IconButton onClick={toggleModal} aria-label="Добавить todo">
                  <AddIcon width="40px" hanging="40px" fill="#fff" />
                </IconButton>
                <TodoTotal total={totalTodos} learned={completedTotal} />

                <Filter value={filter} onChange={changeFilter} />

                <TodoList
                  todos={visibleTodos}
                  onDeleteTodo={deleteTodo}
                  onToggleCompleted={toggleCompleted}
                />

                <Button onClick={toggleModal} text="Open Modal" />
                {showModal && (
                  <Modal onClose={toggleModal}>
                    <ContentModal onClick={toggleModal} />
                    <TodoEdition onSubmit={addTodo} />
                  </Modal>
                )}
              </SectionDiv>
            </Route>

            <Route path="/form_input">
              <Heading text={'Input Form'} />
              <SectionDiv>
                <InputForm onSubmit={formSubmitHedler} />
              </SectionDiv>
            </Route>

            <Route path="/time">
              <Heading text={'Time'} />
              <SectionDiv>
                <Clock />
              </SectionDiv>
            </Route>

            <Route path="/pokemon">
              <Heading text={'Pokemon'} />
              <SectionDiv>
                <Api />
              </SectionDiv>
            </Route>

            <Route path="/home_work_1">
              <Heading text={'HomeWork Pages 1'} />
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
            </Route>

            <Route path="/home_work_2">
              <Heading text={'HomeWork Pages 2'} />
              <HomeWorkPages2>
                <Feedback />
                <Phonebook />
              </HomeWorkPages2>
            </Route>

            <Route>
              <h2>404 Страница не найдена! Введите правильный запрос!</h2>
            </Route>
          </Switch>
        </Suspense>
      </Container>
    </>
  );
}
