import React from "react";
import { useGlobalContext } from "../GlobalContext";

const ControlPanel = () => {
    const { cps, setCp, cv, setCv, cvs, cp } = useGlobalContext();

    return (
        <div className="print:hidden flex justify-center p-4">
            <div className="w-full max-w-[1400px] flex flex-wrap justify-between items-center">
                <div className="flex items-center gap-2">
                    {cvs.map((_cv) => (
                        <button
                            key={_cv}
                            className={`capitalize text-xs font-semibold rounded w-12 h-12 bg-${cp}-primary ${
                                cv === _cv ? "opacity-50" : ""
                            }`}
                            onClick={() => {
                                setCv(_cv);
                            }}
                        >
                            {_cv}
                        </button>
                    ))}
                </div>
                <div className="flex items-center gap-2">
                    {cps.map((_cp) => (
                        <button
                            key={_cp}
                            className={`capitalize text-xs rounded-full w-8 h-8 bg-${_cp}-primary flex justify-center items-center shadow-md`}
                            onClick={() => {
                                setCp(_cp);
                            }}
                        >
                            <div
                                className={
                                    cp === _cp
                                        ? "bg-white h-4 w-4 rounded-full"
                                        : ""
                                }
                            ></div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ControlPanel;
