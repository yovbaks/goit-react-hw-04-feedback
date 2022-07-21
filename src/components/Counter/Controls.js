import React from 'react';

const Controls = ({onIcrement,onDecrement}) => (
  <>
    <button type="button" onClick={onDecrement}>
      -
    </button>

    <button type="button" onClick={onIcrement }>
      +
    </button>
  </>
);

export default Controls;
