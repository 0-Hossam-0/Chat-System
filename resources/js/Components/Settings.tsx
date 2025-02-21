import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGear } from "@fortawesome/free-solid-svg-icons";
import logo from "./Images/profile.png";

const Settings: React.FC = () => {
    const [isMenu, setMenuStatus] = useState<Boolean>(true);
    const sideBar = useRef<HTMLDivElement | null>(null);
    const settings = useRef<HTMLDivElement | null>(null);
    const profile = useRef<HTMLDivElement | null>(null);
    const menu = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (!isMenu && sideBar.current && profile.current && settings.current) {
            sideBar.current.style.width = "12rem";
            settings.current.style.visibility = "visible";
            profile.current.style.visibility = "visible";
            document
                .getElementById("settings-div")!
                .classList.add("indigo-hover");
            document
                .getElementById("profile-div")!
                .classList.add("indigo-hover");
        } else if (
            isMenu &&
            sideBar.current &&
            profile.current &&
            settings.current
        ) {
            sideBar.current.style.width = "4rem";
            settings.current.style.visibility = "hidden";
            profile.current.style.visibility = "hidden";
            document
                .getElementById("settings-div")!
                .classList.remove("indigo-hover");
            document
                .getElementById("profile-div")!
                .classList.remove("indigo-hover");
        }
    }, [isMenu]);
    return (
        <div
            className="h-[100vh] bg-[#ece1e1] float-left flex flex-col w-16 justify-between dark:bg-[#131313] z-20 relative"
            ref={sideBar}
        >
            <div
                ref={menu}
                className="cursor-pointer"
                onClick={() => {
                    setMenuStatus(!isMenu);
                }}
            >
                <div className="hover:bg-indigo-400 w-14 h-10 ml-1 mt-10 rounded-full flex items-center justify-center ">
                    <FontAwesomeIcon
                        icon={faBars}
                        className=" text-xl w-8 dark:text-white transition"
                    />
                </div>
            </div>
            <div className="flex flex-col mb-8 gap-4">
                <div
                    className="flex items-center gap-2 ml-2  w-40 h-12 rounded-lg z-10"
                    id="settings-div"
                >
                    <div className=" rounded-full transition-all w-10 flex justify-center ml-1 hover:bg-indigo-400">
                        <FontAwesomeIcon
                            icon={faGear}
                            className="text-2xl p-2 cursor-pointer w-8 dark:text-white"
                        />
                    </div>
                    <p
                        className="dark:text-white h-fit text-center invisible"
                        ref={settings}
                    >
                        Settings
                    </p>
                </div>
                <div
                    className="flex gap-2 items-center ml-2 w-40 h-12 rounded-lg "
                    id="profile-div"
                >
                    <div className="rounded-full flex ml-1 hover:bg-indigo-400">
                        <img
                            src={logo}
                            className="w-10 h-[40px] cursor-pointer"
                        />
                    </div>
                    <p
                        className="dark:text-white h-fit text-center w-fit invisible"
                        ref={profile}
                    >
                        Profile
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Settings;
