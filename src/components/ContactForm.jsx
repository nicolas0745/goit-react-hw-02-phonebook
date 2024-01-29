import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
const ContactForm = ({ onHandlesubmit }) => {
  return (
    <form onSubmit={onHandlesubmit} className={css.form}>
      <label htmlFor="1" className={css.label}>
        Name
      </label>
      <input
        id="1"
        type="text"
        name="name"
        pattern="[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]{2,25}[ ]{1}[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]{2,25}"
        title="Name and Lastname Required or a valid fomat"
        required
      />
      <label htmlFor="2" className={css.label}>
        Number
      </label>
      <input
        id="2"
        type="tel"
        name="number"
        pattern="[\(]?[\+]?(\d{2}|\d{3})[\)]?[\s]?((\d{6}|\d{8})|(\d{3}[\*\.\-]){2}\d{3}|(\d{2}[\*\.\-\s]){3}\d{2}|(\d{4}[\*\.\-\s]){1}\d{4})|\d{8}|\d{10}|\d{12}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button>Add contact</button>
    </form>
  );
};
ContactForm.propTypes = {
  onHandlesubmit: PropTypes.func.isRequired,
};
export { ContactForm };
