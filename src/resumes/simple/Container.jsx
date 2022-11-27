import React from "react";
import {
    ICEmail,
    ICLocation,
    ICPerson,
    ICPhone,
    LEVEL_LABELS,
} from "../../data";
import { useGlobalContext } from "../../GlobalContext";

const Container = ({ content, type }) => {
    const { cp } = useGlobalContext();

    if (type === "header")
        return (
            <div className="grid grid-cols-12 gap-x-4 items-center mb-8">
                <div className="rounded-full overflow-hidden shadow h-[88px] w-[88px] col-span-3">
                    <img
                        src={content.img}
                        className="h-full w-full object-cover aspect-square"
                    />
                </div>
                <div className="col-span-9 space-y-1">
                    <div className={`font-semibold text-2xl capitalize`}>
                        {content.firstName + " " + content.lastName}
                    </div>
                    <div className={`uppercase text-sm text-${cp}-primary`}>
                        {content.title}
                    </div>
                    <div className={`flex gap-x-1 items-center text-xs`}>
                        <ICLocation />
                        {content.address}
                    </div>
                </div>
            </div>
        );
    if (type === "details")
        return (
            <div className={`text-${cp}-dark space-y-4 text-sm`}>
                <div>{content.age}</div>
                <div>{content.phone}</div>
                <div>{content.email}</div>
            </div>
        );
    else if (type === "date_list")
        return (
            <div className="space-y-4">
                {content.map((item) => (
                    <div className="">
                        <div className={`text-${cp}-primary font-bold`}>
                            {item.date}
                        </div>
                        <div className="mt-2">{item.text}</div>
                    </div>
                ))}
            </div>
        );
    else if (type === "list")
        return (
            <ul className="space-y-4">
                {content.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        );
    else if (type === "labels")
        return (
            <ul className={`space-y-4 leading-4 text-${cp}-dark`}>
                {content.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        );
    else if (type === "slider")
        return (
            <div className="space-y-4">
                {content.map((item) => (
                    <div>
                        <div
                            className={`text-${cp}-dark mb-2 tracking-widest font-semibold`}
                        >
                            {item.name}
                        </div>
                        <div
                            className={`relative bg-${cp}-secondary h-[3px] w-full rounded-full overflow-hidden`}
                        >
                            <div
                                className={`bg-${cp}-primary h-full w-${
                                    item.level === "6"
                                        ? "full"
                                        : item.level + "/6"
                                } absolute top-0 left-0`}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        );
};

export default Container;
