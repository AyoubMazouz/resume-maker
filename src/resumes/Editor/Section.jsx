import React from "react";
import Container from "./Container";
import { useGlobalContext } from "../../GlobalContext";
import useEditor from "../../resumes/Editor/useEditor";
import { MESSAGES } from "../../data";
import {
    ICAddItem,
    ICArrowDown,
    ICArrowUp,
    ICDeleteSection,
} from "../../data/icons";

const Section = ({ title, content, type, id }) => {
    const { cp, setAlert, letterEnabled, setLetterEnabled } =
        useGlobalContext();
    const {
        titleHandler,
        addListItem,
        addDateListItem,
        addSliderItem,
        AddLetterParagraph,
        moveSection,
        deleteSection,
    } = useEditor();

    const addItem = {
        date_list: addDateListItem,
        list: addListItem,
        labels: addListItem,
        slider: addSliderItem,
        letter: AddLetterParagraph,
    };

    const moveHandler = (dir) => {
        if (!moveSection(id, dir))
            setAlert({
                type: "info",
                text: MESSAGES.moveSection,
            });
    };

    const deleteSectionHandler = () => {
        setAlert({
            type: "warn-conf",
            text: MESSAGES.deleteSection + " <" + title + "> ?",
            children: [
                <button
                    className="btn-alert bg-error-dark text-error"
                    onClick={(e) => {
                        setAlert(false);
                        deleteSection(id);
                    }}
                >
                    Yes
                </button>,
                <button
                    className="btn-alert bg-info-dark text-info"
                    onClick={(e) => setAlert(false)}
                >
                    No
                </button>,
            ],
        });
    };

    return (
        <div
            className={`my-6 ${
                ["date_list", "slider"].includes(type)
                    ? "space-y-3"
                    : "space-y-6"
            }`}
        >
            {title && (
                <div
                    className={`px-3 w-full h-10 font-semibold bg-${cp}-primary text-${cp}-light rounded shadow grid grid-cols-12 items-center`}
                >
                    <input
                        id={id}
                        type="text"
                        placeholder="Titre..."
                        value={title}
                        onChange={titleHandler}
                        className={`input bg-${cp}-primary ring-0 shadow-0 font-bold text-lg text-gray-100 dark:text-gray-400 col-span-5 mr-1`}
                    />
                    <div
                        className={`flex items-center justify-end gap-x-3 bg-gray-100 h-full px-3 text-gray-500 dark:bg-gray-900 col-span-7`}
                    >
                        <div className="hidden sm:block">
                            Type:{" "}
                            <span className={`text-${cp}-primary font-bold`}>
                                {type}
                            </span>
                        </div>
                        <div>
                            ID:{" "}
                            <span className={`text-${cp}-primary font-bold`}>
                                {id}
                            </span>
                        </div>
                        <span className="font-bold rounded w-[2px] h-4/6 bg-gray-300 dark:bg-gray-700"></span>
                        {id !== "0" && (
                            <ICAddItem
                                className="icon text-success"
                                onClick={(e) => addItem[type](id)}
                            />
                        )}
                        {!["-1", "0"].includes(id) ? (
                            <>
                                <ICArrowUp
                                    onClick={(e) => moveHandler("up")}
                                    className="icon text-info text-4xl -mx-2"
                                />
                                <ICArrowDown
                                    onClick={(e) => moveHandler("down")}
                                    className="icon text-info text-4xl -mx-2"
                                />
                                <ICDeleteSection
                                    className="icon text-error"
                                    onClick={deleteSectionHandler}
                                />
                            </>
                        ) : (
                            "-1" === id && (
                                <div className="flex items-center gap-x-1 text-xs">
                                    <label htmlFor="letter">
                                        Lettre motivation
                                    </label>
                                    <input
                                        type="checkbox"
                                        name="letter"
                                        className="h-6 w-6"
                                        checked={letterEnabled}
                                        onChange={(e) =>
                                            setLetterEnabled((prev) => !prev)
                                        }
                                    />
                                </div>
                            )
                        )}
                    </div>
                </div>
            )}
            <Container content={content} type={type} id={id} />
        </div>
    );
};

export default Section;
