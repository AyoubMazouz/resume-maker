// React Imports.
import React, { createContext, useContext, useEffect, useState } from "react";
import { CPS } from "./data";

const GlobalContext = createContext();

export function useGlobalContext() {
    return useContext(GlobalContext);
}
export function GlobalContextProvider({ children }) {
    // Global Alert.
    const [alert, setAlert] = useState(false);

    // Stats.
    const [darkMode, setDarkMode] = useState(false);
    const [letterEnabled, setLetterEnabled] = useState(true);

    const [cp, setCp] = useState(CPS[0]);
    const [currDesign, setCurrDesign] = useState(0);

    // Options.
    const [fontSize, setFontSize] = React.useState("1");
    const [leading, setLeading] = React.useState("1");

    const options = {
        fontSize,
        leading,
    };
    const setOptions = {
        setFontSize,
        setLeading,
    };

    // Get Saved data if available.
    // setDefault Data OBJ Structure.
    const [data, setData] = useState([]);
    useEffect(() => {
        const localData = localStorage.getItem("resumeMakerData");
        if (localData?.length >= 2) {
            setData(JSON.parse(localData));
        } else {
            fetch("/defaultData.json")
                .then((response) => response.json())
                .then((json) => {
                    setData(json);
                    localStorage.setItem(
                        "resumeMakerData",
                        JSON.stringify(json)
                    );
                });
        }
    }, []);

    return (
        <GlobalContext.Provider
            value={{
                darkMode,
                setDarkMode,
                cp,
                setCp,
                currDesign,
                setCurrDesign,
                data,
                setData,
                alert,
                setAlert,
                options,
                setOptions,
                letterEnabled,
                setLetterEnabled,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}
