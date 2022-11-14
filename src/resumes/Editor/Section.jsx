import React from "react";
import Container from "./Container";
import { useGlobalContext } from "../../GlobalContext";
import useEditor from "../../useEditor";
import {
    ICAddItem,
    ICArrowDown,
    ICArrowUp,
    ICDeleteItem,
    ICDeleteSection,
    MESSAGES,
} from "../../data";

const Section = ({ title, content, type, id }) => {
    const { cp, setAlert, alert } = useGlobalContext();
    const {
        titleHandler,
        addListItem,
        addDateListItem,
        addSliderItem,
        deleteDateListItem,
        deleteListItem,
        deleteSliderItem,
        moveSection,
        deleteSection,
    } = useEditor();

    const addItem = {
        date_list: addDateListItem,
        list: addListItem,
        labels: addListItem,
        slider: addSliderItem,
    };

    const deleteItem = {
        date_list: deleteDateListItem,
        list: deleteListItem,
        labels: deleteListItem,
        slider: deleteSliderItem,
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
            {title !== undefined && (
                <div
                    className={`px-3 w-full h-10 font-semibold bg-${cp}-primary text-${cp}-light rounded shadow flex justify-between items-center`}
                >
                    <input
                        id={id}
                        type="text"
                        placeholder="Title..."
                        value={title}
                        onChange={titleHandler}
                        className={`input bg-${cp}-primary ring-0 shadow-0 font-bold text-lg text-gray-100 dark:text-gray-400`}
                    />
                    <div
                        className={`flex items-center justify-end gap-x-3 bg-gray-100 h-full w-7/12 px-3 text-gray-500 dark:bg-gray-900`}
                    >
                        <div>
                            Type:{" "}
                            <span className={`text-${cp}-primary font-bold`}>
                                {type}
                            </span>
                        </div>
                        <span className="font-bold rounded w-[2px] h-4/6 bg-gray-300 dark:bg-gray-700"></span>
                        <div>
                            ID:{" "}
                            <span className={`text-${cp}-primary font-bold`}>
                                {id}
                            </span>
                        </div>
                        <span className="font-bold rounded w-[2px] h-4/6 bg-gray-300 dark:bg-gray-700"></span>
                        <ICAddItem
                            className="icon text-success"
                            onClick={(e) => addItem[type](id)}
                        />
                        <ICDeleteItem
                            className="icon text-error"
                            onClick={(e) => deleteItem[type](id)}
                        />
                        <span className="font-bold rounded w-[2px] h-4/6 bg-gray-300 dark:bg-gray-700"></span>
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
                    </div>
                </div>
            )}
            <Container content={content} type={type} id={id} />
        </div>
    );
};

export default Section;
