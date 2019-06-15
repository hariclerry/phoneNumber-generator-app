import React, { Component, Fragment } from 'react';
import Header from './numberStatistics';
import NumberInput from './numberInput';
import NumberSort from './sortNumber';
import DisplayNumbers from './displayNumbers';
import DownloadPhoneNumbers from './download';
import MainNav from '../commons/nav';
import './main.css';

class Generator extends Component {
  state = {
    phoneNumbers: [],
    limit: 1,
    total: 0,
    sorter: 'asc',
    min: null,
    max: null,
    error: false
  };

  handleGenerateNumber = event => {
    event.preventDefault();
    const { limit } = this.state;
    if (limit > 10000)
      return this.setState({
        error: true,
        message: 'The number entered exceeds the accepted limit'
      });
    let phoneNumbers = [];
    let phoneNumber = 0;
    while (phoneNumber < limit) {
      phoneNumbers.push(
        '0' + Math.floor(Math.random() * 900000000 + 100000000)
      );
      phoneNumber++;
    }
    return this.setState(
      {
        phoneNumbers
      },
      () => this.setStatistics(),
      this.handleNumberSort()
    );
  };

  setStatistics = () => {
    const { phoneNumbers } = this.state;
    if (phoneNumbers.length > 0) {
      const min = Math.min(...phoneNumbers);
      const max = Math.max(...phoneNumbers);
      const total = phoneNumbers.length;
      this.setState({
        min,
        max,
        total
      });
    }
  };

  handleUserInput = async event => {
    event.preventDefault();
    const limit = event.target.value;
    try {
      if (Math.floor(Number(limit))) {
        this.setState({
          limit
        });
      }
    } catch (e) {
      this.setState({
        error: true,
        message: 'An error occured, please try again'
      });
    }
  };

  handleNumberSort = () => {
    const { sorter, phoneNumbers } = this.state;
    if (!phoneNumbers.length > 0) return;
    if (sorter === 'asc') {
      this.setState({
        phoneNumbers: phoneNumbers.sort((x, y) => 0 - (x > y ? -1 : 1))
      });
    } else {
      this.setState({
        phoneNumbers: phoneNumbers.sort((x, y) => 0 - (x > y ? 1 : -1))
      });
    }
  };
  handleOnSortChange = event => {
    event.preventDefault();
    const sorter = event.target.value;
    this.setState(
      {
        sorter
      },
      () => this.handleNumberSort()
    );
  };

  render() {
    const { min, max, total, phoneNumbers } = this.state;
    return (
      <Fragment>
        <div style={{ margin: '0 0 150px 0' }}>
          >
          <MainNav />
        </div>
        <div className="container">
          <div className="input-container">
            <NumberInput
              onClick={this.handleGenerateNumber}
              onChange={this.handleUserInput}
            />
          </div>
          <Header
            phoneNumbers={phoneNumbers}
            min={min}
            max={max}
            total={total}
          />
          <div className="main-container">
            <div className="sub-container">
              <div className="sort-download">
                <NumberSort
                  phoneNumbers={phoneNumbers}
                  onChange={this.handleOnSortChange}
                />

                {phoneNumbers.length > 0 ? (
                  <DownloadPhoneNumbers data={phoneNumbers} />
                ) : null}
              </div>
              <DisplayNumbers phoneNumbers={phoneNumbers} />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Generator;
