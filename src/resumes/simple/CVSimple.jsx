import React, { useEffect } from "react";
import { useGlobalContext } from "../../GlobalContext";
import Section from "./Section";

const CVSimple = () => {
    const { cp, data, options } = useGlobalContext();

    const [main, setMain] = React.useState([]);
    const [side, setSide] = React.useState([]);

    const styles = {
        fontSize: {
            0: "text-xs",
            1: "text-sm",
            2: "text-base",
            3: "text-lg",
        },
        leading: {
            0: "leading-4",
            1: "leading-5",
            2: "leading-6",
            3: "leading-7",
            4: "leading-8",
        },
    };

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
            className={`${styles.fontSize[options.fontSize]} ${
                styles.leading[options.leading]
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
