import React from "react";
import { useGlobalContext } from "../../GlobalContext";
import Section from "./Section";
import { STYLES } from "../../data";

const CVSide = () => {
    const { cp, data, options } = useGlobalContext();

    const [main, setMain] = React.useState([]);
    const [side, setSide] = React.useState([]);

    React.useEffect(() => {
        const [main, side] = [[], []];
        data.forEach((section) => {
            if (["0", "5"].includes(section.id) === false) main.push(section);
            else side.push(section);
            if (section.id === "0") {
                side.push({
                    ...section,
                    type: "details",
                    id: "-1",
                    title: "details",
                });
                section.title = "";
            }
        });
        setMain(main);
        setSide(side);
    }, [data]);

    return (
        <div
            className={`${STYLES.fontSize[options.fontSize]} ${
                STYLES.leading[options.leading]
            } cv-responsive bg-${cp}-light text-${cp}-light grid grid-cols-12 font-roboto`}
        >
            {/* Header */}
            <div
                className={`col-span-4 bg-${cp}-primary px-4 py-12 overflow-hidden`}
            >
                {side.map((section) => (
                    <Section {...section} />
                ))}
            </div>
            {/* Body */}
            <div className={`col-span-8 px-4 py-12 text-${cp}-dark`}>
                {main.map((section) => (
                    <Section {...section} />
                ))}
            </div>
        </div>
    );
};

export default CVSide;
