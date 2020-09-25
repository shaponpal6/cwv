import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';
import './form.css';

const Form = ({ dispatch }) => {
  let input;

  return (
    <div className='inputForm'>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        <input ref={(node) => (input = node)} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

Form.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Form);
