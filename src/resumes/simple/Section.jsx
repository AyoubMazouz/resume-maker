import React from "react";
import { useGlobalContext } from "../../GlobalContext";
import Container from "./Container";

const Section = ({ title, content, type, id }) => {
    const { cp } = useGlobalContext();
    return (
        <div className={`relative pt-4 pb-3`}>
            {title && (
                <div
                    className={`text-${cp}-primary capitalize text-xl font-bold mb-2`}
                >
                    {title}
                </div>
            )}
            <div
                className={
                    ["-1", "0", "4", "5"].includes(id)
                        ? ""
                        : `pl-6 border-l-2 border-${cp}-dark border-opacity-[15%]`
                }
            >
                <Container content={content} type={type} />
            </div>
        </div>
    );
};

export default Section;
