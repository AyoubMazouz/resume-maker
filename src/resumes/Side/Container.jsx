import React from "react";
import { useGlobalContext } from "../../GlobalContext";

const Container = ({ content, title }) => {
    const { cp } = useGlobalContext();

    if (content.type === "header")
        return (
            <>
                <img
                    src={content.data.img}
                    className="h-full shadow col-span-4"
                />
                <div className="text-center mt-8">
                    <div className={`text-3xl space-x-2 text-${cp}-light`}>
                        <span className="font-semibold">
                            {content.data.fullName[0]}
                        </span>
                        <span>{content.data.fullName[1]}</span>
                    </div>
                    <div className={`text-lg capitalize`}>
                        {content.data.title}
                    </div>
                </div>
                <div className="flex flex-col flex-wrap gap-y-1 mt-24">
                    <div className="text-2xl mb-4 font-semibold">Contact</div>
                    {content.data.details.map((detail) => (
                        <div>{detail}</div>
                    ))}
                </div>
            </>
        );
    else if (content.type === "date_list")
        return (
            <div className="space-y-1.5">
                <div
                    className={`text-${cp}-dark uppercase text-2xl font-semibold mb-2`}
                >
                    {title}
                </div>
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
            <div className="mb-4">
                <div
                    className={`text-${cp}-dark uppercase text-2xl font-semibold mb-2`}
                >
                    {title}
                </div>
                <ul className="list-disc pl-4">
                    {content.data.map((item) => (
                        <li>{item}</li>
                    ))}
                </ul>
            </div>
        );
    else if (content.type === "labels")
        return (
            <div>
                <div
                    className={`text-${cp}-dark uppercase text-2xl font-semibold mb-2`}
                >
                    {title}
                </div>
                <ul className="list-disc pl-4 font-semibold">
                    {content.data.map((items) => (
                        <li>
                            <div className="capitalize text-base">
                                {items[0] && items[0] + ": "}
                            </div>
                            <div className={`text-${cp}-primary`}>
                                {items[1].join(", ")}.
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    else if (content.type === "meter")
        return (
            <div>
                <div className={`text-${cp}-dark font-semibold text-2xl mb-6`}>
                    {title}
                </div>
                {content.data.map((item) => (
                    <div className="-my-4">
                        <span>{item[0]}</span>
                        <div
                            className={`relative bg-${cp}-secondary h-2 w-full  rounded-full`}
                        >
                            <div
                                className={`bg-${cp}-dark h-full w-${item[1]} absolute top-0 left-0 rounded-full`}
                            ></div>
                        </div>
                        <div
                            className={`text-${cp}-primary text-right uppercase text-[.60rem]`}
                        >
                            {item[2]}
                        </div>
                    </div>
                ))}
            </div>
        );
};

export default Container;
