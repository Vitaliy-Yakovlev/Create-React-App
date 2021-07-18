import s from './HomeWorkPages2.module.css';

function HomeWorkPages2({ children }) {
  return (
    <div className={s.container}>
      <h2 className={s.title}>React. Home Wort - 2 Feedback</h2>
      {children}
    </div>
  );
}

export default HomeWorkPages2;
