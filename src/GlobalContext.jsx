// React Imports.
import { createContext, useContext, useState } from "react";

const cps = ["steel-blue", "alabaster", "cyber-grape", "orange", "fire-opal"];
const cvs = ["default", "classic"];

const GlobalContext = createContext();

export function useGlobalContext() {
    return useContext(GlobalContext);
}
export function GlobalContextProvider({ children }) {
    const [cp, setCp] = useState(cps[0]);
    const [cv, setCv] = useState(cvs[0]);
    return (
        <GlobalContext.Provider value={{ cp, setCp, cps, cv, setCv, cvs }}>
            {children}
        </GlobalContext.Provider>
    );
}
