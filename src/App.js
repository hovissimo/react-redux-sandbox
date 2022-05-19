import './style.css';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

import { PlantDebug } from './PlantDebug';
import { Plants } from './Plants';
import { PlantsByLetter } from './PlantsByLetter';

export function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello Redux sandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <PlantsByLetter startsWith="S" />
        <PlantsByLetter startsWith="A" />
        <PlantsByLetter startsWith="N" />
        <PlantDebug />
        <Plants />
      </div>
    </Provider>
  );
}
