import React from "react";
import { LEVEL_LABELS } from "../../data";
import { useGlobalContext } from "../../GlobalContext";

const Container = ({ content, type }) => {
    const { cp } = useGlobalContext();

    if (type === "header")
        return (
            <>
                <div className="w-full shadow col-span-4">
                    <img
                        src={content.img}
                        className="h-full w-full object-cover aspect-square"
                    />
                </div>
                <div className="text-center mt-8">
                    <div className={`text-3xl space-x-2 text-${cp}-light`}>
                        <span className="font-semibold">
                            {content.firstName}
                        </span>
                        <span>{content.lastName}</span>
                    </div>
                    <div className={`text-lg capitalize`}>{content.title}</div>
                </div>
                <div className="flex flex-col flex-wrap gap-y-1 my-24">
                    <div
                        className={`text-2xl mb-2 font-semibold text-${cp}-secondary`}
                    >
                        Contact
                    </div>
                    <div>{content.age}</div>
                    <div>{content.phone}</div>
                    <div>{content.email}</div>
                    <div>{content.address}</div>
                </div>
            </>
        );
    else if (type === "date_list")
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
            <ul className="list-disc pl-4 font-semibold">
                <li className={`text-${cp}-primary`}>{content.join(", ")}.</li>
            </ul>
        );
    else if (type === "slider")
        return content.map((item) => (
            <div className="-my-3">
                <span>{item.name}</span>
                <div
                    className={`relative bg-${cp}-secondary h-2 w-full  rounded-full`}
                >
                    <div
                        className={`bg-${cp}-dark h-full w-${
                            item.level === "6" ? "full" : item.level + "/6"
                        } absolute top-0 left-0 rounded-full`}
                    ></div>
                </div>
                <div
                    className={`text-${cp}-secondary text-right uppercase text-[.60rem]`}
                >
                    {LEVEL_LABELS[item.level]}
                </div>
            </div>
        ));
};

export default Container;
