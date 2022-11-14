// React Imports.
import React, { createContext, useContext, useEffect, useState } from "react";

import CVClassic from "./resumes/Classic/CVClassic";
import CVDefault from "./resumes/Default/CVDefault";
import CVSide from "./resumes/Side/CVSide";
import { DEFAULT_DATA } from "./data";

const cvComps = {
    default: <CVDefault />,
    classic: <CVClassic />,
    side: <CVSide />,
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
    const [alert, setAlert] = useState(false);

    const [darkMode, setDarkMode] = useState(true);

    const [cp, setCp] = useState(cps[0]);
    const [cv, setCv] = useState(cvs[0]);

    const [data, setData] = useState(DEFAULT_DATA);

    useEffect(() => {
        const localData = localStorage.getItem("resumeMakerData");
        if (localData) setData(JSON.parse(localData));
    }, []);

    return (
        <GlobalContext.Provider
            value={{
                darkMode,
                setDarkMode,
                cp,
                setCp,
                cps,
                cv,
                setCv,
                cvs,
                cvComps,
                data,
                setData,
                alert,
                setAlert,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}
