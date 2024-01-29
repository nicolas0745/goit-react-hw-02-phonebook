import css from './ContactList.module.css';
import PropTypes from 'prop-types';
const ContactList = ({ list, onHandleClick }) => {
  return (
    <ul className={css.list}>
      {list.map(e => (
        <li key={e.id}>
          <p>
            {e.name}: {e.number}
          </p>
          <button id={e.id} onClick={onHandleClick}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  list: PropTypes.array.isRequired,
  onHandleClick: PropTypes.func.isRequired,
};

export { ContactList };
