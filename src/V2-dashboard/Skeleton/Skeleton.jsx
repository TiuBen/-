import { useState } from "react";
import { AlignJustify } from "lucide-react";

function Skeleton({
    LeftSidebar,
    isLeftSidebarOpen,
    setLeftSidebarOpen,
    topNav,
    rightSidebar,
    main,
    bottomBar,
    floatingAction,
    children,
}) {
    const [isRightSidebarOpen, setRightSidebarOpen] = useState(true);

    return (
        <>
            <div
                className=" overflow-hidden"
                style={{ display: "grid", height: "100vh", gridTemplateRows: "3rem 1fr 2rem", position: "relative" }}
            >
                {/* Top Navigation */}
                {
                    <header className=" sticky w-full top-0 bg-red-500 h-[3rem] " style={{ gridRow: "1" }}>
                        {topNav}
                    </header>
                }

                <div className="flex flex-1 overflow-hidden">
                    {/* Left Sidebar */}
                    <aside
                        className={`relative  duration-200 overflow-visible  z-10 ${
                            isLeftSidebarOpen ? "w-[8rem]" : "w-[4rem]"
                        }  `}
                        style={{ backgroundColor: "var(--accent-9)", color: "var(--accent-6)" }}
                    >
                        <>{LeftSidebar}</>

                        {/* Button */}
                        <button
                            className={`flex items-center justify-center content-center absolute top-[1rem] transform right-0 translate-x-[50%] max-h-[2rem] max-w-[2rem] min-h-[2rem] min-w-[2rem] rounded-full bg-white border-blue-500 shadow-md duration-200 `}
                            onClick={() => {
                                setLeftSidebarOpen(!isLeftSidebarOpen);
                            }}
                        >
                            <AlignJustify />
                        </button>
                    </aside>

                    {/* Main Content */}
                    <main className="flex flex-1 overflow-auto relative border border-red-500">{main}</main>

                    {/* Right Sidebar */}
                    {rightSidebar && (
                        <aside className="w-64 bg-gray-100 border-l border-gray-200 ">
                            {rightSidebar && "rightSidebar"}
                        </aside>
                    )}
                </div>

                {/* Bottom Bar */}
                {bottomBar && <footer className="w-full bg-gray-800 text-white ">{bottomBar}</footer>}

                {/* Floating Action Button */}
                {/* {floatingAction && (
                <div className=" bottom-8 right-8">
                    <button className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700">
                        {floatingAction}
                    </button>
                </div>
            )} */}
            </div>
        </>
    );
}

export default Skeleton;
