import React from "react";
import { useGlobalContext } from "../../GlobalContext";
import { STYLES } from "../../data";

const LetterDefault = () => {
    const { cp, data, options } = useGlobalContext();

    let headData = data.filter((section) => section.id === "0");
    let letterData = data.filter((section) => section.id === "-1");

    if (letterData.length > 0 && headData.length > 0) {
        headData = headData[0].content;
        letterData = letterData[0].content;
    }

    console.log(letterData.paragraphs);

    return (
        <div
            className={`${STYLES.fontSize[options.fontSize]} ${
                STYLES.leading[options.leading]
            } cv bg-${cp}-light text-${cp}-dark font-semibold px-8 py-24`}
        >
            <div className="flex justify-between text-base font-medium">
                <div>
                    <div>{headData.age}</div>
                    <div>{headData.phone}</div>
                    <div>{headData.email}</div>
                    <div>{headData.address}</div>
                </div>
                <div className="text-end">
                    <div>{letterData.date}</div>
                    <div>{letterData.companyName}</div>
                </div>
            </div>
            <div className="mt-24 text-base">
                <span className={`text-${cp}-primary font-bold`}>Objet: </span>
                {letterData.subject}
            </div>
            <div className="my-16 space-y-3">
                {letterData.paragraphs &&
                    letterData.paragraphs.map((p) => (
                        <p className="indent-4">{p}</p>
                    ))}
            </div>
            <div>{letterData.signature}</div>
            <div className={`text-${cp}-primary text-lg mt-4`}>
                {headData.firstName + " " + headData.lastName}
            </div>
        </div>
    );
};

export default LetterDefault;
