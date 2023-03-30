import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { useRef, useEffect } from 'react';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export default function Column({ isCenter, num, year }) {
    const { scroll } = useLocomotiveScroll();
    const columnRef = useRef(null);

    useEffect(() => {
        if (scroll && !isCenter) {
            scroll.on('scroll', (obj) => {
                columnRef.current.style.transform = `translateY(${obj.scroll.y}px)`;
            });
        }

        return () => { };
    }, [ scroll ]);

    return (
        <div ref={columnRef}>
            <div className="relative block will-change-transform">
                {[ 1, 2, 3, 4, 5, 6, 7 ].map((i, idx) => (
                    <div className="m-0 relative z-10" key={idx}>
                        <div className="relative overflow-hidden rounded-xl cursor-pointer mt-[3vh]">
                            <img
                                className="w-full h-full"
                                src={`/lookbook/${year}/${i}.png`}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}