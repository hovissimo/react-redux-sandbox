import React from 'react'
import PropTypes from 'prop-types'
import { Field, Form, Formik } from 'formik'

export const FancyForm = ({ formikRef }) => {
  return (
    <Formik
      initialValues={{
        name: 'Fred Flinstone',
        email: 'flinstonef@example.com',
      }}
      onSubmit={(values) => console.log('Formik form submitted', values)}
      innerRef={formikRef}
    >
      <Form>
        <label>
          <span className="label">Name</span>
          <Field name="name" />
        </label>
        <label>
          <span className="label">Email</span>
          <Field name="email" />
        </label>
      </Form>
    </Formik>
  )
}

FancyForm.displayName = 'FancyForm'

FancyForm.propTypes = {
  formikRef: PropTypes.shape({ current: PropTypes.any }),
}
