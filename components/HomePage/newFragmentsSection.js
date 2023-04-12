import { useState, useEffect } from "react"

export default function NewFragmentsSection() {
    // countdown to 30th april
    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    const [timeUp, setTimeUp] = useState(false)

    const { days, hours, minutes, seconds } = time

    const startTimer = () => {
        const countDownDate = new Date('April 30, 2023 00:00:00').getTime()

        const x = setInterval(() => {
            const now = new Date().getTime()
            const distance = countDownDate - now

            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            )
            const minutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60)
            )
            const seconds = Math.floor((distance % (1000 * 60)) / 1000)

            if (distance < 0) {
                clearInterval(x)
                setTimeUp(true)
            } else {
                setTime({ days, hours, minutes, seconds })
            }
        }, 1000)
    }

    useEffect(() => {
        startTimer()
        return () => {
            setTimeUp(false)
        }
    }, [])


    return (
        <div className="bg-[#212121] text-white bg-no-repeat bg-left-bottom w-full py-28 xl:px-0 px-6"
            style={{ backgroundImage: 'url(/Artboard.png)',backgroundPositionY:'center' }}
        >
            {/* <img src="/themelogo.png" className="absolute -left-10 z-20 w-[300px]" /> */}
            <div className="max-w-6xl mx-auto md:flex" >
                <div className="xl:w-1/2 flex justify-center items-left flex-col">

                    <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold heading text-white px-4 xl:px-0">30th April, 2023</h1>
                    <h1 className="text-[2.75rem] sm:text-6xl mb-4 xl:mb-0 xl:text-7xl mt-8 font-bold heading text-white px-4 xl:px-0">FRAGMENTS</h1>
                </div>
                <div className="xl:w-1/2">
                    <p className="text-lg md:text-xl text-white text-justify tracking-wider">
                        All the strum and drag in our heads draws down to introspecting- engulfed by turmoil. From raging uproars to cheerful celebrations, spiralling times to exciting unknowns, we've been thriving amidst the chaos.We often wonder, will we ever seek answers? Will the chaos make sense? Now is the time we inch closer to our reality by being grateful for the minute moments, and not losing a sense of empathy, triumphing in our trials- through the balance that comes from within.
                    </p>
                </div>
            </div>
            <div className="max-w-6xl mx-auto mt-8 flex justify-end">
                <button className="bg-[#dd1313] border-none tracking-wider text-white text-xl outline-none heading px-12 py-2">Register</button>
            </div>
            <div className="max-w-3xl mx-auto mt-24 flex justify-evenly items-center text-white">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-4xl md:text-7xl font-bold heading text-white   tracking-wider">{('0' + days).slice(-2)}</h1>
                    <p className="text-xl text-white font-bold mt-2 text-justify">
                        Days
                    </p>
                </div>
                <div className="flex flex-col">
                <h1 className="text-4xl md:text-7xl font-bold heading text-white mb-10  tracking-wider">:</h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-4xl md:text-7xl font-bold heading text-white   tracking-wider">{('0' + hours).slice(-2)}</h1>
                    <p className="text-xl text-white font-bold mt-2 text-justify">
                        Hours
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl md:text-7xl font-bold heading text-white mb-10  tracking-wider">:</h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-4xl md:text-7xl font-bold heading text-white   tracking-wider">{('0' + minutes).slice(-2)}</h1>
                    <p className="text-xl text-white font-bold mt-2 text-justify">
                        Mins
                    </p>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-4xl md:text-7xl font-bold heading text-white mb-10  tracking-wider">:</h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-4xl md:text-7xl font-bold heading text-white   tracking-wider">{('0' + seconds).slice(-2)}</h1>
                    <p className="text-xl text-white font-bold mt-2 text-justify">
                        Secs
                    </p>
                </div>
            </div>
            {/* <div className="max-w-6xl mx-auto mt-8 flex justify-center">
                <h2 className="text-2xl text-gray-700 font-bold">Left</h2>
            </div> */}
        </div>
    )
}