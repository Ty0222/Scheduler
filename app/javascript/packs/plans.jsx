import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import PlanForm from './plan_form'
import PlanList from './plan_list'
import FormErrors from './form_errors'

class Plans extends React.Component {
  constructor(props) {
    super(props);

    this.state = { plans: this.props.plans, authenticity_token: this.props.authenticity_token, title: "Team Standup Meeting", due_date: "Tomorrow at 9 AM", formErrors: {} }
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleUserInput(obj) {
    this.setState(obj);
  }

  handleFormSubmit() {
    const plan = { title: this.state.title, due_date: this.state.due_date }
    $.post("/plans", { plan: plan }).done((data) => {
      this.resetFormErrors();
      this.addNewPlan(data);
    }).fail((response) => {
      this.setState({
        formErrors: response.responseJSON
      })
    });
  }

  resetFormErrors() {
    this.setState({ formErrors: {} });
  }

  addNewPlan(plan) {
    let plans = [...this.state.plans, plan];
    this.setState({ 
      plans: plans.sort(function(a,b) {
        return new Date(a.due_date) - new Date(b.due_date);
      })
    });
  }

  render() {
    return (
      <div>
        <FormErrors formErrors={this.state.formErrors} />
        <PlanForm title={this.state.title} due_date={this.state.due_date} authenticity_token={this.state.authenticity_token} onUserInput={this.handleUserInput} onFormSubmit={this.handleFormSubmit} />
        <PlanList plans={this.state.plans} />
      </div>
    )
  }
}

Plans.propTypes = {
  plans: PropTypes.array,
  authenticity_token: PropTypes.string
}

document.addEventListener("DOMContentLoaded", function() {
  const node = document.getElementById("plans_data")
  const data = JSON.parse(node.getAttribute("data"))

  ReactDOM.render(
    <Plans plans={data} />, 
    document.body.appendChild(document.createElement("div"))
  )
});