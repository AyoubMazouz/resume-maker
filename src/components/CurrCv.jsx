import { useGlobalContext } from "../GlobalContext";
import { CV_COMPS, LETTER_COMPS } from "../data";

const CurrCv = () => {
    const { currDesign, letterEnabled } = useGlobalContext();
    return (
        <div className="space-y-4 print:space-y-0 relative overflow-x-scroll md:overflow-auto md:translate-x-0 translate-y-[-4%] md:translate-y-0 scale-[.90] md:scale-100">
            <div
                id="cv"
                className="rounded-xl shadow-xl max-w-[210mm] max-h-[297mm] mx-auto md:overflow-hidden"
            >
                {CV_COMPS[currDesign]}
            </div>
            <div
                id="letter"
                className={`${
                    !letterEnabled && "opacity-25 print:hidden"
                } rounded-xl shadow-xl max-w-[210mm] max-h-[297mm] mx-auto md:overflow-hidden`}
            >
                {LETTER_COMPS[currDesign]}
            </div>
        </div>
    );
};

export default CurrCv;
