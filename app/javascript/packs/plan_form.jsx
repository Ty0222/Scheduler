import React from 'react'
import PropTypes from 'prop-types'
import Datetime from 'react-datetime'
import "react-datetime/css/react-datetime"

export default class PlanForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.setDueDate = this.setDueDate.bind(this)
  }

  handleChange(e) {
    const name = e.target.id;
    const obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  }

  setDueDate(e) {
    const name = "due_date";
    const obj = {};
    if (obj[name] = e.toDate()) {
      this.props.onUserInput(obj);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onFormSubmit();
  }

  render() {
    const inputProps = { name: "due_date" }

    return (
      <div>
        <h3>Make a New Plan</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="hidden" name="authenticity_token" value={this.props.authenticity_token} />
          <input type="hidden" name="utf8" value="✓" />
          <input type="text" id="title" placeholder="Enter title" name="plan[title]" value={this.props.title} onChange={this.handleChange} />
          <Datetime inputProps={inputProps} input={false} open={true} value={this.props.due_date} onChange={this.setDueDate} />
          <input type="submit" name="commit" value="Save Plan" />
        </form>
      </div>
    )
  } 
}

PlanForm.propTypes = {
  title: PropTypes.string,
  due_date: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  authenticity_token: PropTypes.string,
}