import React from "react";
import { useGlobalContext } from "../../GlobalContext";
import Section from "./Section";

const CVClassic = () => {
    const { cp, data } = useGlobalContext();
    return (
        <div
            className={`w-[210mm] h-[295mm] mx-auto bg-${cp}-light px-8 py-2 text-sm text-${cp}-dark leading-5 font-mono font-semibold`}
        >
            {/* Header */}
            <div className={`col-span-4 mb-16`}>
                {data.map(
                    (section) => section.id === "0" && <Section {...section} />
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
