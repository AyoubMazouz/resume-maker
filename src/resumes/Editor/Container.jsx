import React from "react";
import { AVAILABLE_TYPES, ICAddItem, ICAddSection } from "../../data";
import { useGlobalContext } from "../../GlobalContext";
import useEditor from "../../useEditor";

const Container = ({ content, type, id }) => {
    const { cp } = useGlobalContext();
    const {
        headerHandler,
        dateListHandler,
        listHandler,
        sliderHandler,
        imgHandler,
        addSection,
    } = useEditor();

    const [newSectionType, setNewSectionType] = React.useState("date_list");

    if (type === "add_section")
        return (
            <div
                className={`px-3 w-full h-10 font-semibold bg-${cp}-primary text-gray-900 rounded shadow flex justify-between items-center`}
            >
                <div className="text-lg font-semibold">Add New Section</div>
                <select
                    className="input font-bold bg-primary"
                    name="typeSelector"
                    id={id}
                    value={newSectionType}
                    onChange={(e) => setNewSectionType(e.target.value)}
                >
                    {AVAILABLE_TYPES.map((type) => (
                        <option value={type}>{type}</option>
                    ))}
                </select>
                <ICAddSection
                    className="icon hover:text-success"
                    onClick={() => addSection(newSectionType)}
                />
            </div>
        );

    if (type === "header")
        return (
            <div className="grid grid-cols-4 gap-x-4 gap-y-3">
                <div className="group relative shadow-md col-span-1 rounded-lg overflow-hidden h-[188px] w-[188px]">
                    <img
                        src={content.img}
                        className="w-full h-full object-cover aspect-square opacity-25"
                    />
                    <input
                        type="file"
                        onChange={imgHandler}
                        className="absolute z-[3] top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] space-y-2 group-hover:text-success transition duration-300">
                        <ICAddItem className="icon text-4xl mx-auto" />
                        <div className="text-lg font-semibold">Add Image</div>
                    </div>
                </div>
                <div className="col-span-3 grid grid-cols-2 gap-x-4 gap-y-3 ml-3">
                    <div className="col-span-1 input-div">
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            id={id}
                            className="input capitalize"
                            name="firstName"
                            type="text"
                            placeholder="e.g. John"
                            value={content.firstName}
                            onChange={headerHandler}
                        />
                    </div>
                    <div className="col-span-1 input-div">
                        <label htmlFor="lastName">Last Name:</label>
                        <input
                            id={id}
                            className="input capitalize"
                            name="lastName"
                            type="text"
                            placeholder="e.g. Smith"
                            value={content.lastName}
                            onChange={headerHandler}
                        />
                    </div>
                    <div className="col-span-1 input-div">
                        <label htmlFor="age">Age:</label>
                        <input
                            className="input capitalize"
                            id={id}
                            placeholder="e.g. 22 Ans"
                            name="age"
                            type="text"
                            value={content.age}
                            onChange={headerHandler}
                        />
                    </div>
                    <div className="col-span-1 input-div">
                        <label htmlFor="phone">Phone:</label>
                        <input
                            className="input"
                            id={id}
                            name="phone"
                            type="text"
                            placeholder="e.g. 07 70 70 70 70"
                            value={content.phone}
                            onChange={headerHandler}
                        />
                    </div>
                    <div className="col-span-2 input-div">
                        <label htmlFor="title">Title:</label>
                        <input
                            className="input capitalize"
                            id={id}
                            name="title"
                            type="text"
                            placeholder="e.g. Software Developer"
                            value={content.title}
                            onChange={headerHandler}
                        />
                    </div>
                </div>
                <div className="col-span-2 input-div">
                    <label htmlFor="email">Email</label>
                    <input
                        className="input"
                        id={id}
                        name="email"
                        type="text"
                        placeholder="e.g. email@mail.com"
                        value={content.email}
                        onChange={headerHandler}
                    />
                </div>
                <div className="col-span-2 input-div">
                    <label htmlFor="address">Address</label>
                    <input
                        className="input"
                        id={id}
                        name="address"
                        type="text"
                        placeholder="e.g. Appartement no. 2 23 RUE DU SEBOU 93150..."
                        value={content.address}
                        onChange={headerHandler}
                    />
                </div>
            </div>
        );

    if (type === "date_list")
        return content.map((item, index) => (
            <div className="grid grid-cols-12 gap-x-4 -mt-20">
                <div className="col-span-3 input-div">
                    {index === 0 && <label htmlFor="date">Date</label>}
                    <input
                        id={id}
                        className="input"
                        name="date"
                        type="text"
                        placeholder="e.g. jun 2021 - fev 2022"
                        value={item.date}
                        onChange={(e) => dateListHandler(e, index)}
                    />
                </div>
                <div className="col-span-9 input-div">
                    {index === 0 && <label htmlFor="text">Text</label>}
                    <input
                        id={id}
                        className="input"
                        name="text"
                        type="text"
                        placeholder="..."
                        value={item.text}
                        onChange={(e) => dateListHandler(e, index)}
                    />
                </div>
            </div>
        ));
    else if (type === "list")
        return (
            <div className="input-div gap-y-3 gap-x-4 grid grid-cols-2">
                {content.map((item, index) => (
                    <input
                        id={id}
                        className="input"
                        type="text"
                        placeholder="..."
                        value={item}
                        onChange={(e) => listHandler(e, index)}
                    />
                ))}
            </div>
        );
    else if (type === "labels")
        return (
            <div className="grid grid-cols-4 flex-wrap gap-3">
                {content.map((item, index) => (
                    <div className="input-div col-span-1">
                        <input
                            className="input"
                            id={id}
                            type="text"
                            placeholder="..."
                            value={item}
                            onChange={(e) => listHandler(e, index)}
                        />
                    </div>
                ))}
            </div>
        );
    else if (type === "slider")
        return content.map((item, index) => (
            <div className="grid grid-cols-4 flex-wrap gap-3">
                <div className="input-div col-span-1">
                    <input
                        className="input"
                        id={id}
                        name="name"
                        type="text"
                        placeholder="e.g Anglais..."
                        value={item.name}
                        onChange={(e) => sliderHandler(e, index)}
                    />
                </div>
                <input
                    id={id}
                    name="level"
                    className="input col-span-3"
                    type="range"
                    min="0"
                    max="6"
                    step="1"
                    value={item.level.replace("/6", "")}
                    onChange={(e) => sliderHandler(e, index)}
                />
            </div>
        ));
};

export default Container;
