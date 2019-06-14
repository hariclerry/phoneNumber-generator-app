import React, { Fragment } from 'react';

const Header = ({ min, max, total, phoneNumbers }) => (
  <header style={{backgroundColor: '#3385ff'}}>
    {phoneNumbers.length > 0 && (
      <Fragment>
      <p className='title'>Phone Number Statistics</p>

        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Minimum Phone number</h5>
                <p className="btn btn-primary">
                {`0${min}`}
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Maximum Phone number</h5>
                
                <p className="btn btn-primary">
                {`0${max}`}
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Total Phone numbers</h5>
                <p className="btn btn-primary">
                {total}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )}
  </header>
);
export default Header;
