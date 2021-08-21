import Loader from 'react-loader-spinner';
import s from './Loader.module.css';

const Spinner = () => (
  <Loader
    type="Bars"
    color="rgb(104, 204, 153)"
    height={100}
    width={100}
    timeout={1000}
    className={s.spinnerStyle}
  />
);

export default Spinner;
