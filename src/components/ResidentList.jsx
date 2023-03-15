import React from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentList = ({ residents }) => {
  return (
    <section className="grid">
        {residents.map((resident) => (
          <ResidentInfo key={resident} urlResident={resident} />
        ))}
      </section>
  )
}

export default ResidentList;