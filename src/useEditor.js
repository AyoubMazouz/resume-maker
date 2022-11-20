import { AVAILABLE_TYPES, DEFAULT_DATA, INIT_SECTION, MESSAGES } from "./data";
import { useGlobalContext } from "./GlobalContext";

const useEditor = () => {
    const { data, setData, setAlert } = useGlobalContext();

    // Helper Functions.
    const copyData = () => JSON.parse(JSON.stringify(data));

    const checkImgAspectRatio = (img) => {
        if (img.width !== img.height)
            setAlert({ type: "warn", text: MESSAGES.imgAspectRatio });
    };

    const resizeImg = (file, size) => {
        return new Promise((resolve, reject) => {
            if (!file || isNaN(size)) reject("file_size_error");

            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.src = e.target.result;
                checkImgAspectRatio(img);
                img.onload = () => {
                    // Dynamically Creating Canvas.
                    const canvas = document.createElement("canvas");
                    canvas.width = size;
                    canvas.height = (size * (img.height / img.width)) | 0;
                    const ctx = canvas.getContext("2d");
                    // Drawing the resized Image to the Canvas.
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

                    // DataURL of the Resized Image
                    resolve(canvas.toDataURL(e.target, "image.jpeg", 0.5));
                };
            };
            reader.readAsDataURL(file);
        });
    };

    // Handlers.
    const imgHandler = async (e) => {
        const dataURL = await resizeImg(e.target.files[0], 600);
        const copiedData = copyData();
        copiedData[0].content.img = dataURL;
        setData(copiedData);
    };

    const titleHandler = (e) => {
        const copiedData = copyData();

        copiedData.forEach((section) => {
            if (section.id === e.target.id) section.title = e.target.value;
        });

        setData(copiedData);
    };

    const headerHandler = (e) => {
        const copiedData = copyData();

        copiedData.forEach((section) => {
            if (section.id === e.target.id)
                section.content[e.target.name] = e.target.value;
        });

        setData(copiedData);
    };

    const dateListHandler = (e, index) => {
        const copiedData = copyData();

        copiedData.forEach((section) => {
            if (section.id === e.target.id)
                section.content.forEach((item, i) => {
                    if (index === i) item[e.target.name] = e.target.value;
                });
        });

        setData(copiedData);
    };

    const listHandler = (e, index) => {
        const copiedData = copyData();

        copiedData.forEach((section) => {
            if (section.id === e.target.id)
                section.content.forEach((_, i) => {
                    if (index === i) section.content[i] = e.target.value;
                });
        });

        setData(copiedData);
    };

    const sliderHandler = (e, index) => {
        const copiedData = copyData();

        copiedData.forEach((section) => {
            if (section.id === e.target.id)
                section.content[index][e.target.name] = e.target.value;
        });

        setData(copiedData);
    };

    // Add Item/Section Functions.
    const addSection = (type) => {
        const copiedData = copyData();

        const newSection = INIT_SECTION[type];
        newSection.id = `${copiedData[copiedData.length - 1].idCount++}`;

        copiedData[copiedData.length] = copiedData[copiedData.length - 1];
        copiedData[copiedData.length - 2] = newSection;

        setData(copiedData);
    };

    const addDateListItem = (id) => {
        const copiedData = copyData();

        copiedData.forEach((section) => {
            if (section.id === id)
                section.content.push({
                    date: "",
                    text: "",
                });
        });

        setData(copiedData);
    };

    const addListItem = (id) => {
        const copiedData = copyData();

        copiedData.forEach((section) => {
            if (section.id === id) section.content.push("");
        });

        setData(copiedData);
    };

    const addSliderItem = (id) => {
        const copiedData = copyData();

        copiedData.forEach((section) => {
            if (section.id === id)
                section.content.push({
                    name: "",
                    level: "3",
                });
        });

        setData(copiedData);
    };

    // delete Item/Section Functions.
    const deleteSection = (id) => {
        const copiedData = copyData().filter((section) => section.id !== id);
        setData(copiedData);
    };

    const deleteDateListItem = (id) => {
        const copiedData = copyData();

        copiedData.forEach((section) => {
            if (section.id === id) {
                section.content.pop();
            }
        });

        setData(copiedData);
    };

    const deleteListItem = (id) => {
        const copiedData = copyData();

        copiedData.forEach((section) => {
            if (section.id === id) section.content.pop();
        });

        setData(copiedData);
    };

    const deleteSliderItem = (id) => {
        const copiedData = copyData();

        copiedData.forEach((section) => {
            if (section.id === id) section.content.pop();
        });

        setData(copiedData);
    };

    // Move Section Around.
    const moveSection = (id, dir) => {
        const copiedData = copyData();

        const didMove = copiedData.some((section, index) => {
            if (section.id === id && dir === "up" && index !== 1) {
                [copiedData[index], copiedData[index - 1]] = [
                    copiedData[index - 1],
                    copiedData[index],
                ];
                return true;
            } else if (
                section.id === id &&
                dir === "down" &&
                index !== copiedData.length - 2
            ) {
                [copiedData[index], copiedData[index + 1]] = [
                    copiedData[index + 1],
                    copiedData[index],
                ];
                return true;
            }
        });

        setData(copiedData);
        return didMove;
    };

    // Options Functions.
    const saveToLocalStorage = (e) =>
        localStorage.setItem("resumeMakerData", JSON.stringify(data));

    const resetLocalStorage = (defaultData) =>
        localStorage.setItem("resumeMakerData", JSON.stringify(defaultData));

    const resetData = () => {
        resetLocalStorage(DEFAULT_DATA);
        setData(DEFAULT_DATA);
    };

    const exportToJSON = (e) => {
        const stringData = JSON.stringify(data);
        navigator.clipboard.writeText(stringData);
    };

    const importFromJSON = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = (readerEvent) => {
            const json = readerEvent.target.result;
            const content = JSON.parse(json);
            console.log(content);
            setData(content);
        };
    };

    const validateJSONData = (data) => {
        const errorAlert = {
            type: "error",
            text: "This file might be corrupted!",
        };

        // Check if array empty or non array type:
        if (!Array.isArray(data) || data.length < 1)
            return setAlert(errorAlert);

        // Header Validation:
        if (
            data[0].id !== "0" ||
            data[0].type !== "header" ||
            !data[0].content.hasOwnProperty("img") ||
            !data[0].content.hasOwnProperty("firstName") ||
            !data[0].content.hasOwnProperty("lastName") ||
            !data[0].content.hasOwnProperty("title") ||
            !data[0].content.hasOwnProperty("age") ||
            !data[0].content.hasOwnProperty("email") ||
            !data[0].content.hasOwnProperty("phone") ||
            !data[0].content.hasOwnProperty("address")
        )
            return setAlert(errorAlert);

        // Check if all sections has types:
        const typeAttExist = data.some((section) => {
            if (section.hasOwnProperty("type"))
                if (!AVAILABLE_TYPES.includes(section.type)) return false;
            if (!section.hasOwnProperty("title") && section.id !== "0")
                return false;
            return false;
        });
        if (!typeAttExist) return setAlert(errorAlert);

        return true;
    };

    return {
        headerHandler,
        titleHandler,
        imgHandler,
        dateListHandler,
        listHandler,
        sliderHandler,
        addSection,
        addDateListItem,
        addListItem,
        addSliderItem,
        deleteSection,
        deleteDateListItem,
        deleteListItem,
        deleteSliderItem,
        moveSection,
        saveToLocalStorage,
        exportToJSON,
        importFromJSON,
        resetData,
    };
};

export default useEditor;
