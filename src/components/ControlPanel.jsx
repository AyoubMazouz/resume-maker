import React from "react";
import { MESSAGES } from "../data";
import { useGlobalContext } from "../GlobalContext";
import useEditor from "../useEditor";

const ControlPanel = () => {
    const { cps, setCp, cv, setCv, cvs, cp, setAlert, setDarkMode, darkMode } =
        useGlobalContext();
    const { saveToLocalStorage, exportToJSON, importFromJSON, resetData } =
        useEditor();

    const saveHandler = () => {
        saveToLocalStorage();
        setAlert({
            type: "success",
            text: MESSAGES.save,
        });
    };

    const exportHandler = () => {
        exportToJSON();
        setAlert({
            type: "info",
            text: MESSAGES.export,
        });
    };

    const ResetHandler = () => {
        setAlert({
            type: "error-conf",
            text: MESSAGES.reset,
            children: [
                <button
                    className="btn-alert bg-error-dark text-error"
                    onClick={(e) => {
                        setAlert(false);
                        resetData();
                    }}
                >
                    Yes
                </button>,
                <button
                    className="btn-alert bg-info-dark text-info"
                    onClick={(e) => setAlert(false)}
                >
                    No
                </button>,
            ],
        });
    };

    return (
        <div className="print:hidden flex justify-center p-4 sticky top-0 w-full bg-gray-100 dark:bg-gray-800 border-b-2 border-gray-300 shadow-lg z-10 transition-all duration-300 dark:border-gray-800/50">
            <div className="w-full max-w-[1400px] flex flex-wrap gap-6 justify-around items-center">
                <div className="flex items-center gap-3">
                    <button className="btn" onClick={saveHandler}>
                        Save
                    </button>
                    <button className="btn" onClick={ResetHandler}>
                        Reset
                    </button>
                    <button className="btn" onClick={exportHandler}>
                        Export
                    </button>
                    <button className="btn" disabled onClick={importFromJSON}>
                        Import
                    </button>
                    <button
                        className="btn"
                        onClick={() => {
                            console.log(darkMode);
                            setDarkMode((prev) => !prev);
                        }}
                    >
                        {darkMode ? "lightMode" : "darkMode"}
                    </button>
                </div>
                <div className="flex items-center gap-3">
                    {cvs.map((_cv) => (
                        <button
                            key={_cv}
                            className={`btn ${
                                cv === _cv ? "shadow-none scale-[.9]" : ""
                            }`}
                            onClick={() => setCv(_cv)}
                        >
                            {_cv}
                        </button>
                    ))}
                </div>
                <div className="flex items-center gap-x-4 transition-all duration-300">
                    {cps.map((_cp) => (
                        <button
                            key={_cp}
                            className={`capitalize rounded w-[2.5rem] h-[3.75rem] bg-${_cp}-light shadow-md relative border-gray-400 overflow-hidden transition-all duration-300 hover:opacity-75 ${
                                cp === _cp &&
                                "border-[3px] scale-[1.25] shadow-lg"
                            }`}
                            onClick={() => setCp(_cp)}
                        >
                            {/* header markup */}
                            <div
                                className={`absolute top-[0] right-[50%] translate-x-[50%] h-[1.25rem] w-full bg-${_cp}-primary`}
                            ></div>
                            <div
                                className={`absolute top-[.25rem] left-[.25rem] h-[.65rem] w-[.65rem] bg-${_cp}-light`}
                            ></div>
                            <div
                                className={`absolute z-[2] top-[.25rem] left-[1rem]  h-[.15rem] rounded w-3/6 bg-${_cp}-light`}
                            ></div>
                            <div
                                className={`absolute z-[2] top-[.5rem] left-[1rem]  h-[.15rem] rounded w-2/6 bg-${_cp}-secondary`}
                            ></div>
                            {/* body markup */}
                            <div
                                className={`absolute top-[1.5rem] left-[.25rem] h-[.15rem] rounded w-2/6 bg-${_cp}-dark`}
                            ></div>
                            <div
                                className={`absolute top-[1.8rem] left-[.25rem] h-[.15rem] rounded w-4/6 bg-${_cp}-dark`}
                            ></div>
                            <div
                                className={`absolute top-[2.1rem] left-[.25rem] h-[.15rem] rounded w-5/6 bg-${_cp}-primary`}
                            ></div>
                            <div
                                className={`absolute top-[2.4rem] left-[.25rem] h-[.15rem] rounded w-4/6 bg-${_cp}-secondary`}
                            ></div>
                            <div
                                className={`absolute top-[2.7rem] left-[.25rem] h-[.15rem] rounded w-2/6 bg-${_cp}-secondary`}
                            ></div>
                            <div
                                className={`absolute top-[3rem] left-[.25rem] h-[.15rem] rounded w-3/6 bg-${_cp}-dark`}
                            ></div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ControlPanel;
