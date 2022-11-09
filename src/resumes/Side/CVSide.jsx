import React from "react";
import { d } from "../../data";
import { useGlobalContext } from "../../GlobalContext";
import Section from "./Section";

const CVSide = () => {
    const { cp } = useGlobalContext();
    return (
        <div
            className={`w-[210mm] h-[295mm] mx-auto bg-${cp}-light text-sm text-${cp}-light leading-5 grid grid-cols-12 font-montserrat font-semibold`}
        >
            {/* Header */}
            <div
                className={`col-span-4 bg-${cp}-primary px-4 py-12 overflow-hidden`}
            >
                {d.map((section) =>
                    section.pos === "head" ? <Section {...section} /> : null
                )}
            </div>
            {/* Body */}
            <div className={`col-span-8 px-4 py-12 text-${cp}-dark`}>
                {d.map((section) =>
                    section.pos === "body" ? <Section {...section} /> : null
                )}
            </div>
        </div>
    );
};

export default CVSide;
