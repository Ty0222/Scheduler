import React from 'react'
import PropTypes from 'prop-types'

const FormErrors = (props) =>
  <div>
    {
      Object.keys(props.formErrors).map((formError) => {
        return (
          props.formErrors[formError].map((message) => {
            return <p>{formError} {message}</p>
          })
        )
      })
    }
  </div>

FormErrors.propTypes = {
  formErrors: PropTypes.object
}

export default FormErrors