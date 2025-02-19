"use client"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"
import abeezee from "@/lib/font"
import Gilroy from "@/lib/fonts2"
// import { useRouter } from "next/navigation"

const slides = [
    {
        id: 1,
        image: "/images/Secure.png",
        title: "Secure Your Transactions",
        description: "Begin your journey to secure transparent transactions."
    },
    {
        id: 2,
        image: "/images/Creating.png",
        title: "Creating Secure Contracts",
        description: "Formalize agreements effortlessly and allocate payment percentages to ensure a fair and secure process."
    },
    {
        id: 3,
        image: "/images/Real.png",
        title: "Real-Time Condition Tracking",
        description: "Stay in control with real-time condition tracking and release payments as each condition is successfully completed."
    }
];

const LogoDisplaying = () => {
    // const router = useRouter()
    const [stage, setStage] = useState<number>(1);

    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        if (index < slides.length - 1) {
            setIndex(index + 1);
        }
    };

    useEffect(() => {
        // Step 1: Show first image for 3 seconds
        const firstTimer = setTimeout(() => { setStage(2) }, 3000);

        // Step 2: Show second image for 2 seconds before changing background
        const secondTimer = setTimeout(() => { setStage(3) }, 5000);

        // Step 3: Hide everything after 3 seconds and show new div
        const thirdTimer = setTimeout(() => setStage(4), 8000);

        const finalTimer = setTimeout(() => setStage(5), 8000);


        return () => {
            clearTimeout(firstTimer);
            clearTimeout(secondTimer);
            clearTimeout(thirdTimer);
            clearTimeout(finalTimer);

        };
    }, []);
    return (
        <div className="w-[100%] bg-[#FFFFFF]">
            <div className="lg:w-[60%] md:lg:w-[60%] sm:lg:w-[100%] w-[100%] m-auto flex justify-center items-center h-screen">
                <div
                    className={`lg:w-[60%] md:w-[60%] sm:w-[100%] w-[100%] h-screen m-auto flex justify-center items-center transition-colors duration-500 
        ${stage === 5 ? "bg-[#F8F8FB]" : stage >= 3 ? "bg-gradient-to-b from-[#0149AB] to-[#0186A8]" : "bg-white"}
    `}
                >
                    <AnimatePresence mode="wait">
                        {stage <= 3 && (
                            <motion.div
                                key="main"
                                className={`w-full h-screen flex justify-center items-center transition-colors duration-500 
                                ${stage === 5 ? "bg-[#F8F8FB]" : stage >= 3 ? "bg-gradient-to-b from-[#0149AB] to-[#0186A8]" : "bg-white"}
                            `}
                            >
                                {/* First Logo Animation */}
                                {stage === 1 && (
                                    <motion.div
                                        key="first"
                                        initial={{ y: "-70vh", opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ type: "spring", stiffness: 120, damping: 15, delay: 0.3 }}
                                    >
                                        <Image
                                            src="/images/068ACB04-CB7E-4FB8-88E7-D7B68D65037B-1.png"
                                            alt="First Logo"
                                            width={150}
                                            height={150}
                                        />
                                    </motion.div>
                                )}

                                {/* Second Logo & Animated Text */}
                                {stage >= 2 && (
                                    <motion.div
                                        key="second"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 1 }}
                                        className="flex flex-col items-center mt-14"
                                    >
                                        {/* Second Logo */}
                                        <Image
                                            src="/images/Dependly-W-Icon-1.png"
                                            alt="Second Logo"
                                            width={150}
                                            height={150}
                                        />

                                        {/* Animated "Love" Text */}
                                        {stage === 3 && (
                                            <motion.div
                                                className="-mt-24"
                                                initial={{ x: "-110vw" }}
                                                animate={{ x: 0 }}
                                                transition={{ type: "spring", stiffness: 80, damping: 20, duration: 2 }}
                                            >
                                                <Image
                                                    src="/images/Word-Logo.png"
                                                    alt="Word Logo"
                                                    width={375}
                                                    height={185}
                                                />
                                            </motion.div>
                                        )}
                                    </motion.div>
                                )}
                            </motion.div>
                        )}

                        {/* New Div Appears After Everything Else */}
                        {stage === 5 && (
                            <div className="lg:w-[100%] md:lg:w-[60%] sm:lg:w-[100%] w-[100%] p-4 h-screen flex flex-col justify-center items-center bg-[##F8F8FB] ">
                                {/* Animated Content */}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={slides[index].id}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        transition={{ duration: 0.7, ease: "easeInOut" }}
                                        className="flex flex-col items-center space-y-4 p-4 text-center"
                                    >
                                        <Image
                                            src={slides[index].image}
                                            alt="Illustration"
                                            width={327}
                                            height={239.68}
                                            className=""
                                        />
                                        <h2 className={`${abeezee.className} text-[22px] font-bold text-[#2D2D2D]`}>
                                            {slides[index].title}
                                        </h2>
                                        <p className={`text-[16px] text-normal text-[#2D2D2D] text-center ${Gilroy.className}`}>
                                            {slides[index].description}
                                        </p>
                                    </motion.div>
                                </AnimatePresence>

                                {/* Pagination Dots - Now Function Like Buttons */}
                                <div className="flex gap-2 mt-4">
                                    {slides.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => {
                                                setIndex(i);
                                                if (i < slides.length - 1) {
                                                    setTimeout(nextSlide, 1500); // Auto-next after clicking dot
                                                }
                                            }}
                                            className={`h-2 w-2 rounded-full transition-all ${i === index ? "bg-blue-600 w-6" : "bg-gray-300"
                                                }`}
                                        ></button>
                                    ))}
                                </div>
                                <motion.button
                                    onClick={() => {
                                        if (index === slides.length - 1) {

                                            // Here is where i put the link 
                                            // router.push("/Create-Account"); 
                                            // window.location.href = "http://localhost:3000/Create-Account";
                                        } else {
                                            nextSlide();
                                        }
                                    }}
                                    className="bg-blue-600 text-white px-6 py-2 rounded-lg mt-6 w-full max-w-sm shadow-md transition hover:bg-blue-700"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {index === slides.length - 1 ? "Get Started" : "Continue"}
                                </motion.button>
                            </div>
                        )}



                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

export default LogoDisplaying