import React from "react";
import { ICMenu } from "../../data";

const ColorPaletteMenu = ({
    cps,
    cp,
    setCp,
    currModel,
    setCurrModel,
    dataRef,
}) => {
    return (
        <div className="relative">
            <button
                onClick={() => setCurrModel("cp")}
                className="btn flex gap-x-2 items-center justify-between w-[22rem]"
            >
                <span className="max-w-[25ch]">{cp.replace("-", " ")}</span>
                <div className="flex gap-x-2 items-center">
                    <div className="h-6 w-10 grid grid-flow-col gird-cols-12">
                        <div className={`bg-${cp}-primary col-span-6`}></div>
                        <div className={`bg-${cp}-light col-span-2`}></div>
                        <div className={`bg-${cp}-dark col-span-2`}></div>
                        <div className={`bg-${cp}-secondary col-span-2`}></div>
                    </div>
                    <ICMenu className="icon" />
                </div>
            </button>
            {currModel === "cp" && (
                <div
                    ref={dataRef}
                    className="absolute top-[3rem] py-6 px-3 w-[22rem] right-0 bg-gray-100 dark:bg-gray-800 dark:border-gray-600 border-gray-300 border-2 rounded-md shadow-md flex flex-wrap items-center justify-center gap-4 transition-all duration-300"
                >
                    {cps.map((_cp) => (
                        <button
                            key={_cp}
                            className={`capitalize rounded w-[2.5rem] h-[3.75rem] bg-${_cp}-light shadow relative border-success dark:gray-600 overflow-hidden transition-all duration-300 hover:opacity-75 ${
                                cp === _cp && "border-2 scale-[1.25] shadow-lg"
                            }`}
                            onClick={() => setCp(_cp)}
                        >
                            {/* BG */}
                            <div
                                className={`absolute top-[0] right-[50%] translate-x-[50%] h-[1.25rem] w-full bg-${_cp}-primary`}
                            ></div>
                            {/* IMG */}
                            <div
                                className={`absolute top-[.25rem] left-[.25rem] h-[.70rem] w-[.70rem] bg-${_cp}-light`}
                            ></div>
                            {/* NAME */}
                            <div
                                className={`absolute z-[2] top-[.30rem] left-[1.05rem] h-[.2rem] rounded w-5/12 bg-${_cp}-light`}
                            ></div>
                            <div
                                className={`absolute z-[2] top-[.70rem] left-[1.05rem] h-[.2rem] rounded w-2/6 bg-${_cp}-secondary`}
                            ></div>
                            {/* body markup */}
                            <div
                                className={`absolute top-[1.5rem] left-[.25rem] h-[4px] rounded w-8/12 bg-${_cp}-dark`}
                            ></div>
                            <div
                                className={`absolute top-[1.9rem] left-[.25rem] h-[4px] rounded w-7/12 bg-${_cp}-primary`}
                            ></div>
                            <div
                                className={`absolute top-[2.3rem] left-[.25rem] h-[4px] rounded w-8/12 bg-${_cp}-secondary`}
                            ></div>
                            <div
                                className={`absolute top-[2.7rem] left-[.25rem] h-[4px] rounded w-5/12 bg-${_cp}-primary`}
                            ></div>
                            <div
                                className={`absolute top-[3.1rem] left-[.25rem] h-[4px] rounded w-7/12 bg-${_cp}-dark`}
                            ></div>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ColorPaletteMenu;
