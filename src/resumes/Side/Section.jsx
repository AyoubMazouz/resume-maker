import React from "react";
import { useGlobalContext } from "../../GlobalContext";
import Container from "./Container";

const Section = ({ title, content, type }) => {
    const { cp } = useGlobalContext();
    return (
        <div className={`relative pt-4 pb-3`}>
            {title && (
                <div
                    className={`text-${cp}-dark uppercase text-xl font-semibold mb-2`}
                >
                    {title}
                </div>
            )}
            <Container content={content} type={type} />
        </div>
    );
};

export default Section;
