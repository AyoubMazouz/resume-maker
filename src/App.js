import "./App.css";
import React from "react";
import ControlPanel from "./components/ControlPanel";
import Curr from "./Curr";
import Editor from "./resumes/Editor/Editor";
import Alert from "./components/Alert";
import { useGlobalContext } from "./GlobalContext";

function App() {
    const { darkMode } = useGlobalContext();
    return (
        <div className={darkMode ? "dark" : ""}>
            <div className="w-full bg-gray-100 dark:bg-gray-800">
                <Alert />
                <ControlPanel />
                <div className="w-full flex flex-wrap justify-center pb-12 gap-12 mt-4">
                    <div className="w-[210mm] rounded-lg shadow-lg print:hidden">
                        <Editor />
                    </div>
                    <div className="rounded-lg shadow-lg overflow-hidden print:shadow-none print:rounded-none max-h-[295mm] print:-mt-4">
                        <Curr />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
