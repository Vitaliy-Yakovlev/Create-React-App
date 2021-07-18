import s from './Container.module.css';

function Comtainer({ children }) {
  return <div className={s.container}>{children}</div>;
}

export default Comtainer;
