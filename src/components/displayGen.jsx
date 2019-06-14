import React from 'react';


const GeneratedNumbers = ({ phoneNumbers }) => {
return (
    <div>
    {phoneNumbers.length < 1 ?
      <span  style={{margin: '30px'}}><i>No phone numbers to display</i></span>
          
          :
          <h3 style={{margin: '30px'}}>List of Generated Phone Numbers</h3>
      }
      <div className="table-responsive">
          <table className="table table-striped">
          <thead>
    <tr>
      <th scope="col">No.</th>
      <th scope="col">Phone Number</th>
    </tr>
  </thead>
            <tbody>
              {
                phoneNumbers && phoneNumbers.map((phoneNumber, index) => (
                <tr key={phoneNumber}>
                        <td>{++index}.</td>
                        <td>{phoneNumber}</td>
                      </tr>
            ))
              }
            </tbody>
          </table>
        </div>

    </div>
)};
export default GeneratedNumbers;