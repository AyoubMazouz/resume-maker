import { useGlobalContext } from "./GlobalContext";

const Curr = () => {
    const { cv, cvComps } = useGlobalContext();
    return (
        <div className="rounded-xl shadow-xl overflow-hidden max-w-[210mm] w-full">
            {cvComps[cv]}
        </div>
    );
};

export default Curr;
