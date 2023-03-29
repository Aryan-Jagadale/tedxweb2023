import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { useRef, useEffect } from 'react';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export default function Column({ isCenter, num }) {
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
                {[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ].map((i, idx) => (
                    <div className="m-0 relative z-10" key={idx}>
                        <div className="relative overflow-hidden rounded-xl cursor-pointer mt-[8vh] mx-[1vw] ">
                            <img
                                className="w-full h-full"
                                src={`https://source.unsplash.com/random/400x420/?face&${i}?sig&${num * i - idx
                                    }`}
                            />
                        </div>
                        <p className="px-6">{2011 - i}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}