import React from "react";
import { useGlobalContext } from "../../GlobalContext";
import Container from "./Container";

const Section = ({ id, title, content }) => {
    const { cp } = useGlobalContext();

    return (
        <div className={`relative px-8 pt-4 pb-3`}>
            <div
                className={`text-${cp}-dark px-3 uppercase text-lg border-t-2 border-b-2 border-${cp}-primary font-semibold mb-2`}
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
