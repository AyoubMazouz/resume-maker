import React from "react";
import { useGlobalContext } from "../GlobalContext";
import { ABOUT, DOCUMENTATION, ICClose } from "../data";

const Alert = () => {
    const { setAlert, alert } = useGlobalContext(false);

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
    } else if (alert.type === "about") {
        const type = alert.type.replace("-conf", "");
        return (
            <div
                className={`fixed top-[4.8rem] right-[50%] translate-x-[50%] z-20 rounded-md shadow-lg border-[3px] font-semibold text-center bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 w-5/6 md:w-4/6 lg:w-3/6`}
            >
                <div className="relative py-6 px-16 space-y-6">
                    <div className="text-3xl text-gray-500 font-bold">
                        Resume Maker
                    </div>
                    {ABOUT.content.map((paragraph) => (
                        <p>{paragraph}</p>
                    ))}
                    <ul>
                        <div className="text-semibold text-lg">
                            Contributors:
                        </div>
                        <ul className="list-disc underline">
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/ayoub-mazouz-8aa85a226/"
                                    target="_blank"
                                >
                                    Mazouz Ayoub
                                </a>
                            </li>
                            <li>
                                <a href="" target="_blank">
                                    Ferhani Othmane
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/chaimaa-elbahi-016901257/?original_referer="
                                    target="_blank"
                                >
                                    El Bahi Chaimaâ
                                </a>
                            </li>
                        </ul>
                    </ul>
                    <a
                        href={ABOUT.repository}
                        className="underline font-semibold text-gray-600"
                    >
                        Github Repository
                    </a>
                    <div className="flex justify-center">
                        <div className="bg-success text-gray-100 py-1 pr-1 pl-3 rounded-l">
                            Version
                        </div>
                        <div className="bg-info text-gray-100 py-1 pl-1 pr-3 rounded-r">
                            {ABOUT.version}
                        </div>
                    </div>
                    <button
                        className="fixed top-[1rem] right-[2rem] bg-gray-100 dark:bg-gray-800 rounded-full shadow"
                        onClick={() => setAlert(false)}
                    >
                        <ICClose
                            className={`icon text-4xl dark:text-gray-300 text-gray-dark`}
                        />
                    </button>
                </div>
            </div>
        );
    } else if (alert.type === "docs") {
        const type = alert.type.replace("-conf", "");
        return (
            <div
                className={`fixed top-[4.8rem] right-[50%] translate-x-[50%] z-20 rounded-md shadow-lg border-[3px] font-semibold bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 w-5/6 md:w-4/6 lg:w-3/6`}
            >
                <div className="relative py-6 px-2 overflow-y-scroll max-h-[80vh]">
                    {DOCUMENTATION}
                    <button
                        className="fixed top-[1rem] right-[2rem] bg-gray-100 dark:bg-gray-800 rounded-full shadow"
                        onClick={() => setAlert(false)}
                    >
                        <ICClose
                            className={`icon text-4xl dark:text-gray-300 text-gray-dark`}
                        />
                    </button>
                </div>
            </div>
        );
    }
};

export default Alert;
