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
            <div className="mb-6">
                <div className="w-full shadow col-span-4 overflow-hidden rounded-sm">
                    <div
                        className={`text-4xl text-center text-${cp}-light uppercase`}
                    >
                        <div className="font-semibold text-center">
                            {content.firstName}
                        </div>
                        <div className="">{content.lastName}</div>
                    </div>
                    <img
                        src={content.img}
                        className="h-full w-full object-cover aspect-square rounded mt-3"
                    />
                </div>
                <div className={`uppercase text-center mt-2 font-bold`}>
                    {content.title}
                </div>
            </div>
        );
    else if (type === "details")
        return (
            <div className="flex flex-col flex-wrap gap-y-3 font-semibold underline">
                <div className="flex gap-x-2 items-end">
                    <ICPerson
                        className={`text-2xl text-${cp}-dark scale-[.9]`}
                    />
                    {content.age}
                </div>
                <div className="flex gap-x-2 items-end">
                    <ICPhone className={`text-2xl text-${cp}-dark`} />{" "}
                    {content.phone}
                </div>
                <div className="flex gap-x-2 items-end">
                    <ICEmail
                        className={`text-2xl text-${cp}-dark scale-[1.1] mt-0.5`}
                    />{" "}
                    {content.email}
                </div>
                <div className="flex gap-x-2 items-end">
                    <ICLocation
                        className={`text-2xl text-${cp}-dark scale-[1.25] mb-0.5`}
                    />
                    {content.address}
                </div>
            </div>
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
            <div className="">
                <span className="font-semibold capitalize text-lg">
                    {item.name}
                </span>
                <div
                    className={`relative flex justify-between w-full rounded-full mt-1`}
                >
                    {new Array(6).fill(0).map((_, i) => {
                        if (i < item.level) {
                            return (
                                <div
                                    className={`bg-${cp}-dark h-2.5 w-8 rounded-sm shadow`}
                                ></div>
                            );
                        } else
                            return (
                                <div
                                    className={`bg-${cp}-secondary h-2.5 w-8 rounded-sm shadow`}
                                ></div>
                            );
                    })}
                </div>
                <div
                    className={`text-${cp}-secondary text-right uppercase text-[.60rem] underline`}
                >
                    {LEVEL_LABELS[item.level]}
                </div>
            </div>
        ));
};

export default Container;
