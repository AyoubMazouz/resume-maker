import React from "react";
import { useGlobalContext } from "../../GlobalContext";
import Section from "./Section";

const CVDefault = () => {
    const { cp, data } = useGlobalContext();
    return (
        <div
            className={`max-w-[210mm] w-full mx-auto rounded-lg shadow-lg print:hidden text-sm leading-5 font-montserrat `}
        >
            <div className={`px-4`}>
                {data.map((section) => (
                    <Section {...section} />
                ))}
            </div>
        </div>
    );
};

export default CVDefault;
