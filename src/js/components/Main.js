import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Input from './form/Input';
import Textarea from './form/Textarea';
import Checkbox from './form/Checkbox';
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
      personal: [
        {
          id: 0,
          fullname: '',
          email: '',
          phone: '',
          notes: '',
        },
      ],
      education: [],
      work: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  handleChange(e, data) {
    const { name, value, type, checked } = e.target;
    const { category, id } = data;

    if (data !== undefined) {
      const categoryData = [...this.state[category]];
      const categoryItem = categoryData.find((i) => i.id === id);

      categoryItem[name] = type === 'checkbox' ? checked : value;
      this.setState({ [category]: [...categoryData] });
    }
  }

  addItem(category, cb) {
    this.setState({
      [category]: [...this.state[category], cb()],
    });
  }

  removeItem(e, data) {
    const { id, category } = data;
    this.setState({
      [category]: this.state[category].filter((i) => i.id !== id),
    });
  }

  render() {
    const personalFields = this.state.personal.map((item) => {
      const { fullname, email, phone, notes } = item;
      const data = {
        category: 'personal',
        id: 0,
      };

      return (
        <div key={0} className="pb-1">
          <div className="mb-4">
            <Input
              label="Full name"
              name="fullname"
              value={fullname}
              handleChange={(e) => this.handleChange(e, data)}
            />
          </div>

          <div className="mb-4">
            <Input
              label="Email"
              name="email"
              type="email"
              value={email}
              handleChange={(e) => this.handleChange(e, data)}
            />
          </div>

          <div className="mb-4">
            <Input
              label="Phone number"
              name="phone"
              value={phone}
              handleChange={(e) => this.handleChange(e, data)}
            />
          </div>

          <div className="mb-4">
            <Textarea
              label="Notes"
              name="notes"
              value={notes}
              handleChange={(e) => this.handleChange(e, data)}
            />
          </div>
        </div>
      );
    });

    const educationFields = this.state.education.map((item) => {
      const { id, occupation, organization, from, to, ongoing } = item;
      const data = {
        category: 'education',
        id,
      };

      return (
        <div key={id} className="pb-4">
          <div className="mb-4">
            <Input
              label="Title of the occupation"
              name="occupation"
              value={occupation}
              handleChange={(e) => this.handleChange(e, data)}
            />
          </div>

          <div className="mb-4">
            <Input
              label="Organization provdataing education and training"
              name="organization"
              value={organization}
              handleChange={(e) => this.handleChange(e, data)}
            />
          </div>

          <div className="mb-4">
            <Input
              label="From"
              type="date"
              name="from"
              value={from}
              handleChange={(e) => this.handleChange(e, data)}
            />
          </div>

          <div className="mb-4">
            <Input
              label="To"
              type="date"
              name="to"
              value={to}
              handleChange={(e) => this.handleChange(e, data)}
            />
          </div>

          <div className="mb-4">
            <Checkbox
              label="Ongoing"
              name="ongoing"
              checked={ongoing}
              handleChange={(e) => this.handleChange(e, data)}
            />
          </div>

          <Button
            label="Remove"
            appearance="secondary"
            handleClick={(e) => this.removeItem(e, data)}
          />
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
        <div key={id} className="pb-4">
          <div className="mb-4">
            <Input
              label="Title of the occupation"
              name="occupation"
              value={occupation}
              handleChange={(e) => this.handleChange(e, data)}
            />
          </div>

          <div className="mb-4">
            <Input
              label="Employer"
              name="employer"
              value={employer}
              handleChange={(e) => this.handleChange(e, data)}
            />
          </div>

          <div className="mb-4">
            <Input
              label="From"
              type="date"
              name="from"
              value={from}
              handleChange={(e) => this.handleChange(e, data)}
            />
          </div>

          <div className="mb-4">
            <Input
              label="To"
              type="date"
              name="to"
              value={to}
              handleChange={(e) => this.handleChange(e, data)}
            />
          </div>

          <div className="mb-4">
            <Checkbox
              label="Ongoing"
              name="ongoing"
              checked={ongoing}
              handleChange={(e) => this.handleChange(e, data)}
            />
          </div>

          <div className="mb-4">
            <Textarea
              label="Main activities and responsibilities"
              name="notes"
              value={notes}
              handleChange={(e) => this.handleChange(e, data)}
            />
          </div>

          <Button
            label="Remove"
            appearance="secondary"
            handleClick={(e) => this.removeItem(e, data)}
          />
        </div>
      );
    });

    return (
      <main className="js-main container max-w-4xl mx-auto mb-6 px-4">
        <div className="grid gap-8 grid-cols-2">
          <div>
            <h2 className="block my-4 text-2xl font-bold">Personal information</h2>

            {personalFields}

            <h2 className="block my-4 text-2xl font-bold">Education and Training</h2>

            {educationFields}

            <div className="text-right">
              <Button
                label="Add"
                handleClick={() => this.addItem('education', createEducationItem)}
              />
            </div>

            <h2 className="block my-4 text-2xl font-bold">Work Experience</h2>

            {workFields}

            <div className="text-right">
              <Button label="Add" handleClick={() => this.addItem('work', createWorkItem)} />
            </div>
          </div>

          <Preview data={this.state} />
        </div>
      </main>
    );
  }
}
