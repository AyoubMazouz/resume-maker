import React from "react";
import { useGlobalContext } from "../../GlobalContext";
import useEditor from "../../useEditor";

const Container = ({ content, type, index }) => {
    const { cp } = useGlobalContext();
    const {
        headerValuesHandler,
        dateListHandler,
        listHandler,
        labelHandler,
        sliderHandler,
    } = useEditor();

    if (type === "header")
        return (
            <div className="grid grid-cols-3 gap-x-4 gap-y-3">
                {/* <img
                    src={content.img}
                    className="h-[188px] shadow col-span-3 rounded-lg"
                /> */}
                <div className="col-span-1 input-div">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        name="firstName"
                        type="text"
                        value={content.firstName}
                        onChange={headerValuesHandler}
                    />
                </div>
                <div className="col-span-1 input-div">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        name="lastName"
                        type="text"
                        value={content.lastName}
                        onChange={headerValuesHandler}
                    />
                </div>
                <div className="col-span-1 input-div">
                    <label htmlFor="title">Title:</label>
                    <input
                        name="title"
                        type="text"
                        value={content.title}
                        onChange={headerValuesHandler}
                    />
                </div>
                <div className="col-span-1 input-div">
                    <label htmlFor="age">Age:</label>
                    <input
                        name="age"
                        type="text"
                        value={content.age}
                        onChange={headerValuesHandler}
                    />
                </div>
                <div className="col-span-1 input-div">
                    <label htmlFor="phone">Phone:</label>
                    <input
                        name="phone"
                        type="text"
                        value={content.phone}
                        onChange={headerValuesHandler}
                    />
                </div>
                <div className="col-span-1 input-div">
                    <label htmlFor="email">Email</label>
                    <input
                        name="email"
                        type="text"
                        value={content.email}
                        onChange={headerValuesHandler}
                    />
                </div>
                <div className="col-span-3 input-div">
                    <label htmlFor="address">Address</label>
                    <input
                        name="address"
                        type="text"
                        value={content.address}
                        onChange={headerValuesHandler}
                    />
                </div>
            </div>
        );

    if (type === "date_list")
        return (
            <div className="grid grid-cols-12 gap-x-4 -mt-20">
                <div className="col-span-3 input-div">
                    <label htmlFor="date">Date</label>
                    <input
                        id={content.id}
                        name="date"
                        type="text"
                        value={content.date}
                        onChange={(e) => dateListHandler(e, index)}
                    />
                </div>
                <div className="col-span-9 input-div">
                    <label htmlFor="text">Text</label>
                    <input
                        id={content.id}
                        name="text"
                        type="text"
                        value={content.text}
                        onChange={(e) => dateListHandler(e, index)}
                    />
                </div>
            </div>
        );
    else if (type === "list")
        return (
            <div className="input-div gap-y-3 gap-x-4 grid grid-cols-2">
                {content.map((item, i) => (
                    <input
                        id={i}
                        type="text"
                        value={item}
                        onChange={(e) => listHandler(e, index)}
                    />
                ))}
            </div>
        );
    else if (type === "labels")
        return (
            <div className="grid grid-cols-4 flex-wrap gap-3">
                <div className="input-div w-full col-span-2">
                    <label htmlFor="label">Label</label>
                    <input
                        id={content.id}
                        className=""
                        name="label"
                        type="text"
                        value={content.label}
                        onChange={(e) => labelHandler(e, index)}
                    />
                </div>
                {content.values.map((cont, i) => (
                    <div className="input-div col-span-1">
                        <input
                            id={i}
                            type="text"
                            value={cont}
                            onChange={(e) => labelHandler(e, index)}
                        />
                    </div>
                ))}
            </div>
        );
    else if (type === "slider")
        return (
            <div className="grid grid-cols-4 flex-wrap gap-3">
                <div className="input-div col-span-1">
                    <input
                        id={index}
                        name="label"
                        type="text"
                        value={content.name}
                        onChange={(e) => sliderHandler(e, index)}
                    />
                </div>
                <input
                    id={index}
                    name={content.name}
                    className="col-span-3"
                    type="range"
                    min="0"
                    max="6"
                    step="1"
                    value={content.level.replace("/6", "")}
                    onChange={(e) => sliderHandler(e, index)}
                />
            </div>
        );
};

export default Container;
