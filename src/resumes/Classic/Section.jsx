import React from "react";
import { useGlobalContext } from "../../GlobalContext";
import Container from "./Container";

const Section = ({ title, content, type }) => {
    const { cp } = useGlobalContext();

    return (
        <div
            className={`relative px-4 py-5 pb-2 my-6 ${
                title && "border-[3px] border-" + cp + "-dark"
            }`}
        >
            {title && (
                <div
                    className={`absolute -top-5 right-[50%] translate-x-[50%] bg-${cp}-dark text-${cp}-secondary px-6 py-1 uppercase text-base font-['bodoni-moda']`}
                >
                    {title}
                </div>
            )}
            <Container content={content} type={type} />
        </div>
    );
};

export default Section;
