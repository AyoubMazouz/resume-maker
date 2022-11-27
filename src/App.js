import "./css/App.css";
import React from "react";
import { useGlobalContext } from "./GlobalContext";
import ControlPanel from "./components/ControlPanel";
import Alert from "./components/Alert";
import Editor from "./resumes/Editor/Editor";
import CurrCv from "./components/CurrCv";

function App() {
    const { darkMode } = useGlobalContext();
    return (
        <div className={darkMode ? "dark" : ""}>
            <div className="bg-gray-100 dark:bg-gray-800 max-w-[1920px] flex flex-col items-center">
                <Alert />
                <ControlPanel />
                <div className="max-w-[1700px] flex justify-center flex-wrap gap-12 my-4 print:my-0 w-full bg-gray-100 dark:bg-gray-800">
                    <Editor />
                    <CurrCv />
                </div>
            </div>
        </div>
    );
}

export default App;
