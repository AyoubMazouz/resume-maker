import { useGlobalContext } from "../GlobalContext";
import { CV_COMPS } from "../data";

const CurrCv = () => {
    const { currDesign } = useGlobalContext();
    return (
        <div className="rounded-xl shadow-xl overflow-hidden max-w-[210mm] w-full">
            {CV_COMPS[currDesign]}
        </div>
    );
};

export default CurrCv;
