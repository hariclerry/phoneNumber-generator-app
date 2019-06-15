import React from 'react';
// import PropTypes from 'prop-types';

const NumberInput = ({ onClick, onChange }) => (
  <div>
  <h3 style={{margin: '20px'}}>Enter amount of number to generate </h3>
    <form className="form-inline">
      <div className="form-group mx-sm-3 mb-2">
        <label htmlFor="input" className="sr-only">
          Enter Number
        </label>
        <input
          type="number"
          className="form-control"
          id="number"
          placeholder="Enter number"
          onChange={onChange}
        />
      </div>
      <button type="submit" className="btn btn-primary mb-2" onClick={onClick}>
        Generate
      </button>
    </form>
  </div>
);
export default NumberInput;
