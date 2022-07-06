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

const createWorkItem = () => ({
  id: nanoid(),
  occupation: '',
  employer: '',
  from: '',
  to: '',
  ongoing: false,
  notes: '',
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
      work: [createWorkItem()],
    };

    this.handleChange = this.handleChange.bind(this);
    this.addEducationItem = this.addEducationItem.bind(this);
    this.removeEducationItem = this.removeEducationItem.bind(this);
  }

  handleChange(e, data) {
    const { name, value, type, checked } = e.target;
    const { category, id } = data;

    if (data !== undefined) {
      const categoryData = [...this.state[category]];
      const categoryItem = categoryData.find((i) => i.id === id);

      categoryItem[name] = type === 'checkbox' ? checked : value;
      this.setState({ [category]: [...categoryData] });
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

  removeEducationItem(e, data) {
    const { id, category } = data;
    this.setState({
      [category]: this.state.education.filter((i) => i.id !== id),
    });
  }

  render() {
    const eduFields = this.state.education.map((item) => {
      const { id, occupation, organization, from, to, ongoing } = item;
      const data = {
        category: 'education',
        id,
      };

      return (
        <div key={id}>
          <Input
            label="Title of the occupation"
            name="occupation"
            value={occupation}
            handleChange={(e) => this.handleChange(e, data)}
          />

          <Input
            label="Organization provdataing education and training"
            name="organization"
            value={organization}
            handleChange={(e) => this.handleChange(e, data)}
          />

          <Input
            label="From"
            type="date"
            name="from"
            value={from}
            handleChange={(e) => this.handleChange(e, data)}
          />

          <Input
            label="To"
            type="date"
            name="to"
            value={to}
            handleChange={(e) => this.handleChange(e, data)}
          />

          <Checkbox
            label="Ongoing"
            name="ongoing"
            checked={ongoing}
            handleChange={(e) => this.handleChange(e, data)}
          />

          <Button label="Remove" handleClick={(e) => this.removeEducationItem(e, data)} />
        </div>
      );
    });

    const workFields = this.state.work.map((item) => {
      const { id, occupation, employer, from, to, ongoing, notes } = item;
      const data = {
        category: 'work',
        id,
      };

      return (
        <div key={id}>
          <Input
            label="Title of the occupation"
            name="occupation"
            value={occupation}
            handleChange={(e) => this.handleChange(e, data)}
          />

          <Input
            label="Employer"
            name="employer"
            value={employer}
            handleChange={(e) => this.handleChange(e, data)}
          />

          <Input
            label="From"
            type="date"
            name="from"
            value={from}
            handleChange={(e) => this.handleChange(e, data)}
          />

          <Input
            label="To"
            type="date"
            name="to"
            value={to}
            handleChange={(e) => this.handleChange(e, data)}
          />

          <Checkbox
            label="Ongoing"
            name="ongoing"
            checked={ongoing}
            handleChange={(e) => this.handleChange(e, data)}
          />

          <Textarea
            label="Main activities and responsibilities"
            name="notes"
            value={notes}
            handleChange={(e) => this.handleChange(e, data)}
          />
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

            {workFields}
          </div>

          <Preview data={this.state} />
        </div>
      </main>
    );
  }
}
