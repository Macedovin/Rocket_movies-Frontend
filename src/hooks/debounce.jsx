import { createContext, useContext, useRef } from 'react';
 
export const DebounceContext = createContext({});

function DebounceProvider({ children }) {

  const timeoutRef = useRef(null);

  function useDb(fn, delay) {

    function debouncedFn(...args) {
      
      clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {

        fn(...args);
        
      }, delay);

    }

    return debouncedFn;
  }


  return(
    <DebounceContext.Provider value={{
        useDb
      }}
    >
      {children}
    </DebounceContext.Provider>
  )
}

function useDebounce() {
  const context = useContext(DebounceContext);

  return context;
}

export { DebounceProvider, useDebounce };