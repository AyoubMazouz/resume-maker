import "./App.css";
import React from "react";
import ControlPanel from "./components/ControlPanel";
import Curr from "./Curr";
import Editor from "./resumes/Editor/Editor";
import Alert from "./components/Alert";
import { useGlobalContext } from "./GlobalContext";

function App() {
    const { darkMode, cp } = useGlobalContext();
    return (
        <div className={darkMode ? "dark" : ""}>
            <div className="bg-gray-100 dark:bg-gray-800 max-w-[1920px] flex flex-col items-center">
                <Alert />
                <ControlPanel />
                <div className="max-w-[1700px] flex justify-center flex-wrap gap-12 pb-12 mt-4 w-full bg-gray-100 dark:bg-gray-800">
                    <Editor />
                    <Curr />
                </div>
            </div>
        </div>
    );
}

export default App;
