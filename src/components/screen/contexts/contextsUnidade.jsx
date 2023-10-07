import React, { createContext, useContext, useState } from 'react';

const UnidadeContext = createContext();

export function UnidadeProvider({ children }) {
  const [unidadeOrigem, setUnidadeOrigem] = useState('m');
  const [unidadeDestino, setUnidadeDestino] = useState('cm');
  const [resultado, setResultado] = useState(null);
  const [Tipo, setTipo] = useState('');

  return (
    <UnidadeContext.Provider
      value={{
        unidadeOrigem,
        setUnidadeOrigem,
        unidadeDestino,
        setUnidadeDestino,
        resultado,
        setResultado,
        Tipo,
        setTipo,
      }}
    >
      {children}
    </UnidadeContext.Provider>
  );
}

export function useUnidade() { 
  return useContext(UnidadeContext);
}
