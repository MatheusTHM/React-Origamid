import React from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'REMOVER':
      return state.filter((item) => item !== action.content);
    case 'ADICIONAR':
      return [...state, action.content];
    default:
      throw new Error();
  }
}

const Reducer = () => {
  const [state, dispatch] = React.useReducer(reducer, ['Banana', 'Uva']);

  return (
    <div>
      <button onClick={() => dispatch({ type: 'REMOVER', content: 'Banana' })}>
        Remover Banana
      </button>
      <button onClick={() => dispatch({ type: 'ADICIONAR', content: 'Limão' })}>
        Adicionar Limão
      </button>
      <p>{state}</p>
    </div>
  );
};

export default Reducer;
