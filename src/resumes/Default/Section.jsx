import React from "react";
import Container from "./Container";
import { useGlobalContext } from "../../GlobalContext";

const Section = ({ title, content, type }) => {
    const { cp } = useGlobalContext();

    let mb = "";

    if (type === "slider") mb = "mb-6";

    return (
        <div className={`relative py-3`}>
            {title && (
                <div
                    className={`${mb} text-${cp}-dark px-3 uppercase text-lg border-t-2 border-b-2 border-${cp}-primary font-semibold`}
                >
                    {title}
                </div>
            )}
            <div className="px-4 mt-2">
                <Container content={content} type={type} />
            </div>
        </div>
    );
};

export default Section;
