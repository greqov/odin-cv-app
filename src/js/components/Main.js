import React, { Component } from 'react';
import Input from './form/Input';
import Textarea from './form/Textarea';
import Checkbox from './form/Checkbox';
import Select from './form/Select';
import Button from './form/Button';
import Info from './UI/Info';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: 'John Doe',
      email: 'doe@john.de',
      phone: '123456',
      notes: 'Such note!',
      ongoing: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value, type, checked } = e.target;

    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  }

  render() {
    const infoElements = Object.entries(this.state).map(([label, value]) => (
      <Info key={label} label={label} value={value} />
    ));

    return (
      <main className="js-main container max-w-4xl mx-auto mb-6 px-4">
        <div className="grid gap-4 grid-cols-2">
          <div>
            <h2 className="block text-2xl font-bold">Personal information</h2>
            <Input
              label="Full name"
              name="fullname"
              value={this.state.fullname}
              handleChange={this.handleChange}
            />

            <Input
              label="Email"
              name="email"
              type="email"
              value={this.state.email}
              handleChange={this.handleChange}
            />

            <Input
              label="Phone number"
              name="phone"
              value={this.state.phone}
              handleChange={this.handleChange}
            />

            <Textarea
              label="Notes"
              name="notes"
              value={this.state.notes}
              handleChange={this.handleChange}
            />

            <h2 className="block text-2xl font-bold">Education and Training</h2>

            <Input
              label="Title of the occupation"
              name="occupation"
              value={this.state.occupation}
              handleChange={this.handleChange}
            />

            <Input
              label="Organization providing education and training"
              name="organization"
              value={this.state.organization}
              handleChange={this.handleChange}
            />

            <Input
              label="From"
              name="occupation"
              value={this.state.occupation}
              handleChange={this.handleChange}
            />

            <Input
              label="To"
              name="occupation"
              value={this.state.occupation}
              handleChange={this.handleChange}
            />

            <Checkbox
              id="ongoing_label"
              label="Ongoing"
              name="ongoing"
              checked={this.state.ongoing}
              handleChange={this.handleChange}
            />

            <Button label="Add" />

            <h2 className="block text-2xl font-bold">Work Experience</h2>

            <Select />
          </div>

          <div>
            <h2 className="block text-2xl font-bold">CV</h2>
            {infoElements}
          </div>
        </div>
      </main>
    );
  }
}
