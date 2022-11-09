// React Imports.
import React, { createContext, useContext, useState } from "react";

import CLClassic from "./resumes/Classic/CLClassic";
import CVClassic from "./resumes/Classic/CVClassic";
import CLDefault from "./resumes/Default/CLDefault";
import CVDefault from "./resumes/Default/CVDefault";
import CVSide from "./resumes/Side/CVSide";
import CLSide from "./resumes/Side/CLSide";

const cvComps = {
    default: (
        <>
            <CVDefault />
            {/* <CLDefault /> */}
        </>
    ),
    classic: (
        <>
            <CVClassic />
            {/* <CLClassic /> */}
        </>
    ),
    side: (
        <>
            <CVSide />
            {/* <CLSide /> */}
        </>
    ),
};

const cps = [
    "steel-blue",
    "alabaster",
    "cyber-grape",
    "gray",
    "carmine-pink",
    "viridian-green",
    "light-taupe",
];
const cvs = Object.keys(cvComps);

const GlobalContext = createContext();

export function useGlobalContext() {
    return useContext(GlobalContext);
}
export function GlobalContextProvider({ children }) {
    const [cp, setCp] = useState(cps[0]);
    const [cv, setCv] = useState(cvs[0]);
    return (
        <GlobalContext.Provider
            value={{ cp, setCp, cps, cv, setCv, cvs, cvComps }}
        >
            {children}
        </GlobalContext.Provider>
    );
}
