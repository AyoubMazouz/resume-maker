import React from "react";
import { useGlobalContext } from "../../GlobalContext";
import Section from "./Section";
import { STYLES } from "../../data";

const CVDefault = () => {
    const { cp, data, options } = useGlobalContext();

    return (
        <div
            className={`${STYLES.fontSize[options.fontSize]} ${
                STYLES.leading[options.leading]
            } cv bg-${cp}-light text-${cp}-dark font-semibold`}
        >
            {/* Header */}
            <div className={`col-span-4 bg-${cp}-primary px-4`}>
                {data.map(
                    (section) =>
                        section.id === "0" && (
                            <Section {...{ ...section, title: "" }} />
                        )
                )}
            </div>
            {/* Body */}
            <div className={`col-span-8 text-${cp}-dark px-4 mt-4`}>
                {data.map(
                    (section) => section.id > "0" && <Section {...section} />
                )}
            </div>
        </div>
    );
};

export default CVDefault;
