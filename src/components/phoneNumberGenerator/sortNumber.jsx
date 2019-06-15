import React, {Fragment }from 'react';


const NumberSort = ({ phoneNumbers, onChange}) => (
    <Fragment>
{
  phoneNumbers.length > 0 &&
      <div className="input-group mb-3" style={{width: '300px'}}>
  <div className="input-group-prepend">
    <label className="input-group-text" for="inputGroupSelect01">SortBy...</label>
  </div>
  <select className="custom-select" id="inputGroupSelect01" onChange={onChange}>
    <option value="asc">Ascending</option>
    <option value="desc">Descending</option>
  </select>
</div>
}
    </Fragment>

);
export default NumberSort;