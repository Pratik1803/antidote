import "../styles/globals.css";
import { AnimateSharedLayout } from "framer-motion";
import { createContext, useState } from "react";

const StatesContext = createContext({});

function MyApp({ Component, pageProps }) {
  const [states, setStates] = useState({
    loading: true,
  });
  return (
    <StatesContext.Provider value={{ states, setStates }}>
      <Component {...pageProps} />
    </StatesContext.Provider>
  );
}

export default MyApp;
export { StatesContext };
