import './style.css'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'

import { FishDebug } from './FishDebug'
import { Dialog } from './Dialog'
import { FancyForm } from './FancyForm'
import { Fishes } from './Fishes'
import { FishesByLetter } from './FishesByLetter'

export function App() {
  const formikRef = React.useRef()
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello Redux sandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Dialog
          onAccept={(...args) => {
            console.log('onAccept', ...args)
            console.log({ formikRef })
          }}
          onCancel={(...args) => console.log('onCancel', ...args)}
        >
          <FancyForm ref={formikRef} />
        </Dialog>
        <FishesByLetter startsWith="S" />
        <FishesByLetter startsWith="A" />
        <FishesByLetter startsWith="N" />
        <FishDebug />
        <Fishes />
      </div>
    </Provider>
  )
}
