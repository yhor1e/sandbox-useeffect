import React, { useState, useEffect } from 'react';

const App = (props) => {
  const [counter, setCounter] = useState({ value: 0, dummy: true });

  useEffect(() => {
    console.log(
      '[useEffect1]          useEffect has no depnedency.            counter.value: ' +
        counter.value
    );
    return () => {
      console.log(
        '[useEffect1 callback] useEffect has no depnedency.            counter.value: ' +
          counter.value
      );
    };
  });

  useEffect(() => {
    console.log(
      '[useEffect2]          useEffect has [] depnedency.             counter.value: ' +
        counter.value
    );
    return () => {
      console.log(
        '[useEffect2 callback] useEffect has [] depnedency.             counter.value: ' +
          counter.value
      );
    };
  }, []);

  useEffect(() => {
    console.log(
      '[useEffect3]          useEffect has counter.dummy depnedency. counter.value: ' +
        counter.value
    );
    return () => {
      console.log(
        '[useEffect3 callback] useEffect has counter.dummy depnedency. counter.value: ' +
          counter.value
      );
    };
  }, [counter.dummy]);

  return (
    <>
      <h1>{props.heading}</h1>
      <p>counter.value {counter.value}</p>
      <p>counter.dummy {counter.dummy.toString()}</p>
      <button
        onClick={() => {
          console.log('-------- clicked --------');
          setCounter({
            value: counter.value + 1,
            dummy: counter.value % 3 === 0 ? !counter.dummy : counter.dummy,
          });
        }}
      >
        +1
      </button>
    </>
  );
};
export default App;
