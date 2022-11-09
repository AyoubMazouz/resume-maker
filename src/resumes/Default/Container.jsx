import React from "react";
import { useGlobalContext } from "../../GlobalContext";

const Container = ({ content, title }) => {
    const { cp } = useGlobalContext();

    const getTitle = () =>
        title.length <= 1 ? null : (
            <div
                className={`text-${cp}-dark px-3 uppercase text-lg border-t-2 border-b-2 border-${cp}-primary font-semibold mb-2`}
            >
                {title}
            </div>
        );

    if (content.type === "header")
        return (
            <div className="grid grid-cols-12">
                <img
                    src={content.data.img}
                    className="h-[188px] shadow col-span-4 rounded-lg"
                />
                <div
                    className={`col-span-8 flex flex-col justify-between text-${cp}-light mt-[-.35rem]`}
                >
                    <div>
                        <div className={`text-4xl space-x-2 text-${cp}-light`}>
                            <span className="font-semibold">
                                {content.data.fullName[0]}
                            </span>
                            <span>{content.data.fullName[1]}</span>
                        </div>
                        <div
                            className={`text-xl capitalize mt-[-.25rem] text-${cp}-secondary`}
                        >
                            {content.data.title}
                        </div>
                    </div>
                    <div className="flex flex-col flex-wrap gap-y-1">
                        {content.data.details.map((detail) => (
                            <div
                                className={`bg-${cp}-light rounded px-2 py-1 text-${cp}-primary`}
                            >
                                {detail}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );

    if (content.type === "date_list")
        return (
            <div className="space-y-1.5">
                {getTitle()}
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
            <div>
                {getTitle()}
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
                {getTitle()}
                <ul className="list-disc">
                    {content.data.map((items) => (
                        <li className="flex flex-wrap gap-x-2">
                            <span className="capitalize">
                                {items[0] && items[0] + ": "}
                                <span
                                    className={`text-${cp}-dark font-semibold`}
                                >
                                    {items[1].join(", ")}.
                                </span>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    else if (content.type === "meter")
        return (
            <div>
                <div className="mb-6">{getTitle()}</div>
                {content.data.map((item) => (
                    <div className="-my-4">
                        <span>{item[0]}</span>
                        <div
                            className={`relative bg-${cp}-secondary h-2 w-full  rounded-full`}
                        >
                            <div
                                className={`bg-${cp}-primary h-full w-${item[1]} absolute top-0 left-0 rounded-full`}
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
