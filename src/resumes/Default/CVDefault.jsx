import React from "react";
import { useGlobalContext } from "../../GlobalContext";
import Section from "./Section";

const CVDefault = () => {
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
            } cv-responsive bg-${cp}-light text-${cp}-dark font-semibold`}
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
