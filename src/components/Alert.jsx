import React from "react";
import { useGlobalContext } from "../GlobalContext";
import { ICClose } from "../data";

const Alert = () => {
    const { setAlert, alert } = useGlobalContext();

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setAlert(false);
        }, 10000);
        return () => clearTimeout(timer);
    }, []);

    if (["error", "warn", "info", "success"].includes(alert.type))
        return (
            <div
                className={`fixed top-[4.8rem] right-[50%] translate-x-[50%] z-20 rounded-xl shadow-lg border-[3px] font-semibold text-lg text-center bg-${alert.type} border-${alert.type}-dark text-${alert.type}-dark`}
            >
                <div className="relative py-6 px-16">
                    <div>{alert.text}</div>
                    <ICClose
                        className={`icon text-4xl absolute top-[.6rem] right-[.6rem] text-${alert.type}-dark`}
                        onClick={() => setAlert(false)}
                    />
                </div>
            </div>
        );
    else if (
        ["error-conf", "warn-conf", "info-conf", "success-conf"].includes(
            alert.type
        )
    ) {
        const type = alert.type.replace("-conf", "");
        return (
            <div
                className={`fixed top-[4.8rem] right-[50%] translate-x-[50%] z-20  rounded-md shadow-lg border-[3px] font-semibold text-lg text-center bg-${type} border-${type}-dark text-${type}-dark w-5/6 md:w-4/6 lg:w-3/6`}
            >
                <div className="relative py-6 px-16">
                    <div>{alert.text}</div>
                    <div className="flex justify-around mt-3">
                        {alert.children}
                    </div>
                    <ICClose
                        className={`icon text-4xl absolute top-[.6rem] right-[.6rem] text-${type}-dark`}
                        onClick={() => setAlert(false)}
                    />
                </div>
            </div>
        );
    }
};

export default Alert;
