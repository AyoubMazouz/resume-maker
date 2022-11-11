import { useGlobalContext } from "./GlobalContext";

const useEditor = () => {
    const { data, setData } = useGlobalContext();

    const copyData = () => JSON.parse(JSON.stringify(data));

    const headerValuesHandler = (e) => {
        const copiedData = copyData();

        copiedData.forEach((section) => {
            if (section.types[0] === "header") {
                section.contents[0][e.target.name] = e.target.value;
            }
        });

        setData(copiedData);
    };

    const dateListHandler = (e, index) => {
        const copiedData = copyData();

        copiedData.forEach((section) => {
            if (section.types[index] === "date_list") {
                section.contents.forEach((cont) => {
                    if (cont.id === e.target.id)
                        cont[e.target.name] = e.target.value;
                });
            }
        });

        setData(copiedData);
    };

    const listHandler = (e, index) => {
        const copiedData = copyData();

        copiedData.forEach((section) => {
            if (section.types[index] === "list") {
                section.contents[index].forEach((_, i) => {
                    if (`${i}` === e.target.id)
                        section.contents[index][i] = e.target.value;
                });
            }
        });

        setData(copiedData);
    };

    const labelHandler = (e, index) => {
        const copiedData = copyData();

        copiedData.forEach((section) => {
            if (section.types[index] === "labels") {
                if (e.target.name === "label")
                    section.contents[index].label = e.target.value;

                section.contents[index].values.forEach((_, i) => {
                    if (`${i}` === e.target.id)
                        section.contents[index].values[i] = e.target.value;
                });
            }
        });

        setData(copiedData);
    };

    const sliderHandler = (e, index) => {
        const copiedData = copyData();

        copiedData.forEach((section) => {
            if (section.types[index] === "slider") {
                if (e.target.name === "label") {
                    section.contents[index].name = e.target.value;
                } else if (`${index}` === e.target.id)
                    section.contents[index].level = e.target.value;
            }
        });

        setData(copiedData);
    };

    return {
        headerValuesHandler,
        dateListHandler,
        listHandler,
        labelHandler,
        sliderHandler,
    };
};

export default useEditor;
