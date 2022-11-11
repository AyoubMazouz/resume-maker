import React from "react";
import Container from "./Container";
import { useGlobalContext } from "../../GlobalContext";

const Section = ({ title, contents, types }) => {
    const { cp } = useGlobalContext();

    let m = "space-y-6";

    if (types[0] === "date_list") m = "space-y-3";
    else if (types[0] === "slider") m = "space-y-3";

    return (
        <div className={`my-6 ${m}`}>
            {title && (
                <div
                    className={`px-3 uppercase text-lg font-semibold w-full bg-${cp}-primary text-${cp}-light rounded shadow`}
                >
                    {title}
                </div>
            )}
            {contents.map((cont, i) => (
                <Container content={cont} type={types[i]} index={i} />
            ))}
        </div>
    );
};

export default Section;
