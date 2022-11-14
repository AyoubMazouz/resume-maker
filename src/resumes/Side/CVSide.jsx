import React from "react";
import { useGlobalContext } from "../../GlobalContext";
import Section from "./Section";

const CVSide = () => {
    const { cp, data } = useGlobalContext();
    return (
        <div
            className={`w-[210mm] h-[295mm] mx-auto bg-${cp}-light text-sm text-${cp}-light leading-5 grid grid-cols-12 font-montserrat font-semibold`}
        >
            {/* Header */}
            <div
                className={`col-span-4 bg-${cp}-primary px-4 py-12 overflow-hidden`}
            >
                {data.map(
                    (section) =>
                        ["header", "slider"].includes(section.type) && (
                            <Section {...{ ...section, title: "" }} />
                        )
                )}
            </div>
            {/* Body */}
            <div className={`col-span-8 px-4 py-12 text-${cp}-dark`}>
                {data.map(
                    (section) =>
                        ["header", "slider"].includes(section.type) ===
                            false && <Section {...section} />
                )}
            </div>
        </div>
    );
};

export default CVSide;
