import css from './Filter.module.css';
import PropTypes from 'prop-types';
const Filter = ({ onHandleChange }) => {
  return (
    <div className={css.container_filter}>
      <label>Find contacts by Name</label>
      <input
        id="1"
        type="text"
        name="filter"
        required
        onChange={onHandleChange}
      />
    </div>
  );
};
Filter.propTypes = {
  onHandleChange: PropTypes.func.isRequired,
};

export { Filter };
