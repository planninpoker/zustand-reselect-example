import './App.css';
import { Example } from './Example.tsx';

function App() {
  return (
    <>
      <h1>
        <a href="https://react.dev" target="_blank">
          React
        </a>{' '}
        +{' '}
        <a href="https://github.com/reduxjs/reselect" target="_blank">
          Zustand
        </a>{' '}
        +{' '}
        <a href="https://github.com/reduxjs/reselect" target="_blank">
          Reselect
        </a>
      </h1>
      <Example />
    </>
  );
}

export default App;
