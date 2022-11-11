import React from "react";
import { useGlobalContext } from "../../GlobalContext";
import Section from "./Section";

const CVDefault = () => {
    const { cp, data: d } = useGlobalContext();
    return (
        <div
            className={`w-[210mm] mx-auto bg-${cp}-light text-sm text-${cp}-dark leading-5 font-montserrat`}
        >
            <div className={`px-4`}>
                {d.map((section) => (
                    <Section {...section} />
                ))}
            </div>
        </div>
    );
};

export default CVDefault;
