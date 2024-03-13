import { useEffect, useRef, useState } from 'react';
import { useBearStore } from './state/bears-state.ts';
import { selectBears } from './state/selectors.ts';

export const Example = () => {
  const [count, setCount] = useState(0);
  const bears = useBearStore((s) => s.bears);
  const getBears = useBearStore((s) => s.getBears());
  const selectedBears = useBearStore(selectBears);

  const getBear = useBearStore((s) => s.getBear('0'));

  const addBear = useBearStore((s) => s.addBear);

  const countRenderRef = useRef(0);
  useEffect(() => {
    countRenderRef.current += 1;
  }, [count]);

  const bearsRenderRef = useRef(0);
  useEffect(() => {
    bearsRenderRef.current += 1;
  }, [bears]);

  const getBearsRenderRef = useRef(0);
  useEffect(() => {
    getBearsRenderRef.current += 1;
  }, [getBears]);

  const selectedBearsRenderRef = useRef(0);
  useEffect(() => {
    selectedBearsRenderRef.current += 1;
  }, [selectedBears]);

  const getBearRenderRef = useRef(0);
  useEffect(() => {
    getBearRenderRef.current += 1;
  }, [getBear]);

  const handleAddBearIntoState = () => {
    addBear({
      id: `${selectedBears.length + 1}`,
      name: `Bear ${selectedBears.length + 1}`,
      status: 'eating',
    });
  };

  return (
    <div className="stack">
      <pre>
        <code className={'codeCard'}>
          <span
            className={'flash'}
            key={`count-${count}`}>{`const [count, setCount] = useState(0);`}</span>
          <br />
          <br />
          <span className={'flash'} key={`bears-${bearsRenderRef.current}`}>
            {`const bears = useBearStore((s) => s.bears);`}
          </span>
          <br />
          <br />
          <span className={'flash'} key={`getBears-${getBearsRenderRef.current}`}>
            {`const getBears = useBearStore((s) => s.getBears());`}
          </span>
          <br />
          <br />
          <span className={'flash'} key={`selectedBears-${selectedBearsRenderRef.current}`}>
            {`const selectedBears = useBearStore(selectBears);`}
          </span>
          <br />
          <br />
          <span className={'flash'} key={`getBear-${getBearRenderRef.current}`}>
            {`const getBear = useBearStore((s) => s.getBear('0'));`}
          </span>
          <br />
          <br />
          <span className={'flash'} key={`addBear-${selectedBears.length}`}>
            {`const addBear = useBearStore((s) => s.addBear);`}
          </span>
        </code>
      </pre>
      <table>
        <thead>
          <tr>
            <th>State</th>
            <th>Code</th>
            <th>Re-renders</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Component State</td>
            <td>
              <code className={'highlightCode'}>{`const [count, setCount] = useState(0);`}</code>
            </td>
            <td>{countRenderRef.current}</td>
          </tr>
          <tr>
            <td>Bears Object</td>
            <td>
              <code
                className={'highlightCode'}>{`const bears = useBearStore((s) => s.bears);`}</code>
            </td>
            <td>{bearsRenderRef.current}</td>
          </tr>
          <tr>
            <td>Get Bears Function</td>
            <td>
              <code
                className={
                  'highlightCode'
                }>{`const getBears = useBearStore((s) => s.getBears());`}</code>
            </td>
            <td>{getBearsRenderRef.current}</td>
          </tr>
          <tr>
            <td>Selected Bears</td>
            <td>
              <code
                className={
                  'highlightCode'
                }>{`const selectedBears = useBearStore(selectBears);`}</code>
            </td>
            <td>{selectedBearsRenderRef.current}</td>
          </tr>
          <tr>
            <td>Get Bear Function</td>
            <td>
              <code
                className={
                  'highlightCode'
                }>{`const getBear = useBearStore((s) => s.getBear('0'));`}</code>
            </td>
            <td>{getBearRenderRef.current}</td>
          </tr>
        </tbody>
      </table>
      <div className="hstack">
        <button onClick={() => setCount((count) => count + 1)}>➕ Increment counter ➕</button>
        <button onClick={handleAddBearIntoState}>🐻 Add bear 🐻</button>
      </div>
    </div>
  );
};
