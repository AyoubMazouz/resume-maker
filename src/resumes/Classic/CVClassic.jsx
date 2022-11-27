import React from "react";
import { useGlobalContext } from "../../GlobalContext";
import Section from "./Section";

const CVClassic = () => {
    const { cp, data, options } = useGlobalContext();

    const styles = {
        fontSize: {
            0: "text-xs",
            1: "text-sm",
            2: "text-base",
            3: "text-lg",
        },
        leading: {
            0: "leading-4",
            1: "leading-5",
            2: "leading-6",
            3: "leading-7",
            4: "leading-8",
        },
    };

    return (
        <div
            className={`${styles.fontSize[options.fontSize]} ${
                styles.leading[options.leading]
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
