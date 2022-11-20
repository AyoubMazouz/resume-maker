import React from "react";
import { ICDarkMode, ICLightMode, ICMenu, MESSAGES } from "../../data";
import { useGlobalContext } from "../../GlobalContext";
import useEditor from "../../useEditor";
import ColorPaletteMenu from "./ColorPaletteMenu";
import DesignsMenu from "./DesignsMenu";

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
                    onClick={() => {
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

    const [currModel, setCurrModel] = React.useState(null);
    const dataRef = React.useRef(null);

    React.useEffect(() => {
        function handleClickOutside(e) {
            if (dataRef.current && !dataRef.current.contains(e.target))
                setCurrModel(null);
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [dataRef]);

    return (
        <div className="print:hidden flex justify-center p-4 sticky top-0 w-full bg-gray-100 dark:bg-gray-800 border-b-2 border-gray-300 shadow z-10 transition-all duration-300 dark:border-gray-800/50">
            <div className="w-full max-w-[1400px] flex flex-wrap gap-6 justify-between items-center px-2">
                <div className="flex gap-3 items-center z-[5]">
                    <div className="relative flex items-center gap-3">
                        <div>
                            <button
                                onClick={() => setCurrModel("data")}
                                className="btn flex gap-x-2 items-center"
                            >
                                Menu
                                <ICMenu className="icon" />
                            </button>
                        </div>
                        {currModel === "data" && (
                            <div
                                ref={dataRef}
                                className="absolute top-[3rem] flex flex-col py-6 px-3 gap-y-3 border-2 dark:bg-gray-800 dark:border-gray-600 border-gray-300 rounded-md shadow-md bg-gray-100"
                            >
                                <button className="btn" onClick={saveHandler}>
                                    sauvegarder
                                </button>
                                <button className="btn" onClick={ResetHandler}>
                                    réinitialiser
                                </button>
                                <button className="btn" onClick={exportHandler}>
                                    exporter
                                </button>
                                <button className="btn relative overflow-hidden">
                                    importer
                                    <input
                                        type="file"
                                        accept=".json"
                                        className="absolute w-[16rem] h-full top-0 left-0 cursor-pointer opacity-0"
                                        onChange={importFromJSON}
                                    />
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="relative flex items-center gap-3">
                        <div>
                            <button
                                onClick={() => setCurrModel("help")}
                                className="btn flex gap-x-2 items-center"
                            >
                                à propos
                                <ICMenu className="icon" />
                            </button>
                        </div>
                        {currModel === "help" && (
                            <div
                                ref={dataRef}
                                className="absolute top-[3rem] flex flex-col py-6 px-3 gap-y-3 border-2 dark:bg-gray-800 dark:border-gray-600 border-gray-300 rounded-md shadow-md bg-gray-100"
                            >
                                <button
                                    className="btn"
                                    onClick={() => setAlert({ type: "docs" })}
                                >
                                    Documentation
                                </button>
                                <button
                                    className="btn"
                                    onClick={() => setAlert({ type: "about" })}
                                >
                                    à propos
                                </button>
                            </div>
                        )}
                    </div>
                    <div
                        className={`${
                            darkMode ? "bg-gray-100" : "bg-gray-700"
                        } h-8 w-8 rounded-full shadow flex justify-center items-center`}
                        onClick={() => setDarkMode((prev) => !prev)}
                    >
                        {darkMode ? (
                            <ICDarkMode className="icon text-gray-700" />
                        ) : (
                            <ICLightMode className="icon text-gray-100" />
                        )}
                    </div>
                </div>
                <div className="flex items-center gap-x-3">
                    <DesignsMenu
                        cp={cp}
                        cv={cv}
                        cvs={cvs}
                        setCv={setCv}
                        currModel={currModel}
                        setCurrModel={setCurrModel}
                        dataRef={dataRef}
                    />

                    <ColorPaletteMenu
                        cps={cps}
                        cp={cp}
                        setCp={setCp}
                        currModel={currModel}
                        setCurrModel={setCurrModel}
                        dataRef={dataRef}
                    />
                </div>
            </div>
        </div>
    );
};

export default ControlPanel;
