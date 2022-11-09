import React from "react";
import { d } from "../../data";
import { useGlobalContext } from "../../GlobalContext";
import Section from "./Section";

const CVDefault = () => {
    const { cp } = useGlobalContext();
    return (
        <div
            className={`w-[210mm] h-[295mm] mx-auto bg-${cp}-light text-sm text-${cp}-dark leading-5 font-montserrat`}
        >
            {/* Header */}
            <div className={`grid grid-cols-12 bg-${cp}-primary px-8 py-4`}>
                <img
                    src="/assets/profile.jpg"
                    className="h-[188px] shadow col-span-4 rounded-lg"
                />
                <div
                    className={`col-span-8 flex flex-col justify-between text-${cp}-light mt-[-.35rem]`}
                >
                    <div>
                        <div className={`text-4xl space-x-2 text-${cp}-light`}>
                            <span className="font-semibold">
                                {d.head.fullName[0]}
                            </span>
                            <span>{d.head.fullName[1]}</span>
                        </div>
                        <div
                            className={`text-xl capitalize mt-[-.25rem] text-${cp}-secondary`}
                        >
                            {d.head.title}
                        </div>
                    </div>
                    <div className="flex flex-col flex-wrap gap-y-1">
                        {d.head.details.map((detail) => (
                            <div
                                className={`bg-${cp}-light rounded px-2 py-1 text-${cp}-primary`}
                            >
                                {detail}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Formation */}
            {d.body.map((section) => (
                <Section {...section} />
            ))}
        </div>
    );
};

export default CVDefault;
