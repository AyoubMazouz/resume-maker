import React from "react";
import { useGlobalContext } from "../../GlobalContext";
import Section from "./Section";

const CVDefault = () => {
    const { cp, data } = useGlobalContext();
    return (
        <div className={`w-[210mm] mx-auto text-sm leading-5 font-montserrat`}>
            <div className={`px-4`}>
                {data.map((section) => (
                    <Section {...section} />
                ))}
            </div>
        </div>
    );
};

export default CVDefault;
