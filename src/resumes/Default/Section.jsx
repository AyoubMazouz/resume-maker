import React from "react";
import Container from "./Container";
import { useGlobalContext } from "../../GlobalContext";

const Section = ({ title, contents, types }) => {
    const { cp } = useGlobalContext();

    let mb = "";

    if (types[0] === "slider") mb = "mb-6";

    return (
        <div className={`relative py-3`}>
            {title && (
                <div
                    className={`${mb} text-${cp}-dark px-3 uppercase text-lg border-t-2 border-b-2 border-${cp}-primary font-semibold`}
                >
                    {title}
                </div>
            )}
            {contents.map((cont, i) => (
                <Container content={cont} type={types[i]} />
            ))}
        </div>
    );
};

export default Section;
