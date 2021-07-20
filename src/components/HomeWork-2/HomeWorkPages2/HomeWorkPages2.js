import s from './HomeWorkPages2.module.css';

function HomeWorkPages2({ children }) {
  return (
    <div className={s.container}>
      <h1 className={s.title}>React. Home Wort 2.1 - Feedback</h1>
      {children}
    </div>
  );
}

export default HomeWorkPages2;
