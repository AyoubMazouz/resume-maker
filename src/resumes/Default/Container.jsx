import React from "react";
import { useGlobalContext } from "../../GlobalContext";

const Container = ({ content, type }) => {
    const { cp } = useGlobalContext();

    if (type === "header")
        return (
            <div className="grid grid-cols-12">
                <img
                    src={content.img}
                    className="h-[188px] shadow col-span-4 rounded-lg"
                />
                <div
                    className={`col-span-8 flex flex-col justify-between text-${cp}-light mt-[-.35rem]`}
                >
                    <div>
                        <div className={`text-4xl space-x-2 text-${cp}-light`}>
                            <span className="font-semibold">
                                {content.firstName}
                            </span>
                            <span>{content.lastName}</span>
                        </div>
                        <div
                            className={`text-xl capitalize mt-[-.25rem] text-${cp}-secondary`}
                        >
                            {content.title}
                        </div>
                    </div>
                    <div className="flex flex-col flex-wrap gap-y-1">
                        <div
                            className={`bg-${cp}-light rounded px-2 py-1 text-${cp}-primary`}
                        >
                            {content.age}
                        </div>
                        <div
                            className={`bg-${cp}-light rounded px-2 py-1 text-${cp}-primary`}
                        >
                            {content.phone}
                        </div>
                        <div
                            className={`bg-${cp}-light rounded px-2 py-1 text-${cp}-primary`}
                        >
                            {content.email}
                        </div>
                        <div
                            className={`bg-${cp}-light rounded px-2 py-1 text-${cp}-primary`}
                        >
                            {content.address}
                        </div>
                    </div>
                </div>
            </div>
        );

    if (type === "date_list")
        return (
            <div className="grid grid-cols-12 my-1.5">
                <span className="col-span-3">{content.date}</span>
                <span className="col-span-9">{content.text}</span>
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
            <div className="-my-4">
                <span>{content.name}</span>
                <div
                    className={`relative bg-${cp}-secondary h-2 w-full  rounded-full`}
                >
                    <div
                        className={`bg-${cp}-primary h-full w-${
                            content.level === "6"
                                ? "full"
                                : content.level + "/6"
                        } absolute top-0 left-0 rounded-full`}
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
