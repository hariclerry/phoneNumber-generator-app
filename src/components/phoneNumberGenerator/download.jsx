import React from 'react';
import { CSVLink } from 'react-csv';

const DownloadPhoneNumbers = data => (
  <button type="button" className="download">
    <CSVLink data={[data]} filename={'phone-number-file.csv'}>
      Download Phone Numbers
    </CSVLink>
  </button>
);

export default DownloadPhoneNumbers;