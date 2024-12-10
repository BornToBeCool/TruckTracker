import { useState } from 'react';

import './App.css';

import TrackTable from './components/TruckTable';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>TruckTracker</h1>
      <TrackTable />
    </>
  );
}

export default App;
