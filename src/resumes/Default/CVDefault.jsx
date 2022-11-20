import React from "react";
import { useGlobalContext } from "../../GlobalContext";
import Section from "./Section";

const CVDefault = () => {
    const { cp, data } = useGlobalContext();
    return (
        <div
            className={`w-[210mm] h-[295mm] mx-auto bg-${cp}-light text-sm text-${cp}-dark font-semibold`}
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
