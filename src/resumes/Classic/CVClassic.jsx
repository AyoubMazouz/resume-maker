import React from "react";
import { d } from "../../data";
import { useGlobalContext } from "../../GlobalContext";
import Section from "./Section";

const CVClassic = () => {
    const { cp } = useGlobalContext();
    return (
        <div
            className={`w-[210mm] h-[295mm] mx-auto my-1 bg-${cp}-light px-8 py-8 text-sm space-y-6 text-${cp}-dark font-dm leading-5`}
        >
            {/* Header */}
            <div className="grid grid-cols-12 mb-16">
                <img
                    src="/assets/profile.jpg"
                    className="h-[156px] shadow col-span-3"
                />
                <div className="col-span-9 flex flex-col justify-between">
                    <div>
                        <div
                            className={`text-5xl space-x-2 text-${cp}-primary font-lora`}
                        >
                            <span className="font-semibold">
                                {d.head.fullName[0]}
                            </span>
                            <span>{d.head.fullName[1]}</span>
                        </div>
                        <div className="text-xl capitalize font-lora">
                            {d.head.title}
                        </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-x-1">
                        {d.head.details.map((detail, index) => (
                            <>
                                <div>{detail}</div>
                                {index !== d.head.details.length - 1
                                    ? " | "
                                    : null}
                            </>
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

export default CVClassic;
