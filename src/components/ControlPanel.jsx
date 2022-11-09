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
                            className={`capitalize text-sm font-semibold rounded shadow-md w-16 py-1 px-2 ${
                                cv === _cv
                                    ? "bg-gray-200 text-gray-900"
                                    : "bg-gray-900 text-gray-200"
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
                            className={`capitalize rounded-full w-8 h-8 bg-${_cp}-primary flex justify-center items-center shadow-md`}
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
