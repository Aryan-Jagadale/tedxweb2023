import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { useRef } from 'react';
import Column from '@/components/LookBook/Column';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export default function LookBook() {
    const containerRef = useRef(null);

    return (
        <LocomotiveScrollProvider
            options={{
                smooth: true,
            }}
            containerRef={containerRef}
        >
            <main
                className="w-full relative px-12 flex justify-center bg-[#EEF0F4] text-black"
                data-scroll-container
                ref={containerRef}
            >
                <div className="relative z-10 flex pt-[5vh] pb-[15vh] mx-6 h-screen flex-col-reverse ">
                    <Column num={1} />
                </div>
                <div
                    className="relative z-10 flex pt-[5vh] pb-[15vh] mx-6 "
                    data-scroll-section
                >
                    <Column isCenter={true} num={2} />
                </div>
                <div className="relative z-10 flex pt-[5vh] pb-[15vh] mx-6  h-screen flex-col-reverse ">
                    <Column num={3} />
                </div>
                <div
                    className="relative z-10 flex pt-[5vh] pb-[15vh] mx-6 "
                    data-scroll-section
                >
                    <Column isCenter={true} num={5} />
                </div>
            </main>
        </LocomotiveScrollProvider>
    );
}

