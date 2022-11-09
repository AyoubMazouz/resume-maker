import "./App.css";
import React from "react";
import ControlPanel from "./components/ControlPanel";
import { GlobalContextProvider } from "./GlobalContext";
import Curr from "./Curr";

function App() {
    return (
        <div className="App">
            <GlobalContextProvider>
                <ControlPanel />
                <div>
                    <Curr />
                </div>
            </GlobalContextProvider>
        </div>
    );
}

export default App;
