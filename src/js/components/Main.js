import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Input from './form/Input';
import Textarea from './form/Textarea';
import Checkbox from './form/Checkbox';
import Select from './form/Select';
import Button from './form/Button';
// import Info from './UI/Info';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: 'John Doe',
      email: 'doe@john.de',
      phone: '123456',
      notes: 'Such note!',
      education: [
        {
          id: nanoid(),
          occupation: 'stu',
          organization: 'sch #101',
          from: '',
          to: '',
          ongoing: false,
        },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
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

  render() {
    const eduFields = this.state.education.map((item) => {
      const { id, occupation, organization, from, to, ongoing } = item;
      // TODO: add button
      // TODO: delete button
      // TODO: render education info

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
            id="ongoing_label"
            label="Ongoing"
            name="ongoing"
            checked={ongoing}
            handleChange={(e) => this.handleChange(e, id)}
          />
        </div>
      );
    });

    return (
      <main className="js-main container max-w-4xl mx-auto mb-6 px-4">
        <div className="grid gap-4 grid-cols-2">
          <div>
            <h2 className="block text-2xl font-bold">Personal information</h2>

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

            <h2 className="block text-2xl font-bold">Education and Training</h2>

            {eduFields}

            <Button label="Add" />

            <h2 className="block text-2xl font-bold">Work Experience</h2>

            <Select />
          </div>

          <div>
            <h2 className="block text-2xl font-bold">CV</h2>
          </div>
        </div>
      </main>
    );
  }
}
