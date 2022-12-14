import React from "react";
import { useGlobalContext } from "../../GlobalContext";
import Container from "./Container";

const Section = ({ title, content, type, id }) => {
    const { cp } = useGlobalContext();
    return (
        <div className={`relative pt-4 pb-3`}>
            {title && (
                <div
                    className={`${
                        ["0", "5", "-1"].includes(id)
                            ? `text-${cp}-dark bg-${cp}-light my-6`
                            : `text-${cp}-light bg-${cp}-primary mb-2`
                    } px-4 py-1 rounded-sm shadow-sm uppercase text-xl font-semibold`}
                >
                    {title}
                </div>
            )}
            <Container content={content} type={type} />
        </div>
    );
};

export default Section;
