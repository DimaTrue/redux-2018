import React, { PureComponent } from 'react';
import { func } from 'prop-types';

const initialValues = { title: '', url: '', tags: '' };

export default class Form extends PureComponent {
  static propTypes = {
    add: func.isRequired,
  };

  state = initialValues;

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  };

  onAdd = () => {
    this.props.add(this.state);
    this.reset();
  };

  reset = () => {
    this.setState(initialValues)
  };

  render() {
    return (
      <div className="form">
                <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.onChange}
          placeholder="Please, enter your title"
        />
                <input
          type="text"
          name="url"
          value={this.state.url}
          onChange={this.onChange}
          placeholder="Please, enter your url"
        />
                <input
          type="text"
          name="tags"
          value={this.state.tags}
          onChange={this.onChange}
          placeholder="Please, enter your tags"
        />
        <div>
        <button onClick={this.onAdd} className="form-btn">Add</button>
        </div>
      </div>
    );
  }
}