import React, { useEffect } from "react";
import { useGlobalContext } from "../../GlobalContext";
import Section from "./Section";

const CVSimple = () => {
    const { cp, data } = useGlobalContext();

    const [main, setMain] = React.useState([]);
    const [side, setSide] = React.useState([]);

    useEffect(() => {
        const [main, side] = [[], []];
        data.forEach((section) => {
            if (section.id === "0")
                side.push({
                    ...section,
                    type: "details",
                    id: "-1",
                    title: "details",
                });
            if (["4", "5"].includes(section.id) === false) main.push(section);
            else side.push(section);
        });
        setMain(main);
        setSide(side);
        console.log(side);
    }, [data]);
    return (
        <div
            className={`w-[210mm] h-[295mm] mx-auto bg-${cp}-light text-sm text-${cp}-light grid grid-cols-12 font-montserrat leading-4 font-[montserrat]`}
        >
            {/* Body */}
            <div className={`col-span-8 pl-12 pr-4 py-8 text-${cp}-dark`}>
                {main.map((section) => (
                    <Section {...section} />
                ))}
            </div>
            {/* Header */}
            <div
                className={`col-span-4 border-l-2 border-${cp}-dark border-opacity-[15%] pr-12 pl-4 py-8 overflow-hidden space-y-12`}
            >
                {side.map((section) => (
                    <Section {...section} />
                ))}
            </div>
        </div>
    );
};

export default CVSimple;
