import { useGlobalContext } from "./GlobalContext";

const Curr = () => {
    const { cv, cvComps } = useGlobalContext();
    return cvComps[cv];
};

export default Curr;
