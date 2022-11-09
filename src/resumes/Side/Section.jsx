import React from "react";
import Container from "./Container";

const Section = ({ title, content }) => {
    return (
        <div className={`relative pt-4 pb-3`}>
            {content.map((cont, i) => (
                <Container content={cont} title={i === 0 ? title : ""} />
            ))}
        </div>
    );
};

export default Section;
