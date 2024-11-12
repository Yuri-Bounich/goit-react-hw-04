import s from './Contact.module.css';

const Contact = ({ name, number }) => {
  return (
    <div className={s.item}>
      <span>{name}</span>
      <span>{number}</span>
    </div>
  );
};

export default Contact;
