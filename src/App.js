import { lazy, Suspense } from 'react';
import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
// import Section from './components/Section/Section';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import Filter from './components/Filter';
import ContentModal from './components/Modal/ContentModal';
import Button from './components/Modal/Button';
import IconButton from './components/IconButton';
import { ReactComponent as AddIcon } from './components/icon/add.svg';
// import { ReactComponent as DeleteIcon } from './components/icon/delete.svg';
import paintings from './components/Painting/paintings.json';
import colorPiker from './components/ColorPicker/colorPicker.json';
import user from './components/HomeWork-1/Profile/user.json';
import statisticalData from './components/HomeWork-1/Statistics/statistical-data.json';
import friends from './components/HomeWork-1/FriendList/friends.json';
import transactions from './components/HomeWork-1/TransactionHistory/transactions.json';
import Loader from './components/Loader';

// Линивая загрузка

const Heading = lazy(() =>
  import('./components/Heading' /*webpackChunkName: "heading"*/),
);
const PaintingList = lazy(() =>
  import(
    './components/Painting/PaintingList' /*webpackChunkName: "painting-list"*/
  ),
);
const Phonebook = lazy(() =>
  import('./components/HomeWork-2/Phonebook' /*webpackChunkName: "phonebook"*/),
);
const Feedback = lazy(() =>
  import('./components/HomeWork-2/Feedback' /*webpackChunkName: "feedback"*/),
);
const ColorPicker = lazy(() =>
  import('./components/ColorPicker' /*webpackChunkName: "color-picker"*/),
);
const Alert = lazy(() =>
  import('./components/Alert/Alert' /*webpackChunkName: "alert"*/),
);
const Counter = lazy(() =>
  import('./components/Counter' /*webpackChunkName: "counter"*/),
);
const Dropdown = lazy(() =>
  import('./components/Dropdown' /*webpackChunkName: "dropdown"*/),
);
const InputForm = lazy(() =>
  import('./components/FormInput' /*webpackChunkName: "form-input"*/),
);
const Modal = lazy(() =>
  import('./components/Modal' /*webpackChunkName: "modal"*/),
);
const Clock = lazy(() =>
  import('./components/Clock/Clock' /*webpackChunkName: "clock"*/),
);
const Api = lazy(() => import('./Api' /*webpackChunkName: "api"*/));
const SectionDiv = lazy(() =>
  import(
    './components/Container/SectionDiv' /*webpackChunkName: "section-div"*/
  ),
);
const TodoList = lazy(() =>
  import('./components/TodoList' /*webpackChunkName: "todo-list"*/),
);
const TodoTotal = lazy(() =>
  import('./components/TodoList/TodoTotal' /*webpackChunkName: "todo-total"*/),
);
const TodoEdition = lazy(() =>
  import('./components/TodoEdition' /*webpackChunkName: "todo-edition"*/),
);
const Section = lazy(() =>
  import('./components/Section/Section' /*webpackChunkName: "section"*/),
);
const HomeWorkPages2 = lazy(() =>
  import(
    './components/HomeWork-2/HomeWorkPages2' /*webpackChunkName: "homeWork-pages2"*/
  ),
);
const HomeWorkPages = lazy(() =>
  import(
    './components/HomeWork-1/HomeWorkPages/HomeWorkPages' /*webpackChunkName: "homeWork-pages1"*/
  ),
);
const Profile = lazy(() =>
  import(
    './components/HomeWork-1/Profile/Profile' /*webpackChunkName: "profile"*/
  ),
);
const Statistics = lazy(() =>
  import(
    './components/HomeWork-1/Statistics/Statistics' /*webpackChunkName: "statistics"*/
  ),
);
const FriendList = lazy(() =>
  import(
    './components/HomeWork-1/FriendList/FriendList' /*webpackChunkName: "friendList"*/
  ),
);
const TransactionHistory = lazy(() =>
  import(
    './components/HomeWork-1/TransactionHistory/TransactionHistory' /*webpackChunkName: "transaction-history"*/
  ),
);

export default function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const formSubmitHedler = data => {
    setTimeout(() => {
      console.log(data);
    }, 1000);
  };

  return (
    <>
      <Container>
        <AppBar />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/create-react-app" exact>
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
                <TodoTotal />

                <Filter />

                <TodoList />

                <Button onClick={toggleModal} text="Open Modal" />
                {showModal && (
                  <Modal onClose={toggleModal}>
                    <ContentModal onClick={toggleModal} />
                    <TodoEdition onSave={toggleModal} />
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
