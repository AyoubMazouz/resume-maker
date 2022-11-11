import React from "react";
import { useGlobalContext } from "../../GlobalContext";

const Container = ({ content, type }) => {
    const { cp } = useGlobalContext();

    if (type === "header")
        return (
            <div className="grid grid-cols-12 -mx-4">
                <img
                    src={content.img}
                    className="h-[156px] shadow col-span-4"
                />
                <div className="col-span-8 flex flex-col justify-between">
                    <div>
                        <div
                            className={`text-5xl space-x-2 text-${cp}-primary font-lora`}
                        >
                            <span className="font-semibold">
                                {content.firstName}
                            </span>
                            <span>{content.lastName}</span>
                        </div>
                        <div className="text-xl capitalize font-lora">
                            {content.title}
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-x-1">
                        <div>{content.age}</div>
                        <div>{content.phone}</div>
                        <div>{content.email}</div>
                        <div>{content.address}</div>
                    </div>
                </div>
            </div>
        );

    if (type === "date_list")
        return (
            <div className="space-y-1.5">
                {content.map((item) => (
                    <div className="grid grid-cols-12">
                        <span className="col-span-3">{item.date}</span>
                        <span className="col-span-9">{item.text}</span>
                    </div>
                ))}
            </div>
        );
    else if (type === "list")
        return (
            <ul className="list-disc pl-4">
                {content.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        );
    else if (type === "labels")
        return (
            <ul className="list-disc pl-4">
                <li>
                    {content.label && content.label + ": "}
                    <span className={`text-${cp}-dark font-semibold`}>
                        {content.values.join(", ")}.
                    </span>
                </li>
            </ul>
        );
    else if (type === "slider")
        return (
            <div className="-my-3">
                <span>{content.name}</span>
                <div className={`relative bg-${cp}-secondary h-2 w-full`}>
                    <div
                        className={`bg-${cp}-primary h-full w-${content.level} absolute top-0 left-0`}
                    ></div>
                </div>
                <div
                    className={`text-${cp}-primary text-right uppercase text-[.60rem]`}
                >
                    {content.label}
                </div>
            </div>
        );
};

export default Container;
