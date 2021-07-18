import s from './HomeWorkPages.module.css';

function HomeWorkPages({ children }) {
  return (
    <div className={s.container}>
      <h2 className={s.title}>React. Home Wort - 1 Components</h2>
      {children}
    </div>
  );
}

export default HomeWorkPages;
