import React from "react";
import { useGlobalContext } from "../../GlobalContext";
import Section from "./Section";

const CVNoImg = () => {
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

    React.useEffect(() => {
        const [main, side] = [[], []];
        data.forEach((section) => {
            if (section.id === "0") section.title = "details";
            if (["0", "4", "5"].includes(section.id) === false)
                main.push(section);
            else side.push(section);
        });
        setMain(main);
        setSide(side);
    }, [data]);

    return (
        <div
            className={`${styles.fontSize[options.fontSize]} ${
                styles.leading[options.leading]
            } cv-responsive bg-${cp}-light text-${cp}-dark font-montserrat font-semibold`}
        >
            {/* Header */}
            <div
                className={`col-span-full py-16 px-28 bg-${cp}-primary text-${cp}-light mb-6 overflow-hidden`}
            >
                {side.map(
                    (section) =>
                        section.id === "0" && (
                            <div
                                className={`border-[8px] border-${cp}-light relative pt-10 pb-14 text-center`}
                            >
                                <div className="text-3xl font-bold uppercase">
                                    {section.content.firstName +
                                        " " +
                                        section.content.lastName}
                                </div>
                                <div
                                    className={`bg-${cp}-light px-8 py-2 text-${cp}-primary text-base font-bold uppercase text-center absolute bottom-0 translate-y-[50%] translate-x-[50%] right-[50%]`}
                                >
                                    {section.content.title}
                                </div>
                            </div>
                        )
                )}
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className={`col-span-4 text-${cp}-dark px-6 space-y-6`}>
                    {side.map((section) => (
                        <Section {...section} />
                    ))}
                </div>
                <div className={`col-span-8 text-${cp}-dark px-6`}>
                    {main.map((section) => (
                        <Section {...section} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CVNoImg;
