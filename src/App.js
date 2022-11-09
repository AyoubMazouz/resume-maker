import "./App.css";
import React from "react";
import ControlPanel from "./components/ControlPanel";
import { GlobalContextProvider } from "./GlobalContext";
import Curr from "./Curr";

function App() {
    return (
        <div className="w-full bg-gray-100">
            <GlobalContextProvider>
                <ControlPanel />
                <div className="w-full flex justify-center pb-12">
                    <div className="rounded-lg shadow-lg overflow-hidden print:shadow-none print:rounded-none">
                        <Curr />
                    </div>
                </div>
            </GlobalContextProvider>
        </div>
    );
}

export default App;
