import React from 'react'
import { Formik, Form, Field } from 'formik'
import PropTypes from 'prop-types'

import { fishShape } from './fishSlice'
import { useFish } from './fishSlice'

export function FishForm({ fish, onClose }) {
  const { update } = useFish(fish)
  return (
    <Formik
      initialValues={fish}
      onSubmit={(values) => {
        update(values)
        onClose()
      }}
    >
      <Form>
        <label>
          <span className="label">Name</span>
          <Field name="name" />
        </label>
        <button type="cancel" onClick={onClose}>
          Cancel
        </button>
      </Form>
    </Formik>
  )
}

FishForm.propTypes = {
  fish: fishShape,
  onClose: PropTypes.func,
}
