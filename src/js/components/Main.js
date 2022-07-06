import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Input from './form/Input';
import Textarea from './form/Textarea';
import Checkbox from './form/Checkbox';
import Select from './form/Select';
import Button from './form/Button';
import Preview from './Preview';

const createEducationItem = () => ({
  id: nanoid(),
  occupation: '',
  organization: '',
  from: '',
  to: '',
  ongoing: false,
});

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: 'John Doe',
      email: 'doe@john.de',
      phone: '123456',
      notes: 'Such note!',
      education: [createEducationItem()],
    };

    this.handleChange = this.handleChange.bind(this);
    this.addEducationItem = this.addEducationItem.bind(this);
    this.removeEducationItem = this.removeEducationItem.bind(this);
  }

  handleChange(e, id) {
    const { name, value, type, checked } = e.target;

    if (id !== undefined) {
      const education = [...this.state.education];
      const eduItem = education.find((i) => i.id === id);

      eduItem[name] = type === 'checkbox' ? checked : value;
      console.log(`eduItem`, eduItem);
      this.setState({ education: [...education] });
    } else {
      this.setState({
        [name]: type === 'checkbox' ? checked : value,
      });
    }
  }

  addEducationItem() {
    this.setState({
      education: [...this.state.education, createEducationItem()],
    });
  }

  removeEducationItem(e, id) {
    this.setState({
      education: this.state.education.filter((i) => i.id !== id),
    });
  }

  render() {
    const eduFields = this.state.education.map((item) => {
      const { id, occupation, organization, from, to, ongoing } = item;

      return (
        <div key={id}>
          <Input
            label="Title of the occupation"
            name="occupation"
            value={occupation}
            handleChange={(e) => this.handleChange(e, id)}
          />

          <Input
            label="Organization providing education and training"
            name="organization"
            value={organization}
            handleChange={(e) => this.handleChange(e, id)}
          />

          <Input
            label="From"
            type="date"
            name="from"
            value={from}
            handleChange={(e) => this.handleChange(e, id)}
          />

          <Input
            label="To"
            type="date"
            name="to"
            value={to}
            handleChange={(e) => this.handleChange(e, id)}
          />

          <Checkbox
            label="Ongoing"
            name="ongoing"
            checked={ongoing}
            handleChange={(e) => this.handleChange(e, id)}
          />

          <Button label="Remove" handleClick={(e) => this.removeEducationItem(e, id)} />
        </div>
      );
    });

    return (
      <main className="js-main container max-w-4xl mx-auto mb-6 px-4">
        <div className="grid gap-4 grid-cols-2">
          <div>
            <h2 className="block mb-4 text-2xl font-bold">Personal information</h2>

            <div>
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
            </div>

            <h2 className="block mb-4 text-2xl font-bold">Education and Training</h2>

            {eduFields}

            <Button label="Add" handleClick={this.addEducationItem} />

            <h2 className="block mb-4 text-2xl font-bold">Work Experience</h2>

            <Select />
          </div>

          <Preview data={this.state} />
        </div>
      </main>
    );
  }
}
