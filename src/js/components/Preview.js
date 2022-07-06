import React, { Component } from 'react';
import Info from './UI/Info';

export default class Preview extends Component {
  render() {
    const { data } = this.props;
    const personalData = data.personal[0];

    return (
      <div>
        <h2 className="block mb-4 text-2xl font-bold">Personal information</h2>

        <Info label="Full name" value={personalData.fullname} />
        <Info label="Email" value={personalData.email} />
        <Info label="Phone" value={personalData.phone} />
        <Info label="Notes name" value={personalData.notes} />

        <h2 className="block mb-4 text-2xl font-bold">Education and Training</h2>

        {data.education.map((item) => {
          const { id, occupation, organization, from, to, ongoing } = item;
          const periodText = from ? `${from} — ${ongoing ? 'Present' : to}` : '';
          return (
            <div key={id}>
              <Info label="Title of the occupation" value={occupation} />
              <Info label="Organization providing education and training" value={organization} />
              <Info label="Period" value={periodText} />
            </div>
          );
        })}

        <h2 className="block mb-4 text-2xl font-bold">Work Experience</h2>

        {data.work.map((item) => {
          const { id, occupation, employer, from, to, ongoing, notes } = item;
          const periodText = from ? `${from} — ${ongoing ? 'Present' : to}` : '';
          return (
            <div key={id}>
              <Info label="Title of the occupation" value={occupation} />
              <Info label="Employer" value={employer} />
              <Info label="Period" value={periodText} />
              <Info label="Notes" value={notes} />
            </div>
          );
        })}
      </div>
    );
  }
}
