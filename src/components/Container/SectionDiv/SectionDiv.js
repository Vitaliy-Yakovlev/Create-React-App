import s from './SectionDiv.module.css';

function SectionDiv({ children }) {
  return <div className={s.section}>{children}</div>;
}

export default SectionDiv;
