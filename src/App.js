import "./App.css";
import React from "react";
import ControlPanel from "./components/ControlPanel";
import { GlobalContextProvider } from "./GlobalContext";
import Curr from "./Curr";
import Editor from "./resumes/Editor/Editor";

function App() {
    return (
        <div className="w-full bg-gray-100">
            <GlobalContextProvider>
                <ControlPanel />
                <div className="w-full flex justify-center pb-12 gap-12">
                    <div className="w-[210mm] h-[295mm] rounded-lg shadow-lg print:hidden">
                        <Editor />
                    </div>
                    <div className="rounded-lg shadow-lg overflow-hidden print:shadow-none print:rounded-none">
                        <Curr />
                    </div>
                </div>
            </GlobalContextProvider>
        </div>
    );
}

export default App;
