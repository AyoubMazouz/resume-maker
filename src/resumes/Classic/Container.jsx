import React from "react";
import { useGlobalContext } from "../../GlobalContext";

const Container = ({ content }) => {
    const { cp } = useGlobalContext();

    if (content.type === "header")
        return (
            <div className="grid grid-cols-12 -mx-4">
                <img
                    src={content.data.img}
                    className="h-[156px] shadow col-span-4"
                />
                <div className="col-span-8 flex flex-col justify-between">
                    <div>
                        <div
                            className={`text-5xl space-x-2 text-${cp}-primary font-lora`}
                        >
                            <span className="font-semibold">
                                {content.data.fullName[0]}
                            </span>
                            <span>{content.data.fullName[1]}</span>
                        </div>
                        <div className="text-xl capitalize font-lora">
                            {content.data.title}
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-x-1">
                        {content.data.details.map((detail, index) => (
                            <>
                                <div>{detail}</div>
                                {index !== content.data.details.length - 1
                                    ? " | "
                                    : null}
                            </>
                        ))}
                    </div>
                </div>
            </div>
        );

    if (content.type === "date_list")
        return (
            <div className="space-y-1.5">
                {content.data.map((item) => (
                    <div className="grid grid-cols-12">
                        <span className="col-span-3">{item[0]}</span>
                        <span className="col-span-9">{item[1]}</span>
                    </div>
                ))}
            </div>
        );
    else if (content.type === "list")
        return (
            <ul className="list-disc pl-4">
                {content.data.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        );
    else if (content.type === "labels")
        return (
            <ul className="list-disc">
                {content.data.map((items) => (
                    <li className="flex flex-wrap gap-x-2">
                        <span className="capitalize">
                            {items[0] && items[0] + ": "}
                            <span
                                className={`text-${cp}-primary font-semibold`}
                            >
                                {items[1].join(", ")}
                            </span>
                        </span>
                    </li>
                ))}
            </ul>
        );
    else if (content.type === "meter")
        return (
            <div>
                {content.data.map((item) => (
                    <div className="-my-3">
                        <span>{item[0]}</span>
                        <div
                            className={`relative bg-${cp}-secondary h-2 w-full`}
                        >
                            <div
                                className={`bg-${cp}-dark h-full w-${item[1]} absolute top-0 left-0`}
                            ></div>
                        </div>
                        <div
                            className={`text-${cp}-dark text-right uppercase text-[.60rem]`}
                        >
                            {item[2]}
                        </div>
                    </div>
                ))}
            </div>
        );
};

export default Container;
