/* eslint-disable node/no-unsupported-features/es-syntax */
import React from 'react';
import styles from './index.module.css';

const App = () => (
  <div id="text-yellow" className={styles.subClass}>
    This text should be yellow on blue.
  </div>
);

export default App;
/* eslint-enable node/no-unsupported-features/es-syntax */
