import React from "react";
import { useGlobalContext } from "../../GlobalContext";
import Section from "./Section";
import { STYLES } from "../../data";

const CVClassic = () => {
    const { cp, data, options } = useGlobalContext();

    return (
        <div
            className={`${STYLES.fontSize[options.fontSize]} ${
                STYLES.leading[options.leading]
            } cv-responsive bg-${cp}-light px-8 py-2 text-${cp}-dark font-roboto-mono font-semibold`}
        >
            {/* Header */}
            <div className={`col-span-4 mb-16`}>
                {data.map(
                    (section) =>
                        section.id === "0" && (
                            <Section {...{ ...section, title: "" }} />
                        )
                )}
            </div>
            {/* Body */}
            <div className={`col-span-8 text-${cp}-dark`}>
                {data.map(
                    (section) => section.id > "0" && <Section {...section} />
                )}
            </div>
        </div>
    );
};

export default CVClassic;
