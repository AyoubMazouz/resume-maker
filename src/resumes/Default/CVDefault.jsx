import React from "react";
import { useGlobalContext } from "../../GlobalContext";
import Section from "./Section";

const CVDefault = () => {
    const { cp, data: d } = useGlobalContext();
    return (
        <div
            className={`w-[210mm] h-[295mm] mx-auto bg-${cp}-light text-sm text-${cp}-dark leading-5 font-montserrat`}
        >
            {/* Header */}
            <div className={`col-span-4 bg-${cp}-primary px-4`}>
                {d.map((section) =>
                    section.location === "head" ? (
                        <Section {...section} />
                    ) : null
                )}
            </div>
            {/* Body */}
            <div className={`col-span-8 text-${cp}-dark px-4`}>
                {d.map((section) =>
                    section.location === "body" ? (
                        <Section {...section} />
                    ) : null
                )}
            </div>
        </div>
    );
};

export default CVDefault;
