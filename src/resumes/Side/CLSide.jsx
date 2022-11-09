import React from "react";
import { d } from "../../data";
import { useGlobalContext } from "../../GlobalContext";

const CLSide = () => {
    const { cp } = useGlobalContext();
    return (
        <div
            className={`w-[210mm] h-[297mm] mx-auto my-1 shadow-xl bg-${cp}-light px-8 py-12 text-sm space-y-24 text-${cp}-dark font-montserrat`}
        >
            {/* Head */}
            <div className="flex justify-between">
                <div>
                    <div className={`text-${cp}-primary font-bold text-base`}>
                        {d.head.fullName}
                    </div>
                    <ul className="">
                        {d.head.details.map((detail) => (
                            <li>{detail}</li>
                        ))}
                    </ul>
                </div>
                <div className="text-right max-w-[16ch]">
                    <div>{d.letter.date}</div>
                    <div>{d.letter.companyName}</div>
                </div>
            </div>
            {/* Body */}
            <div className="space-y-2">
                <div className={`text-${cp}-primary font-bold text-base mb-12`}>
                    Object: <span>{d.letter.subject}</span>
                </div>
                <p className={`font-semibold text-${cp}-primary pb-2`}>
                    {d.letter.recipient}
                </p>
                {d.letter.content.map((text) => (
                    <p className="indent-4">{text}</p>
                ))}
                <div
                    className={`text-${cp}-primary font-bold text-right pt-12`}
                >
                    {`${d.head.fullName[0]} ${d.head.fullName[1]}`}
                </div>
            </div>
        </div>
    );
};

export default CLSide;
