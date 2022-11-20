import React from "react";
import { LEVEL_LABELS } from "../../data";
import { useGlobalContext } from "../../GlobalContext";

const Container = ({ content, type }) => {
    const { cp } = useGlobalContext();

    if (type === "header")
        return (
            <div className="space-y-3">
                <div>{content.age}</div>
                <div>{content.phone}</div>
                <div>{content.email}</div>
                <div>{content.address}</div>
            </div>
        );

    if (type === "date_list")
        return (
            <div className="space-y-3">
                {content.map((item) => (
                    <div className="">
                        <div className={`text-${cp}-primary font-black`}>
                            {item.date}
                        </div>
                        <div className="">{item.text}</div>
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
                {content.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        );
    else if (type === "slider")
        return (
            <div className="space-y-3">
                {content.map((item) => (
                    <div className="flex justify-between items-center gap-x-3">
                        <div>{item.name}</div>
                        <div className="flex gap-x-2">
                            {new Array(6).fill(0).map((_, i) => {
                                if (i < item.level) {
                                    return (
                                        <div
                                            className={`bg-${cp}-primary h-3 w-3 rounded-full shadow`}
                                        ></div>
                                    );
                                } else
                                    return (
                                        <div
                                            className={`bg-${cp}-dark h-3 w-3 rounded-full shadow`}
                                        ></div>
                                    );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        );
};

export default Container;
