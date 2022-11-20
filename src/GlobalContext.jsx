// React Imports.
import React, { createContext, useContext, useEffect, useState } from "react";

import CVClassic from "./resumes/Classic/CVClassic";
import CVDefault from "./resumes/Default/CVDefault";
import CVSide from "./resumes/Side/CVSide";
import { DEFAULT_DATA } from "./data";
import CVSimple from "./resumes/simple/CVSimple";
import CVNoImg from "./resumes/NoImg/CVNoImg";

const cvComps = {
    default: <CVDefault />,
    classic: <CVClassic />,
    side: <CVSide />,
    simple: <CVSimple />,
    noImg: <CVNoImg />,
};

const cps = [
    "steel-blue",
    "alabaster",
    "cyber-grape",
    "gray",
    "carmine-pink",
    "viridian-green",
    "caput-mortuum",
    "dark-turquoise",
    "fiery-rose",
    "usla-blue",
    "carolina-blue",
    "camouflage-green",
    "light-taupe",
    "oxley",
    "flame",
    "msu-green",
    "eggshell",
    "rose-red",
    "venetian-red",
    "patriarch",
    "green-sheen",
    "medium-vermilion",
    "space-cadet",
    "japanese-laurel",
    "davy-grey",
    "violets-are-blue",
    "brilliant-rose",
    "strawberry",
    "deep-chestnut",
    "carmine",
    "l",
];

const cvs = Object.keys(cvComps);

const GlobalContext = createContext();

export function useGlobalContext() {
    return useContext(GlobalContext);
}
export function GlobalContextProvider({ children }) {
    const [alert, setAlert] = useState(false);

    const [darkMode, setDarkMode] = useState(false);

    const [cp, setCp] = useState(cps[0]);
    const [cv, setCv] = useState(cvs[4]);

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
