import React from "react";
import { useGlobalContext } from "./GlobalContext";
import CLClassic from "./resumes/Classic/CLClassic";
import CVClassic from "./resumes/Classic/CVClassic";
import CLDefault from "./resumes/Default/CLDefault";
import CVDefault from "./resumes/Default/CVDefault";

const Curr = () => {
    const { cv } = useGlobalContext();

    if (cv === "default")
        return (
            <>
                <CVDefault />
                <CLDefault />
            </>
        );
    else if (cv === "classic")
        return (
            <>
                <CVClassic />
                <CLClassic />
            </>
        );
};

export default Curr;
