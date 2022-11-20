import React from "react";
import Container from "./Container";
import { useGlobalContext } from "../../GlobalContext";

const Section = ({ title, content, type }) => {
    const { cp } = useGlobalContext();

    return (
        <div className={`py-3`}>
            {title && (
                <div className={`text-${cp}-dark uppercase text-lg font-bold`}>
                    {title}
                </div>
            )}
            <div className="mt-2">
                <Container content={content} type={type} />
            </div>
        </div>
    );
};

export default Section;
