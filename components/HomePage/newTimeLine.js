import { useEffect, useState } from 'react';
import cn from 'classnames';
import styles from '../../styles/newtimeline.module.scss'

export default function newTimeLine() {
    const [pane0, setPane0] = useState(true);
    const [pane1, setPane1] = useState(false);
    const [pane2, setPane2] = useState(false);
    const [pane3, setPane3] = useState(false);
    const [pane4, setPane4] = useState(false);
    const [pane5, setPane5] = useState(false);
    const [pane6, setPane6] = useState(false);

    const paneClassName = cn(styles.pane, "cursor-pointer duration-700 ease-in-out flex-grow m-2 min-h-[70vh] min-w-14 overflow-hidden relative rounded-cc transition-all")
    const activePaneClassName = cn(styles.pane, styles.active, "cursor-pointer duration-700 ease-in-out flex-grow m-2 min-h-[70vh] min-w-14 overflow-hidden relative rounded-cc transition-all")

    function handleClick(idx) {
        switch(idx) {
            case 0:
                setPane0(true);
                setPane1(false);
                setPane2(false);
                setPane3(false);
                setPane4(false);
                setPane5(false);
                setPane6(false);
                break;
            case 1:
                setPane0(false);
                setPane1(true);
                setPane2(false);
                setPane3(false);
                setPane4(false);
                setPane5(false);
                setPane6(false);
                break;
            case 2:
                setPane0(false);
                setPane1(false);
                setPane2(true);
                setPane3(false);
                setPane4(false);
                setPane5(false);
                setPane6(false);
                break;
            case 3:
                setPane0(false);
                setPane1(false);
                setPane2(false);
                setPane3(true);
                setPane4(false);
                setPane5(false);
                setPane6(false);
                break;
            case 4:
                setPane0(false);
                setPane1(false);
                setPane2(false);
                setPane3(false);
                setPane4(true);
                setPane5(false);
                setPane6(false);
                break;
            case 5:
                setPane0(false);
                setPane1(false);
                setPane2(false);
                setPane3(false);
                setPane4(false);
                setPane5(true);
                setPane6(false);
                break;
            case 6:
                setPane0(false);
                setPane1(false);
                setPane2(false);
                setPane3(false);
                setPane4(false);
                setPane5(false);
                setPane6(true);
                break;
        }
    }

    // useEffect(() => {
    //     const panes = document.querySelectorAll('.pane');

    //     panes.forEach((pane, idx) => {
    //         isactives[ idx ] = false;
    //         isactives[0] = true
    //         pane.addEventListener('click', () => {
    //             isactives[ activePane ] = false;
    //             activePane = idx;
    //             isactives[ activePane ] = true;
    //         });
    //     });
    // }, []);


    return (
        <div class="antialiased bg-black flex flex-col font-sans items-stretch justify-center py-16 sm:flex-row sm:items-center">

            <div class="flex flex-col flex-grow items-stretch max-w-6xl min-w-md w-full sm:flex-row sm:overflow-hidden my-8">
                <div class={pane0 ? activePaneClassName : paneClassName } onClick={(e) => handleClick(0)}>
                    <div class={cn(styles.background, "absolute  bg-center bg-cover bg-red-500 bg-red-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10")}></div>
                    <div class="absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent h-1/2 inset-x-0 opacity-0 shadow to-black transform transition-all translate-y-1/2 z-20"></div>
                    <div class={cn(styles.label, "absolute bottom-0 duration-700 ease-in-out flex left-0 mb-2 ml-3 sm:mb-3 sm:ml-2 transition-all z-30")}>
                        <div class="bg-gray-900 flex h-10 icon items-center justify-center mr-3 rounded-full text-red-500 w-10"><img src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650187442/Website%20Content/Home/eventSVG/15_fqiof1.svg"></img></div>
                        <div class={cn(styles.content, "flex flex-col justify-center leading-tight text-white whitespace-pre")}>
                            <div class="ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-8">Imagine</div>
                            <div class="delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-8">Chase your dreams</div>
                        </div>
                    </div>
                </div>
                <div class={pane1 ? activePaneClassName : paneClassName} onClick={(e) => handleClick(1)}>
                    <div class={cn(styles.background, "absolute bg-center bg-cover bg-yellow-500 bg-yellow-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10")}></div>

                    <div class="absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent h-1/2 inset-x-0 opacity-0 shadow to-black transform transition-all translate-y-1/2 z-20"></div>
                    <div class={cn(styles.label, "absolute bottom-0 duration-700 ease-in-out flex left-0 mb-2 ml-3 sm:mb-3 sm:ml-2 transition-all z-30")}>
                        <div class="bg-gray-900 flex h-10 icon items-center justify-center mr-3 rounded-full text-yellow-500 w-10"><img src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650187442/Website%20Content/Home/eventSVG/16_l6ewrv.svg"></img></div>
                        <div class={cn(styles.content, " flex flex-col justify-center leading-tight text-white whitespace-pre")}>
                            <div class="ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-8">Build</div>
                            <div class="delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-8">Realize your vision</div>
                        </div>
                    </div>
                </div>
                <div class={pane2 ? activePaneClassName : paneClassName} onClick={(e) => handleClick(2)}>
                    <div class={cn(styles.background, "absolute  bg-center bg-cover bg-green-500 bg-green-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10")}></div>
                    <div class="absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent h-1/2 inset-x-0 opacity-0 shadow to-black transform transition-all translate-y-1/2 z-20"></div>
                    <div class={cn(styles.label, "absolute bottom-0 duration-700 ease-in-out flex  left-0 mb-2 ml-3 sm:mb-3 sm:ml-2 transition-all z-30")}>
                        <div class="bg-gray-900 flex h-10 icon items-center justify-center mr-3 rounded-full text-green-500 w-10"><img src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650187442/Website%20Content/Home/eventSVG/17_vas4kn.svg"></img></div>
                        <div class={cn(styles.content, "flex flex-col justify-center leading-tight text-white whitespace-pre")}>
                            <div class="ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-8">Explore</div>
                            <div class="delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-8">Discover the world</div>
                        </div>
                    </div>
                </div>
                <div class={pane3 ? activePaneClassName : paneClassName} onClick={(e) => handleClick(3)}>
                    <div class={cn(styles.background, "absolute bg-center bg-cover bg-blue-500 bg-blue-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10")}></div>

                    <div class="absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent h-1/2 inset-x-0 opacity-0 shadow to-black transform transition-all translate-y-1/2 z-20"></div>
                    <div class={cn(styles.label, "absolute bottom-0 duration-700 ease-in-out flex left-0 mb-2 ml-3 sm:mb-3 sm:ml-2 transition-all z-30")}>
                        <div class="bg-gray-900 flex h-10 icon items-center justify-center mr-3 rounded-full text-blue-500 w-10"><img src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650187442/Website%20Content/Home/eventSVG/18_gjf3ro.svg"></img></div>
                        <div class={cn(styles.content, "flex flex-col justify-center leading-tight text-white whitespace-pre")}>
                            <div class="ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-8">Adapt</div>
                            <div class="delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-8">Embrace the times</div>
                        </div>
                    </div>
                </div>
                <div class={pane4 ? activePaneClassName : paneClassName} onClick={(e) => handleClick(4)}>
                    <div class={cn(styles.background, "absolute bg-center bg-cover bg-purple-500 bg-purple-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10")}></div>

                    <div class="absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent h-1/2 inset-x-0 opacity-0 shadow to-black transform transition-all translate-y-1/2 z-20"></div>
                    <div class={cn(styles.label, "absolute bottom-0 duration-700 ease-in-out flex left-0 mb-2 ml-3 sm:mb-3 sm:ml-2 transition-all z-30")}>
                        <div class="bg-gray-900 flex h-10 icon items-center justify-center mr-3 rounded-full text-purple-500 w-10"><img src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650187442/Website%20Content/Home/eventSVG/19_zfvvop.svg"></img></div>
                        <div class={cn(styles.content, "flex flex-col justify-center leading-tight text-white whitespace-pre")}>
                            <div class="ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-8">Inspire</div>
                            <div class="delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-8">Share your potential</div>
                        </div>
                    </div>
                </div>
                <div class={pane5 ? activePaneClassName : paneClassName} onClick={(e) => handleClick(5)}>
                    <div class={cn(styles.background, "absolute bg-center bg-cover bg-purple-500 bg-purple-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10")}></div>

                    <div class="absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent h-1/2 inset-x-0 opacity-0 shadow to-black transform transition-all translate-y-1/2 z-20"></div>
                    <div class={cn(styles.label, "absolute bottom-0 duration-700 ease-in-out flex left-0 mb-2 ml-3 sm:mb-3 sm:ml-2 transition-all z-30")}>
                        <div class="bg-gray-900 flex h-10 icon items-center justify-center mr-3 rounded-full text-purple-500 w-10"><img src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650187442/Website%20Content/Home/eventSVG/21_wpmxtr.svg"></img></div>
                        <div class={cn(styles.content, "flex flex-col justify-center leading-tight text-white whitespace-pre")}>
                            <div class="ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-8">Inspire</div>
                            <div class="delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-8">Share your potential</div>
                        </div>
                    </div>
                </div>
                <div class={pane6 ? activePaneClassName : paneClassName} onClick={(e) => handleClick(6)}>
                    <div class={cn(styles.background, "absolute bg-center bg-cover bg-purple-500 bg-purple-img bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10")}></div>

                    <div class="absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent h-1/2 inset-x-0 opacity-0 shadow to-black transform transition-all translate-y-1/2 z-20"></div>
                    <div class={cn(styles.label, "absolute bottom-0 duration-700 ease-in-out flex left-0 mb-2 ml-3 sm:mb-3 sm:ml-2 transition-all z-30")}>
                        <div class="bg-gray-900 flex h-10 icon items-center justify-center mr-3 rounded-full text-purple-500 w-10"><img src="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650187442/Website%20Content/Home/eventSVG/19_zfvvop.svg"></img></div>
                        <div class={cn(styles.content, "flex flex-col justify-center leading-tight text-white whitespace-pre")}>
                            <div class="ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-8">Inspire</div>
                            <div class="delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-8">Share your potential</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}