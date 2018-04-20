import React from 'react'
import PropTypes from 'prop-types'
import Plan from './plan'

const PlanList = (props) => 
  <div>
    <h2>Plans</h2>
    {
      props.plans.map(function(plan) {
        return <Plan plan={plan} key={plan.id} />
      })
    }
  </div>

PlanList.propTypes = {
  plans: PropTypes.array
}

export default PlanList