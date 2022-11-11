import React from "react";
import { useGlobalContext } from "../../GlobalContext";
import Section from "./Section";

const CVClassic = () => {
    const { cp, data: d } = useGlobalContext();
    return (
        <div
            className={`w-[210mm] h-[295mm] mx-auto bg-${cp}-light px-8 py-2 text-sm text-${cp}-dark font-dm leading-5`}
        >
            {/* Header */}
            <div className={`col-span-4 mb-16`}>
                {d.map((section) =>
                    section.location === "head" ? (
                        <Section {...section} />
                    ) : null
                )}
            </div>
            {/* Body */}
            <div className={`col-span-8 text-${cp}-dark`}>
                {d.map((section) =>
                    section.location === "body" ? (
                        <Section {...section} />
                    ) : null
                )}
            </div>
        </div>
    );
};

export default CVClassic;
