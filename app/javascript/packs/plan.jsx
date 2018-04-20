import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import formatDate from './utils'

const Plan = (props) =>
  <div>
    <h3>{props.plan.title}</h3>
    <p>{formatDate(props.plan.due_date)}</p>
  </div>
  
Plan.propTypes = {
  plan: PropTypes.object
}

export default Plan