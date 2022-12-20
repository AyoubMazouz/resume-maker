import React from "react";
import { MESSAGES } from "../../data";
import { ICDarkMode, ICLightMode, ICMenu } from "../../data/icons";
import { useGlobalContext } from "../../GlobalContext";
import useEditor from "../../resumes/Editor/useEditor";
import ColorPaletteMenu from "./ColorPaletteMenu";
import DesignsMenu from "./DesignsMenu";
import OptionsMenu from "./OptionsMenu";

const ControlPanel = () => {
    const { setAlert, setDarkMode, darkMode, options, setOptions } =
        useGlobalContext();
    const {
        saveToLocalStorage,
        exportToJSON,
        importFromJSON,
        resetData,
        exportToPDF,
    } = useEditor();

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
            <div className="w-full max-w-[1400px] flex flex-wrap gap-3 justify-center items-center px-2 z-[5]">
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
                            className="absolute top-[3rem] right-[50%] translate-x-[50%] flex flex-col py-6 px-3 gap-y-3 border-2 dark:bg-gray-800 dark:border-gray-600 border-gray-300 rounded-md shadow-md bg-gray-100 z-[6]"
                        >
                            <button className="btn" onClick={exportToPDF}>
                                télécharger
                            </button>
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
                            onClick={() => setCurrModel("goto")}
                            className="btn flex gap-x-2 items-center"
                        >
                            Aller à
                            <ICMenu className="icon" />
                        </button>
                    </div>
                    {currModel === "goto" && (
                        <div
                            ref={dataRef}
                            className="absolute top-[3rem] right-[50%] w-[8rem] translate-x-[50%] flex flex-col py-6 px-3 gap-y-3 border-2 dark:bg-gray-800 dark:border-gray-600 border-gray-300 rounded-md shadow-md bg-gray-100 z-[6]"
                        >
                            <a className="btn" href="#editor">
                                editor
                            </a>
                            <a className="btn" href="#cv">
                                cv
                            </a>
                            <a className="btn" href="#letter">
                                lettre
                            </a>
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
                            className="absolute top-[3rem] right-[50%] translate-x-[50%] flex flex-col py-6 px-3 gap-y-3 border-2 dark:bg-gray-800 dark:border-gray-600 border-gray-300 rounded-md shadow-md bg-gray-100 z-[6]"
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
                <OptionsMenu
                    dataRef={dataRef}
                    setCurrModel={setCurrModel}
                    currModel={currModel}
                />
                <DesignsMenu
                    dataRef={dataRef}
                    setCurrModel={setCurrModel}
                    currModel={currModel}
                />

                <ColorPaletteMenu
                    dataRef={dataRef}
                    setCurrModel={setCurrModel}
                    currModel={currModel}
                />
            </div>
        </div>
    );
};

export default ControlPanel;
