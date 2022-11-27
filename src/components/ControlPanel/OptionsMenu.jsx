import React from "react";
import { ICMenu } from "../../data/icons";
import { useGlobalContext } from "../../GlobalContext";

const OptionsMenu = ({ dataRef, setCurrModel, currModel }) => {
    const { options, setOptions } = useGlobalContext();
    return (
        <div className="relative flex items-center gap-3">
            <div>
                <button
                    onClick={() => setCurrModel("options")}
                    className="btn flex gap-x-2 items-center"
                >
                    Options
                    <ICMenu className="icon" />
                </button>
            </div>
            {currModel === "options" && (
                <div
                    ref={dataRef}
                    className="absolute top-[3rem] right-[50%] translate-x-[50%] flex flex-col py-6 px-3 gap-y-3 border-2 dark:bg-gray-800 dark:border-gray-600 border-gray-300 rounded-md shadow-md bg-gray-100 z-[6]"
                >
                    <div>
                        <div className="flex justify-between text-gray-700 dark:text-gray-300 mb-0.5">
                            <label
                                htmlFor="fontSize"
                                className="font-semibold capitalize"
                            >
                                Font size
                            </label>
                            <div>{options.fontSize}</div>
                        </div>
                        <input
                            type="range"
                            name="fontSize"
                            min="0"
                            max="3"
                            value={options.fontSize}
                            onChange={(e) =>
                                setOptions.setFontSize(e.target.value)
                            }
                        />
                    </div>
                    <div>
                        <div className="flex justify-between text-gray-700 dark:text-gray-300 mb-0.5">
                            <label
                                htmlFor="fontSize"
                                className="font-semibold capitalize"
                            >
                                Leading
                            </label>
                            <div>{options.leading}</div>
                        </div>
                        <input
                            type="range"
                            name="fontSize"
                            min="0"
                            max="4"
                            value={options.leading}
                            onChange={(e) =>
                                setOptions.setLeading(e.target.value)
                            }
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default OptionsMenu;
