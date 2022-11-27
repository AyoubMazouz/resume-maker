import React from "react";
import {
    AVAILABLE_TYPES,
    ICAddItem,
    ICAddSection,
    ICDeleteItem,
} from "../../data";
import { useGlobalContext } from "../../GlobalContext";
import useEditor from "../../useEditor";

const Container = ({ content, type, id }) => {
    const { cp, letterEnabled } = useGlobalContext();
    const {
        headerHandler,
        dateListHandler,
        listHandler,
        sliderHandler,
        imgHandler,
        letterHandler,
        addSection,
        deleteDateListItem,
        deleteListItem,
        deleteLetterParagraph,
    } = useEditor();

    const [newSectionType, setNewSectionType] = React.useState("date_list");

    if (type === "letter" && letterEnabled)
        return (
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                <div className="input-div">
                    <label className="">Subject</label>
                    <input
                        id={id}
                        className="input"
                        type="text"
                        placeholder="..."
                        name="subject"
                        disabled={!letterEnabled}
                        value={content.subject}
                        onChange={(e) => headerHandler(e)}
                    />
                </div>
                <div className="input-div">
                    <label className="col-span-full">Company Name</label>
                    <input
                        id={id}
                        className="input"
                        type="text"
                        placeholder="..."
                        name="companyName"
                        disabled={!letterEnabled}
                        value={content.companyName}
                        onChange={(e) => headerHandler(e)}
                    />
                </div>
                {content.paragraphs.map((p, index) => (
                    <div className="input-div grid grid-cols-12 gap-x-1 col-span-2">
                        {index === 0 && (
                            <label className="col-span-full">paragraphs</label>
                        )}
                        <input
                            id={id}
                            className="input col-span-11"
                            type="text"
                            placeholder="..."
                            value={p}
                            disabled={!letterEnabled}
                            onChange={(e) => letterHandler(e, index)}
                        />
                        <div className="col-span-2 sm:col-span-1 flex justify-end">
                            <ICDeleteItem
                                className="icon text-error"
                                onClick={(e) => deleteLetterParagraph(index)}
                            />
                        </div>
                    </div>
                ))}
            </div>
        );
    else if (type === "add_section")
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
    else if (type === "header")
        return (
            <div className="grid grid-cols-12 gap-x-4 gap-y-3">
                <div className="group relative shadow-md col-span-4 row-span-2 sm:row-span-3 md:row-span-4 rounded-lg overflow-hidden aspect-square">
                    <img
                        src={content.img}
                        className="w-full h-full object-cover opacity-25"
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
                <div className="col-span-8 sm:col-span-4 input-div">
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
                <div className="col-span-8 sm:col-span-4 input-div">
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
                <div className="col-span-6 sm:col-span-4 input-div">
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
                <div className="col-span-6 sm:col-span-4 input-div">
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
                <div className="col-span-6 sm:col-span-4 input-div">
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
                <div className="col-span-6 sm:col-span-4 input-div">
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
                <div className="col-span-full md:col-span-8 input-div">
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
    else if (type === "date_list")
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
                <div className="col-span-9 input-div relative">
                    {index === 0 && <label htmlFor="text">Text</label>}
                    <div className="grid grid-cols-12 gap-x-1 items-center">
                        <input
                            id={id}
                            className="input col-span-10 sm:col-span-11"
                            name="text"
                            type="text"
                            placeholder="..."
                            value={item.text}
                            onChange={(e) => dateListHandler(e, index)}
                        />
                        <div className="col-span-2 sm:col-span-1 flex justify-end">
                            <ICDeleteItem
                                className="icon text-error"
                                onClick={(e) => deleteDateListItem(id, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        ));
    else if (type === "list")
        return (
            <div className="gap-y-3 gap-x-4 grid md:grid-cols-2">
                {content.map((item, index) => (
                    <div className="input-div grid grid-cols-12 gap-x-1">
                        <input
                            id={id}
                            className="input col-span-11"
                            type="text"
                            placeholder="..."
                            value={item}
                            onChange={(e) => listHandler(e, index)}
                        />
                        <ICDeleteItem
                            className="icon text-error col-span-1"
                            onClick={(e) => deleteListItem(id, index)}
                        />
                    </div>
                ))}
            </div>
        );
    else if (type === "labels")
        return (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 flex-wrap gap-3">
                {content.map((item, index) => (
                    <div className="input-div grid grid-cols-12 gap-x-1">
                        <input
                            className="input col-span-10"
                            id={id}
                            type="text"
                            placeholder="..."
                            value={item}
                            onChange={(e) => listHandler(e, index)}
                        />
                        <ICDeleteItem
                            className="icon text-error col-span-2"
                            onClick={(e) => deleteListItem(id, index)}
                        />
                    </div>
                ))}
            </div>
        );
    else if (type === "slider")
        return content.map((item, index) => (
            <div className="grid grid-cols-12 gap-3 items-center">
                <div className="input-div col-span-3">
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
                    className="input col-span-8"
                    type="range"
                    min="0"
                    max="6"
                    step="1"
                    value={item.level.replace("/6", "")}
                    onChange={(e) => sliderHandler(e, index)}
                />
                <div className="col-span-1 flex justify-end">
                    <ICDeleteItem
                        className="icon text-error"
                        onClick={(e) => deleteDateListItem(id, index)}
                    />
                </div>
            </div>
        ));
};

export default Container;
