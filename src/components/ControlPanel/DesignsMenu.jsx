import React from "react";
import { ICMenu } from "../../data";

const designsMenu = ({
    cp,
    cvs,
    cv,
    setCv,
    currModel,
    setCurrModel,
    dataRef,
}) => {
    return (
        <div className="relative">
            <button
                onClick={() => setCurrModel("design")}
                className="btn flex gap-x-2 items-center justify-between w-[13rem]"
            >
                <span className="max-w-[25ch]">{cv.replace("-", " ")}</span>
                <div className="flex gap-x-2 items-center">
                    <ICMenu className="icon" />
                </div>
            </button>
            {currModel === "design" && (
                <div
                    ref={dataRef}
                    className="absolute top-[3rem] py-6 px-3 w-[13rem] right-0 bg-gray-100 dark:bg-gray-800 dark:border-gray-600 border-gray-300 border-2 rounded-md shadow-md flex flex-wrap items-center justify-center gap-4 transition-all duration-300"
                >
                    {cvs.map((_cv) => {
                        if (_cv === cvs[0])
                            return (
                                <div className="text-center">
                                    <button
                                        key={_cv}
                                        className={`capitalize rounded w-[2.5rem] h-[3.75rem] bg-${cp}-light shadow-md relative border-success overflow-hidden transition-all duration-300 hover:opacity-75 ${
                                            cv === _cv &&
                                            "border-2 scale-[1.25] shadow-lg"
                                        }`}
                                        onClick={() => setCv(_cv)}
                                    >
                                        <div
                                            className={`absolute top-[0] right-[50%] translate-x-[50%] h-[1.25rem] w-full bg-${cp}-primary`}
                                        ></div>
                                        <div
                                            className={`absolute top-[.25rem] left-[.25rem] h-[.70rem] w-[.70rem] bg-${cp}-light`}
                                        ></div>
                                        {/* NAME */}
                                        <div
                                            className={`absolute z-[2] top-[.30rem] left-[1.05rem] h-[.2rem] rounded w-5/12 bg-${cp}-light`}
                                        ></div>
                                        <div
                                            className={`absolute z-[2] top-[.70rem] left-[1.05rem] h-[.2rem] rounded w-2/6 bg-${cp}-secondary`}
                                        ></div>
                                        {/* body markup */}
                                        <div
                                            className={`absolute top-[1.5rem] left-[.25rem] h-[4px] rounded w-8/12 bg-${cp}-dark`}
                                        ></div>
                                        <div
                                            className={`absolute top-[1.9rem] left-[.25rem] h-[4px] rounded w-7/12 bg-${cp}-primary`}
                                        ></div>
                                        <div
                                            className={`absolute top-[2.3rem] left-[.25rem] h-[4px] rounded w-8/12 bg-${cp}-secondary`}
                                        ></div>
                                        <div
                                            className={`absolute top-[2.7rem] left-[.25rem] h-[4px] rounded w-5/12 bg-${cp}-primary`}
                                        ></div>
                                        <div
                                            className={`absolute top-[3.1rem] left-[.25rem] h-[4px] rounded w-7/12 bg-${cp}-dark`}
                                        ></div>
                                    </button>
                                    <div className="text-gray-800 dark:text-gray-100 uppercase text-xs font-semibold mt-3">
                                        {cvs[0]}
                                    </div>
                                </div>
                            );
                        else if (_cv === cvs[1])
                            return (
                                <div className="text-center">
                                    <button
                                        key={_cv}
                                        className={`capitalize rounded w-[2.5rem] h-[3.75rem] bg-${cp}-light shadow-md relative border-success overflow-hidden transition-all duration-300 hover:opacity-75 ${
                                            cv === _cv &&
                                            "border-2 scale-[1.25] shadow-lg"
                                        }`}
                                        onClick={() => setCv(_cv)}
                                    >
                                        <div
                                            className={`absolute top-[.25rem] left-[.25rem] h-[.70rem] w-[.70rem] bg-${cp}-dark`}
                                        ></div>
                                        {/* NAME */}
                                        <div
                                            className={`absolute z-[2] top-[.30rem] left-[1.05rem] h-[4px] rounded w-5/12 bg-${cp}-dark`}
                                        ></div>
                                        <div
                                            className={`absolute z-[2] top-[.70rem] left-[1.05rem] h-[4px] rounded w-2/6 bg-${cp}-primary`}
                                        ></div>
                                        {/* content */}
                                        <div
                                            className={`absolute z-[2] top-[1.5rem] left-[50%] translate-x-[-50%] h-[3px] rounded w-4/6 bg-${cp}-primary`}
                                        ></div>
                                        <div
                                            className={`absolute z-[2] top-[1.8rem] left-[50%] translate-x-[-50%] h-[1px] rounded w-3/6 bg-${cp}-dark`}
                                        ></div>
                                        <div
                                            className={`absolute z-[2] top-[2rem] left-[50%] translate-x-[-50%] h-[1px] rounded w-3/6 bg-${cp}-dark`}
                                        ></div>
                                        <div
                                            className={`absolute z-[2] top-[2.2rem] left-[50%] translate-x-[-50%] h-[1px] rounded w-3/6 bg-${cp}-dark`}
                                        ></div>
                                        <div
                                            className={`absolute z-[2] top-[2.5rem] left-[50%] translate-x-[-50%] h-[3px] rounded w-4/6 bg-${cp}-primary`}
                                        ></div>
                                        <div
                                            className={`absolute z-[2] top-[2.8rem] left-[50%] translate-x-[-50%] h-[1px] rounded w-3/6 bg-${cp}-dark`}
                                        ></div>
                                        <div
                                            className={`absolute z-[2] top-[3rem] left-[50%] translate-x-[-50%] h-[1px] rounded w-3/6 bg-${cp}-dark`}
                                        ></div>
                                    </button>
                                    <div className="text-gray-800 dark:text-gray-100 uppercase text-xs font-semibold mt-3">
                                        {cvs[1]}
                                    </div>
                                </div>
                            );
                        else if (_cv === cvs[2])
                            return (
                                <div className="text-center">
                                    <button
                                        key={_cv}
                                        className={`capitalize rounded w-[2.5rem] h-[3.75rem] bg-${cp}-light shadow-md relative border-success overflow-hidden transition-all duration-300 hover:opacity-75 grid grid-cols-12 ${
                                            cv === _cv &&
                                            "border-2 scale-[1.25] shadow-lg"
                                        }`}
                                        onClick={() => setCv(_cv)}
                                    >
                                        <div
                                            className={`bg-${cp}-primary col-span-5 py-2 px-0.5`}
                                        >
                                            <div
                                                className={`w-2.5 h-2.5 bg-${cp}-secondary`}
                                            ></div>
                                            <div
                                                className={`h-[3px] rounded w-5/6 bg-${cp}-dark mt-1`}
                                            ></div>
                                            <div
                                                className={`h-[3px] rounded w-3/6 bg-${cp}-secondary mt-0.5`}
                                            ></div>
                                            <div
                                                className={`h-[3px] rounded w-4/6 bg-${cp}-dark mt-2`}
                                            ></div>
                                            <div
                                                className={`h-[3px] rounded w-4/6 bg-${cp}-dark mt-0.5`}
                                            ></div>
                                            <div
                                                className={`h-[3px] rounded w-4/6 bg-${cp}-dark mt-0.5`}
                                            ></div>
                                        </div>
                                        <div
                                            className={`bg-${cp}-light col-span-7 px-0.5`}
                                        >
                                            <div
                                                className={`h-[3px] rounded w-5/6 bg-${cp}-dark mt-1`}
                                            ></div>
                                            <div
                                                className={`h-[3px] rounded w-3/6 bg-${cp}-secondary mt-0.5`}
                                            ></div>
                                            <div
                                                className={`h-[3px] rounded w-5/6 bg-${cp}-primary mt-1`}
                                            ></div>
                                            <div
                                                className={`h-[3px] rounded w-2/6 bg-${cp}-dark mt-0.5`}
                                            ></div>
                                            <div
                                                className={`h-[3px] rounded w-5/6 bg-${cp}-secondary mt-0.5`}
                                            ></div>
                                            <div
                                                className={`h-[3px] rounded w-3/6 bg-${cp}-dark mt-0.5`}
                                            ></div>
                                        </div>
                                    </button>
                                    <div className="text-gray-800 dark:text-gray-100 uppercase text-xs font-semibold mt-3">
                                        {cvs[2]}
                                    </div>
                                </div>
                            );
                        else if (_cv === cvs[3])
                            return (
                                <div className="text-center">
                                    <button
                                        key={_cv}
                                        className={`capitalize rounded w-[2.5rem] h-[3.75rem] bg-${cp}-light shadow-md relative border-success overflow-hidden transition-all duration-300 hover:opacity-75 grid grid-cols-12 ${
                                            cv === _cv &&
                                            "border-2 scale-[1.25] shadow-lg"
                                        }`}
                                        onClick={() => setCv(_cv)}
                                    >
                                        <div
                                            className={`col-span-7 py-2 px-0.5`}
                                        >
                                            <div
                                                className={`w-2 h-2 rounded-full bg-${cp}-secondary`}
                                            ></div>
                                            <div
                                                className={`h-[3px] rounded w-5/6 bg-${cp}-dark mt-1`}
                                            ></div>
                                            <div
                                                className={`h-[3px] rounded w-3/6 bg-${cp}-secondary mt-0.5`}
                                            ></div>
                                            <div
                                                className={`h-[3px] rounded w-4/6 bg-${cp}-dark mt-2`}
                                            ></div>
                                            <div
                                                className={`h-[3px] rounded w-4/6 bg-${cp}-dark mt-0.5`}
                                            ></div>
                                            <div
                                                className={`h-[3px] rounded w-4/6 bg-${cp}-dark mt-0.5`}
                                            ></div>
                                        </div>
                                        <div className={` col-span-5 px-0.5`}>
                                            <div
                                                className={`h-[3px] rounded w-5/6 bg-${cp}-dark mt-1`}
                                            ></div>
                                            <div
                                                className={`h-[3px] rounded w-3/6 bg-${cp}-secondary mt-0.5`}
                                            ></div>
                                            <div
                                                className={`h-[3px] rounded w-5/6 bg-${cp}-primary mt-1`}
                                            ></div>
                                            <div
                                                className={`h-[3px] rounded w-2/6 bg-${cp}-dark mt-0.5`}
                                            ></div>
                                            <div
                                                className={`h-[3px] rounded w-5/6 bg-${cp}-secondary mt-0.5`}
                                            ></div>
                                            <div
                                                className={`h-[3px] rounded w-3/6 bg-${cp}-dark mt-0.5`}
                                            ></div>
                                        </div>
                                    </button>
                                    <div className="text-gray-800 dark:text-gray-100 uppercase text-xs font-semibold mt-3">
                                        {cvs[3]}
                                    </div>
                                </div>
                            );
                        else if (_cv === cvs[4])
                            return (
                                <div className="text-center">
                                    <button
                                        key={_cv}
                                        className={`capitalize rounded w-[2.5rem] h-[3.75rem] bg-${cp}-light shadow-md relative border-success overflow-hidden transition-all duration-300 hover:opacity-75 ${
                                            cv === _cv &&
                                            "border-2 scale-[1.25] shadow-lg"
                                        }`}
                                        onClick={() => setCv(_cv)}
                                    >
                                        <div
                                            className={`absolute top-[0] right-[50%] translate-x-[50%] h-[1.25rem] w-full bg-${cp}-primary`}
                                        >
                                            <div
                                                className={`absolute top-[.25rem] left-[50%] translate-x-[-50%] h-[.70rem] w-4/6 border-[2px] border-${cp}-light`}
                                            >
                                                <div
                                                    className={`absolute z-[2] top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] h-[.2rem] rounded w-3/6 bg-${cp}-light`}
                                                ></div>
                                            </div>
                                        </div>
                                        {/* body markup */}
                                        <div
                                            className={`absolute top-[1.5rem] left-[.25rem] h-[4px] rounded w-8/12 bg-${cp}-dark`}
                                        ></div>
                                        <div
                                            className={`absolute top-[1.9rem] left-[.25rem] h-[4px] rounded w-7/12 bg-${cp}-dark`}
                                        ></div>
                                        <div
                                            className={`absolute top-[2.3rem] left-[.25rem] h-[4px] rounded w-8/12 bg-${cp}-dark`}
                                        ></div>
                                        <div
                                            className={`absolute top-[2.7rem] left-[.25rem] h-[4px] rounded w-5/12 bg-${cp}-dark`}
                                        ></div>
                                        <div
                                            className={`absolute top-[3.1rem] left-[.25rem] h-[4px] rounded w-7/12 bg-${cp}-dark`}
                                        ></div>
                                    </button>
                                    <div className="text-gray-800 dark:text-gray-100 uppercase text-xs font-semibold mt-3">
                                        {cvs[4]}
                                    </div>
                                </div>
                            );
                    })}
                </div>
            )}
        </div>
    );
};

export default designsMenu;
