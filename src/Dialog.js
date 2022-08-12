import React from 'react'
import PropTypes from 'prop-types'

import './Dialog.css'

export function Dialog({ children, onCancel, onAccept }) {
  return (
    <div className="dialog">
      <div className="dialog-header">
        <h2>Look at me, I&apos;m a dialog I swear</h2>
      </div>
      <div className="dialog-content">{children}</div>
      <div className="dialog-controls">
        <button onClick={onCancel}>Cancel</button>
        <button onClick={onAccept}>Ok</button>
      </div>
    </div>
  )
}

Dialog.propTypes = {
  children: PropTypes.node.isRequired,
  onAccept: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
}
