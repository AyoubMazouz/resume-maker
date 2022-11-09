import React from "react";
import { useGlobalContext } from "../../GlobalContext";
import Container from "./Container";

const Section = ({ id, title, content }) => {
    const { cp } = useGlobalContext();

    return (
        <div
            className={`relative px-6 pt-6 pb-2 border-[3px] border-${cp}-dark`}
        >
            <div
                className={`absolute -top-5 right-[50%] translate-x-[50%] bg-${cp}-dark text-${cp}-secondary px-6 py-1 uppercase text-base font-['bodoni-moda']`}
            >
                {title}
            </div>
            {content.map((cont) => (
                <Container content={cont} />
            ))}
        </div>
    );
};

export default Section;
