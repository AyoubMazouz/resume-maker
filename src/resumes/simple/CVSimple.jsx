import React, { useEffect } from "react";
import { useGlobalContext } from "../../GlobalContext";
import Section from "./Section";
import { STYLES } from "../../data";

const CVSimple = () => {
    const { cp, data, options } = useGlobalContext();

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
            className={`${STYLES.fontSize[options.fontSize]} ${
                STYLES.leading[options.leading]
            } cv-responsive bg-${cp}-light text-${cp}-light grid grid-cols-12 font-montserrat`}
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
